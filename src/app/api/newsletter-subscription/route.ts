import { emailValidateHandler } from "@/utils/validators";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  const userEmail = res.email;
  const isEmailValid = emailValidateHandler(userEmail);

  if (!isEmailValid) {
    return new Response(
      JSON.stringify({
        message:
          "The email is not valid. Please provide a valid email address.",
      }),
      {
        status: 400,
        statusText: "Bad Request",
      },
    );
  }

  const username = process.env.NEWSLETTER_USERNAME;
  const password = process.env.NEWSLETTER_PASSWORD;

  const newsLetterRequestBody = {
    email: userEmail,
    lists: [1],
  };

  try {
    const response = await fetch(
      "https://newsletter.armancodes.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(username + ":" + password),
        },
        body: JSON.stringify(newsLetterRequestBody),
      },
    );

    const data = await response.json();
    console.log("Response from newsletter provider:", data);

    return Response.json(
      {
        message:
          "Thanks for signing up! Please confirm your email to start receiving updates.",
        data: data,
      },
      { status: 201, statusText: "ok" },
    );
  } catch (error) {
    console.error("Error sending request:", error);
    return Response.json(
      {
        message: "Oops! Something went wrong! Please try again!",
      },
      { status: 400, statusText: "error" },
    );
  }
}
