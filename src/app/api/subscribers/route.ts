import { NEWSLETTER_LIST_ID } from "@/constants";
import { IGetNewsLetterSubscribers } from "@/types/newsletter.types";

export async function GET() {
  const username = process.env.NEWSLETTER_USERNAME;
  const password = process.env.NEWSLETTER_PASSWORD;

  const response = await fetch(
    `https://newsletter.armancodes.com/api/lists/${NEWSLETTER_LIST_ID}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    },
  );

  const data = (await response.json()) as IGetNewsLetterSubscribers;

  if (response.status === 200) {
    return Response.json(
      {
        message: "Request was successful",
        totalSubscribers: data?.data?.subscriber_statuses?.confirmed,
      },
      { status: 200, statusText: "ok" },
    );
  } else {
    return Response.json(
      { message: "Something went wrong! Please, try again later." },
      {
        status: 400,
        statusText: "Error",
      },
    );
  }
}
