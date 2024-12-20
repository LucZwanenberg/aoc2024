const MULTIPLICATION = ["mul(", ")"] as const;

type Multiplication = {
  left: number;
  right: number;
};

const findOccurences = (search: string, value: string) => {
  let startIndex = 0;
  const indices = [];

  while ((startIndex = value.indexOf(search, startIndex)) !== -1) {
    indices.push(startIndex);
    startIndex += search.length;
  }

  return indices;
};

const pairOccurences = ({
  openIndices,
  closeIndices,
}: {
  openIndices: number[];
  closeIndices: number[];
}) => {
  const pairs: [number, number][] = [];

  let openPtr = 0;
  closeIndices.forEach((closeIndex, index) => {
    while (
      openPtr + 1 < openIndices.length &&
      openIndices[openPtr + 1] < closeIndex
    ) {
      openPtr++;
    }

    const openIndex = openIndices[openPtr];
    if (openIndex < closeIndex) {
      pairs.push([openIndex, closeIndex]);
      openPtr++;
    }
  });

  return pairs;
};

export const createExtractor =
  (open: string, close: string) =>
  (value: string): string[] => {
    const openIndices = findOccurences(open, value);
    const closeIndices = findOccurences(close, value);
    const pairs = pairOccurences({ openIndices, closeIndices });

    return pairs.map(([start, end]) =>
      value.substring(start + open.length, end)
    );
  };

const isOneToThreeDigits = (str: string) => /^[0-9]{1,3}$/.test(str);

export const parseArg = (arg: string): number | null =>
  isOneToThreeDigits(arg) ? parseInt(arg) : null;

export const attemptParseMultiplication = (
  args: string
): Multiplication | null => {
  const parts = args.split(",");

  if (parts.length !== 2) return null;

  const [left, right] = parts.map(parseArg);

  if (left === null || right === null) return null;

  return { left, right };
};

export const extractMultiplications = (input: string): Multiplication[] => {
  const extractMuls = createExtractor(MULTIPLICATION[0], MULTIPLICATION[1]);
  const mulArgs = extractMuls(input);

  const multiplications: Multiplication[] = [];

  mulArgs.forEach((args) => {
    const multiplication = attemptParseMultiplication(args);
    if (multiplication !== null) multiplications.push(multiplication);
  });

  return multiplications;
};
