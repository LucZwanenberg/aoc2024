import * as day1 from "./day1";
import * as day2 from "./day2";

export const challenges = {
  day1_1: day1.runPartOne,
  day1_2: day1.runPartTwo,
  day2_1: day2.runPartOne,
  day2_2: day2.runPartTwo
} as const;
