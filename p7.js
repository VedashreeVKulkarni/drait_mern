const readline = require("readline");

// Setup terminal interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise(resolve => rl.question(question, ans => resolve(ans)));
}

// Math operations
function calculator(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? "Error: Division by zero" : a / b;
    case '%': return a % b;
    case '^': return Math.pow(a, b);
    case 'sqrt': return Math.sqrt(a);
    default: return "Invalid operation";
  }
}

async function main() {
  console.log("📱 Welcome to SmartCalc 2.0");

  while (true) {
    const operation = await ask("\nChoose operation (+, -, *, /, %, ^, sqrt) or type 'exit': ");
    if (operation.toLowerCase() === 'exit') break;

    const input1 = await ask("Enter first number: ");
    let num1 = parseFloat(input1);
    if (isNaN(num1)) {
      console.log("❌ Invalid number!");
      continue;
    }

    let result;
    if (operation === 'sqrt') {
      result = calculator(num1, null, operation);
    } else {
      const input2 = await ask("Enter second number: ");
      let num2 = parseFloat(input2);
      if (isNaN(num2)) {
        console.log("❌ Invalid number!");
        continue;
      }
      result = calculator(num1, num2, operation);
    }

    console.log(`✅ Result: ${result}`);
  }

  rl.close();
}

main();
