import { findFirstViolatingIndices, isSafe } from "./isSafe";

const dampenReportAt = (report: Report, index: number) =>
  report.reduce(
    (acc, curr, i) => i === index ? acc : [...acc, curr],
    [] as Report
  );

/**
 * The engineers are surprised by the low number of safe reports until they
 * realize they forgot to tell you about the Problem Dampener.
 * 
 * The Problem Dampener is a reactor-mounted module that lets the reactor safety
 * systems tolerate a single bad level in what would otherwise be a safe report.
 * 
 * It's like the bad level never happened! Now, the same rules apply as before,
 * except if removing a single level from an unsafe report would make it safe,
 * the report instead counts as safe.
 */
export const isSafeDampened = (report: Report): boolean => {
  const violatingIndices = findFirstViolatingIndices(report);

  return violatingIndices.length === 0
    ? true
    : violatingIndices.map(i => dampenReportAt(report, i)).some(isSafe);
}
