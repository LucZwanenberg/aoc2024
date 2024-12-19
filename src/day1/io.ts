import { readFileSync } from "fs";

export type Input = {
  left: number[];
  right: number[];
}

export const parseInput = (text: string): Input =>
  text.split("\n").reduce((input, curr) => {
    const [left, right] = curr.split("   ");

    return {
      left: [...input.left, parseInt(left)],
      right: [...input.right, parseInt(right)]
    };
  }, { left: [], right: [] } as Input);

export const readInput = (path: string): Input => {
  const textInput = readFileSync(path, 'utf-8');
  return parseInput(textInput);
}
