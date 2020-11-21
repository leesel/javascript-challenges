// const parensAreBalanced = (input) => {
//   return false
// }

var parensAreBalanced = function (input) {

  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  const stack = [];

  for (const paran of input) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran)
    } else {
      const closeParan = stack.pop();
      if (paran !== obj[closeParan]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(parensAreBalanced('([)'));

module.exports = parensAreBalanced
