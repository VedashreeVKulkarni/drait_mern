function checkOddEvenZero(arr) {
  arr.forEach(num => {
    if (num === 0) {
      console.log(`${num} is Zero`);
    } else if (num % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  });
}

// Example array
const numbers = [0, 1, 2, 3, 4, 5, 10, -2, -1, 0];
checkOddEvenZero(numbers);
