import { describe, it, expect } from 'vitest';
import { parseInput, readInput } from "./io";

describe(parseInput, () => {
  it("parses input", () => {
    const given =
      "3 5 7 10 13 15 18 19\n" +
      "57 54 52 50 47\n" +
      "54 52 50 48 46";

    const actual = parseInput(given);

    expect(actual).toEqual([
      [3, 5, 7, 10, 13, 15, 18, 19],
      [57, 54, 52, 50, 47],
      [54, 52, 50, 48, 46]
    ]);
  });
});

describe("readInput", () => {
  it("reads input", () => {
    const actual = readInput(`${__dirname}/../input.txt`);

    expect(actual.length).toBeGreaterThan(0);
    expect(actual[0].length).toBeGreaterThan(0);
  });
});
