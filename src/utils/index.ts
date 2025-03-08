export const add = (numbers: string): number => {
  if (!numbers) return 0;

  //* Default delimiters
  let delimiter: RegExp = /,|\n/;
  let customDelimiterMatch = numbers.match(/^\/\/(\[.*?\]|.)\n/);

  //* Check if the string matches the custom delimiter declaration
  if (customDelimiterMatch) {
    let rawDelimiter = customDelimiterMatch[1];
    if (rawDelimiter.startsWith("[") && rawDelimiter.endsWith("]")) {
      rawDelimiter = rawDelimiter.slice(1, -1); //! Remove the brackets
    }

    delimiter = new RegExp(rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    numbers = numbers.split("\n")[1]; //! Remove delimiter definition line
  }

  //* Split numbers based on delimiters
  let numArray: number[] = numbers.split(delimiter).map(Number);

  //* Filter negative numbers
  let negatives: number[] = numArray.filter((num) => num < 0);

  //* Throw an error if there are negative numbers
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  //* Return the sum of the numbers
  return numArray.reduce((sum, num) => sum + num, 0);
};
