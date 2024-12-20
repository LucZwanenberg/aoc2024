import { describe, it, expect } from "vitest";
import { challenges } from ".";

describe("challenges", () => {
  it("day 1.1", () => {
    expect(challenges.day1.runPartOne()).toMatchInlineSnapshot(`2164381`);
  });

  it("day 1.2", () => {
    expect(challenges.day1.runPartTwo()).toMatchInlineSnapshot(`20719933`);
  });

  it("day 2.1", () => {
    expect(challenges.day2.runPartOne()).toMatchInlineSnapshot(`402`);
  });

  it("day 2.2", () => {
    expect(challenges.day2.runPartTwo()).toMatchInlineSnapshot(`455`);
  });

  it("day 3.1", () => {
    expect(challenges.day3.runPartOne()).toMatchInlineSnapshot(`178886550`);
  });

  it("day 3.2", () => {
    expect(challenges.day3.runPartTwo()).toMatchInlineSnapshot(`87163705`);
  });
});
