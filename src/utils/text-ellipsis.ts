/**
 * @param {string} text
 * @param {number} count
 * @returns {string} returns the formatted text string with "..." ellipsis based on the text length and count value for characters
 */
export default function textEllipsisFormatter(
  text: string,
  count: number,
): string {
  const textLength = text.split("").length;
  const newText = text.split("").splice(0, count).join("");

  if (textLength > count) {
    return `${newText}` + "...";
  } else {
    return newText;
  }
}
