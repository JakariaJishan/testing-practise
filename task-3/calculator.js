let calculator = {
  add: function (a, b) {
    if (typeof a === "string" || typeof b === "string") {
      throw new Error(a + " and " + b + " is not a string");
    } else {
      return a + b;
    }
  },

  subtract: function (a, b) {
    return a - b;
  },

  divide: function (a, b) {
    return a / b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

module.exports = calculator;
