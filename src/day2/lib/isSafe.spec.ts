import { describe, expect, it } from "vitest";
import { isSafe } from "./isSafe";

describe.each([
  {
    scenario: "Safe because the levels are all decreasing by 1 or 2.",
    givenReport: [7, 6, 4, 2, 1],
    expectSafe: true
  },
  {
    scenario: "Unsafe because 2 7 is an increase of 5.",
    givenReport: [1, 2, 7, 8, 9],
    expectSafe: false
  },
  {
    scenario: "Unsafe because 6 2 is a decrease of 4.",
    givenReport: [9, 7, 6, 2, 1],
    expectSafe: false
  },
  {
    scenario: "Unsafe because 1 3 is increasing but 3 2 is decreasing.",
    givenReport: [1, 3, 2, 4, 5],
    expectSafe: false
  },
  {
    scenario: "Unsafe because 4 4 is neither an increase or a decrease.",
    givenReport: [8, 6, 4, 4, 1],
    expectSafe: false
  },
  {
    scenario: "Safe because the levels are all increasing by 1, 2, or 3.",
    givenReport: [1, 3, 6, 7, 9],
    expectSafe: true
  }
])(isSafe, ({ scenario, givenReport, expectSafe }) => {
  describe(`when report is [${givenReport.join(', ')}]`, () => {
    it(scenario, () => {
      const actual = isSafe(givenReport);

      expect(actual).toEqual(expectSafe);
    });
  });
});

