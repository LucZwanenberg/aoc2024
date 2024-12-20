import { readFileSync } from "fs";

export const parseInput = (text: string): Input => text.split("\n").join("");

export const readInput = (path: string): Input => {
  const textInput = readFileSync(path, "utf-8");
  return parseInput(textInput);
};
