export default function formatPublishedDateHandler(
  publishedAt: string | Date,
  locale: string = "en-UK",
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
): string {
  const date = new Date(publishedAt);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toLocaleDateString(locale, options)?.replace(" ", ", ");
}
