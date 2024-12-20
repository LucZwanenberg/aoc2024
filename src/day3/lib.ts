import { extractMultiplications } from "./lib/multiplication";

const DO = "do()";
const DONT = "don't()";

export const sumMultiplications = (input: string): number =>
  extractMultiplications(input).reduce(
    (sum, { left, right }) => sum + left * right,
    0
  );

export const sumMultiplicationsWithEnablingDisabling = (
  input: string
): number => {
  const enabledContent = input
    .split(DO)
    .map((block) => block.split(DONT)[0])
    .join(DO);

  return sumMultiplications(enabledContent);
};
