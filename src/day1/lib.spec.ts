import { describe, it, expect, test } from 'vitest';
import { calculateDistances, calculateTotalDistance, pairUpLists } from './lib';

describe(pairUpLists, () => {
  test.each([
    {
      given: [[], []],
      expected: []
    },
    {
      given: [[2], [5]],
      expected: [[2, 5]]
    },
    {
      given: [[1, 3, 1], [3, 2, 1]],
      expected: [[1, 1], [1, 2], [3, 3]]
    },
    {
      given: [[1], [3, 2, 1]],
      expected: [[1, 1]]
    },
    {
      given: [[3, 2, 1], [1]],
      expected: [[1, 1]]
    }
  ])("pairs up lists", ({ given, expected }) => {
    const actual = pairUpLists(given[0], given[1]);

    expect(actual).toEqual(expected);
  });
});

describe(calculateDistances, () => {
  it("calculates distances", () => {
    const given: [number, number][] = [
      [1, 1], [1, 5], [5, 1], [-2, -5], [-5, 2]
    ];

    const actual = calculateDistances(given);

    expect(actual).toEqual(
      [0, 4, 4, 3, 7]
    );
  });
});

describe(calculateTotalDistance, () => {
  it("calculates total distance", () => {
    const input: [number[], number[]] = [
      [1, 3, -3, 2],
      [5, -2, 3, 7]
    ];

    const actual = calculateTotalDistance(input);

    expect(actual).toEqual(10);
  });
});

