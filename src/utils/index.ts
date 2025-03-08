export const add = (numbers: string): number => {
  if (!numbers) return 0;
  let delimiter: RegExp = /,/;

  let numArray: number[] = numbers.split(delimiter).map(Number);
  return numArray.reduce((sum, num) => sum + num, 0);
};
