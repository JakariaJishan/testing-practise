const calculator = require("./calculator");

describe("The simple Calculator", () => {
  describe("sum calculation", () => {
    test("2 and 2 sum is 4", () => {
      expect(calculator.add(2, 2)).toBe(4);
    });
    test("string is not accepted", () => {
      expect(() => calculator.add(2, "3")).toThrow();
    });
    test("4 and 4 is 8", () => {
      expect(calculator.add(4, 4)).toBe(8);
    });
  });
});


describe("The simple Calculator", () => {
    describe("subtract calculation", () => {
      test("2 and 2 sub is 0", () => {
        expect(calculator.subtract(2, 2)).toBe(0);
      });
      test("5 and 3 sub is 2", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
      });
      test("4 and 4 is 8", () => {
        expect(calculator.subtract(12, 4)).toBe(8);
      });
    });
  });
  

describe("The simple Calculator", () => {
    describe("division calculation", () => {
      test("2 and 2 division is 1", () => {
        expect(calculator.divide(2, 2)).toBe(1);
      });
      test("15 and 3 division is 5", () => {
        expect(calculator.divide(15, 3)).toBe(5);
      });
      test("12 and 4 division is 0", () => {
        expect(calculator.divide(12, 4)).toBe(3);
      });
    });
  });
  

describe("The simple Calculator", () => {
    describe("multifly calculation", () => {
      test("2 and 2 multifly is 4", () => {
        expect(calculator.multiply(2, 2)).toBe(4);
      });
      test("15 and 3 multifly is 45", () => {
        expect(calculator.multiply(15, 3)).toBe(45);
      });
      test("12 and 4 multifly is 48", () => {
        expect(calculator.multiply(12, 4)).toBe(48);
      });
    });
  });
  