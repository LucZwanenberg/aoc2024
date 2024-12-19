import { readFileSync } from "fs";

export const parseInput = (text: string): Input =>
  text.split("\n")
    .map((line) => line.split(" ").map(level => parseInt(level)));

export const readInput = (path: string): Input => {
  const textInput = readFileSync(path, 'utf-8');
  return parseInput(textInput);
}
