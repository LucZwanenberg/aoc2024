

const calculateDifference = (a: number, b: number) => Math.abs(a - b);

const implies = (a: boolean, b: boolean) => a ? b : true;

/**
 * The engineers are trying to figure out which reports are safe. The Red-Nosed
 * reactor safety systems can only tolerate levels that are either gradually
 * increasing or gradually decreasing. So, a report only counts as safe if both
 * of the following are true:
 * 
 *  - The levels are either all increasing or all decreasing.
 *  - Any two adjacent levels differ by at least one and at most three.
 */
export const findFirstViolatingIndices = (report: Report): number[] => {
  for (let i = 1; i < report.length; i++) {
    const indices = [i - 1, i];
    const [a, b] = indices.map(index => report[index]);

    const difference = calculateDifference(a, b);

    // Any two adjacent levels differ by at least one and at most three.
    if (difference < 1 || difference > 3) return [i - 1, i];
  }

  for (let i = 2; i < report.length; i++) {
    const indices = [i - 2, i - 1, i];
    const [a, b, c] = indices.map(index => report[index]);

    // The levels are either all increasing or all decreasing.
    if (a === b) return indices;
    if (!implies(a > b, b > c)) return indices;
    if (!implies(a < b, b < c)) return indices;
  }

  return [];
};

/**
 * Check whether a report is safe without applying the Problem Dampener
 */
export const isSafe = (report: Report): boolean =>
  findFirstViolatingIndices(report).length === 0;
