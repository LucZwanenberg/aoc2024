import { readInput } from "./io";
import { calculateSimilarityScore, calculateTotalDistance } from "./lib";

const input = readInput(`${__dirname}/input.txt`);

export const runPartOne = (): number =>
  calculateTotalDistance(input);

export const runPartTwo = (): number =>
  calculateSimilarityScore(input);
