import { describe, expect, it } from "vitest";
import { createExtractor, extractMultiplications } from "./multiplication";

describe(createExtractor, () => {
  it.only.each([
    {
      given: ",286)who()mul(23,zo3nk);mul(56,856)~mul()]h23ow()-mul(726,284)^",
      expected: ["23,zo3nk", "56,856", "", "726,284"],
    },
    {
      given:
        "?&@mul(463,674(? */},:-:@mul(124,324)}?who()^/ #!;mulwhere()from()>;-",
      expected: ["124,324"],
    },
  ])("extacts content from given delimiters", ({ given, expected }) => {
    const extractMuls = createExtractor("mul(", ")");

    const actual = extractMuls(given);

    expect(actual).toEqual(expected);
  });
});

describe(extractMultiplications, () => {
  it.each([
    {
      given: ",286)who()mul(23,zo3nk);mul(56,856)~mul()]h23ow()-mul(726,284)^",
      expected: [
        { left: 56, right: 856 },
        { left: 726, right: 284 },
      ],
    },
    {
      given:
        "?&@mul(463,674(? */},:-:@mul(124,324)}?who()^/ #!;mulwhere()from()>;-",
      expected: [{ left: 124, right: 324 }],
    },
  ])("extracts multiplications", ({ given, expected }) => {
    const actual = extractMultiplications(given);
    expect(actual).toEqual(expected);
  });
});
