const numberToReversedDigits = number => {
  const newNumber = String(number).replace(/\D+/g, "");
  return Array.from(String(newNumber), Number).reverse();
};
module.exports = numberToReversedDigits;
