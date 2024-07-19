import { IGetSubscribersResponse } from "@/types/newsletter.types";

export async function getSubscribersNumber(): Promise<IGetSubscribersResponse> {
  const response = await fetch("/api/subscribers");

  const data = await response.json();
  return data;
}
