function isPalindrome(num) {
  const str = num.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Test cases
console.log(isPalindrome(121));   // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123));   // false
console.log(isPalindrome(1001));  // true
console.log(isPalindrome(-121));  // false (negative numbers not considered palindromes)
