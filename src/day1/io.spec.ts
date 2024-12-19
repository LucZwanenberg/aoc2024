import { describe, it, expect } from 'vitest';
import { parseInput, readInput } from "./io";

describe(parseInput, () => {
  it("parses input", () => {
    const given =
      "35039   67568\n" +
      "61770   80134\n" +
      "64079   34668";

    const actual = parseInput(given);

    expect(actual).toEqual([
      [35039, 61770, 64079],
      [67568, 80134, 34668]
    ]);
  });
});

describe("readInput", () => {
  it("reads input", () => {
    const actual = readInput(`${__dirname}/input.txt`);

    expect(actual.length).toEqual(2);
    expect(actual[0].length).toBeGreaterThan(0);
    expect(actual[1].length).toBeGreaterThan(0);
    expect(actual[0].length).toEqual(actual[1].length);
  });
});
