/* eslint-disable @typescript-eslint/ban-ts-comment */
export type Options = {
  wordBound?: (char: string) => boolean;
  wordsPerMinute?: number;
};

export type ReadingTimeStats = {
  time: number;
  minutes: number;
};

export type WordCountStats = {
  total: number;
};

export type ReadingTimeResult = ReadingTimeStats & {
  words: WordCountStats;
};

// function
type WordBoundFunction = Options["wordBound"];

function codeIsInRangeHandler(
  number: number,
  arrayOfRanges: number[][],
): boolean {
  return arrayOfRanges.some(
    ([lowerBound, upperBound]) => lowerBound <= number && upperBound >= number,
  );
}

const isCJK: WordBoundFunction = (c) => {
  const charCode = c.charCodeAt(0);

  return codeIsInRangeHandler(charCode, [
    // Hiragana (Katakana not included on purpose,
    [0x3040, 0x309f],
    // CJK Unified ideographs
    [0x4e00, 0x9fff],
    // Hangul
    [0xac00, 0xd7a3],
    // CJK extensions
    [0x20000, 0x2ebe0],
  ]);
};

const isPunctuation: WordBoundFunction = (c) => {
  const charCode = c.charCodeAt(0);

  return codeIsInRangeHandler(charCode, [
    [0x21, 0x2f],
    [0x3a, 0x40],
    [0x5b, 0x60],
    [0x7b, 0x7e],
    // CJK Symbols and Punctuation
    [0x3000, 0x303f],
    // Full-width ASCII punctuation variants
    [0xff00, 0xffef],
  ]);
};

export function countWordsHandler(
  text: string,
  options: Options = {},
): WordCountStats {
  let words = 0;
  let start = 0;
  let end = text.length - 1;

  // Default word boundary function (considering whitespace as word boundaries)
  const defaultWordBound: WordBoundFunction = (c) => /\s/.test(c);
  const { wordBound: isWordBound = defaultWordBound } = options;

  // fetch bounds
  while (isWordBound(text[start])) start++;
  while (isWordBound(text[end])) end--;

  // Add a trailing word bound to make handling edges more convenient
  const normalizedText = `${text}\n`;

  // calculate the number of words
  for (let i = start; i <= end; i++) {
    // A CJK character is a always word;
    // A non-word bound followed by a word bound / CJK is the end of a word.
    if (
      // @ts-ignore
      isCJK(normalizedText[i]) ||
      (!isWordBound(normalizedText[i]) &&
        // @ts-ignore
        (isWordBound(normalizedText[i + 1]) || isCJK(normalizedText[i + 1])))
    ) {
      words++;
    }
    // In case of CJK followed by punctuations, those characters have to be eaten as well
    // @ts-ignore
    if (isCJK(normalizedText[i])) {
      while (
        i <= end &&
        // @ts-ignore
        (isPunctuation(normalizedText[i + 1]) ||
          isWordBound(normalizedText[i + 1]))
      ) {
        i++;
      }
    }
  }

  return { total: words };
}

export function readingTimeWithCount(
  words: WordCountStats,
  options: Options = {},
): ReadingTimeStats {
  const { wordsPerMinute = 200 } = options;
  // reading time stats
  const minutes = words.total / wordsPerMinute;

  const time = Math.round(minutes * 60 * 1000);
  const displayed = Math.ceil(parseFloat(minutes.toFixed(2)));

  return {
    minutes: displayed,
    time,
  };
}

export default function readingTime(
  text: string,
  options: Options = {},
): ReadingTimeResult {
  const words = countWordsHandler(text, options);
  return {
    ...readingTimeWithCount(words, options),
    words,
  };
}
