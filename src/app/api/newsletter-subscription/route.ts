/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  INewsLetterPreExistenceResponseProps,
  INewsLetterSuccessResponseProps,
} from "@/types/newsletter.types";
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

    const data:
      | INewsLetterPreExistenceResponseProps
      | INewsLetterSuccessResponseProps = await response.json();

    // @ts-ignore
    if (data?.data?.message === "E-mail already exists.") {
      return Response.json(
        { message: "E-mail already exists.", email: userEmail },
        { status: 403, statusText: "Error" },
      );
    } else {
      return Response.json(
        {
          message:
            "Thanks for signing up! Please confirm your email to start receiving updates.",
          data: data,
          email: userEmail,
        },
        { status: 201, statusText: "success" },
      );
    }
  } catch (error) {
    return Response.json(
      {
        message: "Oops! Something went wrong! Please try again!",
      },
      { status: 400, statusText: "error" },
    );
  }
}
