import { readInput } from "./io";
import { calculateTotalDistance } from "./lib";

export const runPartOne = (): number => {
  const input = readInput(`${__dirname}/input.txt`);
  return calculateTotalDistance(input);
};
