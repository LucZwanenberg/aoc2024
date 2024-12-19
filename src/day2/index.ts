import { readInput } from "./io/io";
import { isSafe } from "./lib/isSafe";
import { isSafeDampened } from "./lib/isSafeDampened";

const input: Report[] = readInput(`${__dirname}/input.txt`);

const count = (reports: Report[], check: (report: Report) => boolean) =>
  reports.reduce((acc, curr) => acc + (check(curr) ? 1 : 0), 0);

export const runPartOne = (): number => count(input, isSafe);
export const runPartTwo = (): number => count(input, isSafeDampened);
