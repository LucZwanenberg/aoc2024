import { readInput } from "./io/io";
import {
  sumMultiplications,
  sumMultiplicationsWithEnablingDisabling,
} from "./lib";

const input: string = readInput(`${__dirname}/input.txt`);

export const runPartOne = (): number => sumMultiplications(input);
export const runPartTwo = (): number =>
  sumMultiplicationsWithEnablingDisabling(input);
