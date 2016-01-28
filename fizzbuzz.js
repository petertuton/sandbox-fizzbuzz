var FizzBuzz = function() {
};

FizzBuzz.prototype.divisibleBy = function(number, divisor) {
  return number % divisor === 0;
};

FizzBuzz.prototype.convertToFizzBuzz = function(number) {
  if (this.divisibleBy(number, 3)) {
    return "Fizz";
  }
  if (this.divisibleBy(number, 5)) {
    return "Buzz";
  }
  if (this.divisibleBy(number, 15)) {
    return "FizzBuzz";
  }
  return number.toString();
};

module.exports = FizzBuzz;
