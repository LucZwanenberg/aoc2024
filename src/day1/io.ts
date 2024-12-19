import { readFileSync } from "fs";

export const parseInput = (text: string): [number[], number[]] =>
  text.split("\n").reduce(([a, b], curr) => {
    const [left, right] = curr.split("   ");
    return [[...a, parseInt(left)], [...b, parseInt(right)]];
  }, [[] as number[], [] as number[]]);

export const readInput = (path: string): [number[], number[]] => {
  console.log(path);
  const textInput = readFileSync(path, 'utf-8');
  return parseInput(textInput);
}
