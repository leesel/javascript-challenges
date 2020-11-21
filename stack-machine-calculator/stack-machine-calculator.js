// const stackMachineCalculator = (instructions) => {
//   return instructions
// }

const stackMachineCalculator = (instructions) => {
  const stack = [];
  const expArray = instructions.split('');
  for(let i = 0; i < expArray.length; i++){
    switch (expArray[i]){
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        stack.push(stack.pop() - stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        stack.push(stack.pop() / stack.pop());
        break;
      default:
        stack.push(parseInt(expArray[i]));
    }
  }
  return stack.pop();
}

module.exports = stackMachineCalculator
