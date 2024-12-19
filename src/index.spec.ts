import { describe, it, expect } from 'vitest';
import { challenges } from ".";

describe("challenges", () => {
  it("day 1.1", () => {
    expect(challenges.day1_1()).toMatchInlineSnapshot(`2164381`);
  });

  it("day 1.2", () => {
    expect(challenges.day1_2()).toMatchInlineSnapshot(`20719933`);
  });
});
