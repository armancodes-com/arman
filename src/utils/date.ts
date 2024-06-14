export default function formatPublishedDateHandler(
  publishedAt: string | Date,
  locale: string = "en-UK",
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
): string {
  return new Date(publishedAt)
    .toLocaleDateString(locale, options)
    ?.replace(" ", ", ");
}
