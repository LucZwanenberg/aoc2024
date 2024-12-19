import { describe, it, expect, test } from 'vitest';
import { Input } from './io';
import { calculateDistances, calculateSimilarityScore, calculateTotalDistance, createOccurenceCounter, pairUpLists } from './lib';

describe(pairUpLists, () => {
  test.each([
    {
      given: { left: [], right: [] },
      expected: []
    },
    {
      given: { left: [2], right: [5] },
      expected: [[2, 5]]
    },
    {
      given: { left: [1, 1, 3], right: [1, 2, 3] },
      expected: [[1, 1], [1, 2], [3, 3]]
    },
    {
      given: { left: [1], right: [1, 2, 3] },
      expected: [[1, 1]]
    },
    {
      given: { left: [3, 2, 1], right: [1] },
      expected: [[1, 1]]
    }
  ])("pairs up lists", ({ given, expected }) => {
    const actual = pairUpLists(given);

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
    const input: Input = {
      left: [1, 3, -3, 2],
      right: [5, -2, 3, 7]
    };

    const actual = calculateTotalDistance(input);

    expect(actual).toEqual(10);
  });
});

describe(createOccurenceCounter, () => {
  it("calculates occurences", () => {
    const input = [3, 3, 2, 7, 7, 5, 7];

    const countOccurences = createOccurenceCounter(input);

    expect(countOccurences(1)).toEqual(0);
    expect(countOccurences(2)).toEqual(1);
    expect(countOccurences(3)).toEqual(2);
    expect(countOccurences(7)).toEqual(3);
  });
});

describe(calculateSimilarityScore, () => {
  it("calculates similarity score", () => {
    const input: Input = {
      left: [2, 1, 3, 3, 9],
      right: [3, 3, 3, 2, 3, 7]
    };

    const actual = calculateSimilarityScore(input);

    expect(actual).toEqual(26);
  });
});
