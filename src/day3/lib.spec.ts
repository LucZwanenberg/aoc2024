import { describe, expect, it } from "vitest";
import {
  sumMultiplications,
  sumMultiplicationsWithEnablingDisabling,
} from "./lib";

describe(sumMultiplications, () => {
  it("sums multiplications", () => {
    const input =
      ",286)who()mul(23,zo3nk);mul(56,856)~mul()]h23ow()-mul(726,284)^";

    const actual = sumMultiplications(input);

    expect(actual).toEqual(254120);
  });
});

describe(sumMultiplicationsWithEnablingDisabling, () => {
  it("sums multiplications while ignoring dont() blocks", () => {
    const input =
      ",28mul(1,2))6)whdon't()o(don't)mul(1,2)do();do()mul(1,2)~mul()]hdo()23mul(1,2)ow()don't()-mul(726,284)^";

    const actual = sumMultiplicationsWithEnablingDisabling(input);

    expect(actual).toEqual(6);
  });
});
