import { describe, expect, it } from "vitest";
import { add } from "../../utils";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  it("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("10,20")).toBe(30);
  });

  it("should handle an unknown number of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  it("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//|\n4|5|6")).toBe(15);
  });
});
