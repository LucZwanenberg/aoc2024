import { Input } from "./io";

/**
 * Maybe the lists are only off by a small amount! To find out, pair up the
 * numbers and measure how far apart they are. Pair up the smallest number in
 * the left list with the smallest number in the right list, then the
 * second-smallest left number with the second-smallest right number, and so on.
 */
export const pairUpLists = ({ left, right }: Input): [number, number][] => {
  const aSorted = [...left].sort();
  const bSorted = [...right].sort();
  const maxLength = Math.min(aSorted.length, bSorted.length);

  const result: [number, number][] = [];

  for (let i = 0; i < maxLength; i++) {
    result.push([aSorted[i], bSorted[i]]);
  }

  return result;
};

/**
 * Within each pair, figure out how far apart the two numbers are; you'll need
 * to add up all of those distances. For example, if you pair up a 3 from the
 * left list with a 7 from the right list, the distance apart is 4; if you pair
 * up a 9 with a 3, the distance apart is 6.
 */
export const calculateDistances = (pairs: [number, number][]): number[] =>
  pairs.map(([a, b]) => Math.abs(a - b));


/**
 * To find the total distance between the left list and the right list, add up
 * the distances between all of the pairs you found. In the example above, this
 * is 2 + 1 + 0 + 1 + 2 + 5, a total distance of 11. Your actual left and right
 * lists contain many location IDs.
 * 
 * What is the total distance between your lists?
 */
export const calculateTotalDistance = (input: Input) => {
  const pairedUpLists = pairUpLists(input);
  const distances = calculateDistances(pairedUpLists);
  return distances.reduce((acc, curr) => acc + curr, 0);
}

export const createOccurenceCounter = (input: number[]) => {
  const occurences = input.reduce((acc, curr) => ({
    ...acc,
    [curr]: curr in acc ? acc[curr] + 1 : 1
  }), {} as { [key: number]: number; })

  return (value: number) => value in occurences ? occurences[value] : 0;
}
/**
 * This time, you'll need to figure out exactly how often each number from the
 * left list appears in the right list. Calculate a total similarity score by
 * adding up each number in the left list after multiplying it by the number of
 * times that number appears in the right list.
 */
export const calculateSimilarityScore = (input: Input) => {
  const countOccurrencesInRightList = createOccurenceCounter(input.right);

  return input.left.reduce((similarityScore, leftValue) =>
    similarityScore + (leftValue * countOccurrencesInRightList(leftValue)),
    0
  );
};
