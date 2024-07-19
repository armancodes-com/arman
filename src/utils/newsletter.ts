export async function getSubscribersNumber() {
  const response = await fetch("/api/subscribers");

  const data = await response.json();
  console.log(data, "data from newsletter.ts");

  return data;
}
