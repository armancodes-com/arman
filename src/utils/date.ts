export default function formatPublishedDateHandler(
  publishedAt: string | Date,
  locale: string = "en-UK",
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
): string {
  if (!publishedAt) {
    throw new Error("Error: Invalid Date");
  }

  const date = new Date(publishedAt);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid Date");
  }

  return date.toLocaleDateString(locale, options)?.replace(" ", ", ");
}
