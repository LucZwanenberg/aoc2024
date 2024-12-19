/**
 * Maybe the lists are only off by a small amount! To find out, pair up the
 * numbers and measure how far apart they are. Pair up the smallest number in
 * the left list with the smallest number in the right list, then the
 * second-smallest left number with the second-smallest right number, and so on.
 */
export const pairUpLists = (a: number[], b: number[]): [number, number][] => {
  const aSorted = [...a].sort();
  const bSorted = [...b].sort();
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
export const calculateTotalDistance = (input: [number[], number[]]) => {
  const pairedUpLists = pairUpLists(input[0], input[1]);
  const distances = calculateDistances(pairedUpLists);
  return distances.reduce((acc, curr) => acc + curr, 0);
}
