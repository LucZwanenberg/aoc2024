import { describe, it, expect } from "vitest";
import { parseInput, readInput } from "./io";

describe(parseInput, () => {
  it("parses input", () => {
    const given = "-~who()?\n" + "mul(1,1)";

    const actual = parseInput(given);

    expect(actual).toEqual("-~who()?mul(1,1)");
  });
});

describe("readInput", () => {
  it("reads input", () => {
    const actual = readInput(`${__dirname}/../input.txt`);

    expect(actual.length).toBeGreaterThan(0);
  });
});
