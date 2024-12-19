import { describe, expect, it } from "vitest";
import { isSafeDampened } from "./isSafeDampened";

describe.each([
  {
    scenario: "Safe without removing any level.",
    givenReport: [7, 6, 4, 2, 1],
    expectSafe: true
  },
  {
    scenario: "Unsafe regardless of which level is removed.",
    givenReport: [1, 2, 7, 8, 9],
    expectSafe: false
  },
  {
    scenario: "Unsafe regardless of which level is removed.",
    givenReport: [9, 7, 6, 2, 1],
    expectSafe: false
  },
  {
    scenario: "Safe by removing the second level, 3.",
    givenReport: [1, 3, 2, 4, 5],
    expectSafe: true
  },
  {
    scenario: "Safe by removing the third level, 4.",
    givenReport: [8, 6, 4, 4, 1],
    expectSafe: true
  },
  {
    scenario: "Safe without removing any level.",
    givenReport: [1, 3, 6, 7, 9],
    expectSafe: true
  }
])(isSafeDampened, ({ scenario, givenReport, expectSafe }) => {
  describe(`when report is [${givenReport.join(', ')}]`, () => {
    it(scenario, () => {
      const actual = isSafeDampened(givenReport);

      expect(actual).toEqual(expectSafe);
    });
  });
});
