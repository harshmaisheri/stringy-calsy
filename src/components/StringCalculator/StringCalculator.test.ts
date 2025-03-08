import { describe, expect, it } from "vitest";
import { add } from "../../utils";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("555555555")).toBe(555555555);
  });

  it("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("101,202")).toBe(303);
  });

  it("should handle an unknown number of numbers", () => {
    expect(add("1,72,332,434,25")).toBe(864);
  });

  it("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//|\n4|5|6")).toBe(15);
  });

  it("should return the correct sum when using different delimiters", () => {
    expect(add("//#\n2#13#49")).toBe(64);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => add("-1,82,-32, 87,-43")).toThrow(
      "Negative numbers not allowed: -1, -32, -43"
    );
  });
});
