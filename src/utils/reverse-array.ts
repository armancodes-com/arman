export default function reverseArrayHandler<T>(data: T[]): T[] {
  const reversedArray = [];

  for (let i = data?.length - 1; i >= 0; i--) {
    reversedArray.push(data[i]);
  }

  return reversedArray;
}
