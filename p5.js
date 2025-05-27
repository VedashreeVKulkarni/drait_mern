function reverseNumber(num) {
  const reversed = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
  return reversed;
}

// Test it:
console.log(reverseNumber(1234));    // 4321
console.log(reverseNumber(-5678));   // -8765
console.log(reverseNumber(1000));    // 1
