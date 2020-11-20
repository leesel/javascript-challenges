const targetSumExistsInTwoNumbers = (list, target) => {
  for (let i = 0; i < list.length; i++){
    for (let j = i + 1; j < list.length; j++){
      if (list[i] + list[j] === target) {
        return true
      }
    }
  }
  return false
}

const targetSumExistsInThreeNumbers = (list, target) => {
  let numObject = {};
  for (let i = 0; i < list.length; i++) {
    let thisNum = list[i];
    numObject[thisNum] = i;
  }

  for (let i = 0; i < list.length; i++) {
    let diff = target - list[i];
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
    	return true;
    }
  }
  
  return false;
}

console.log(targetSumExistsInThreeNumbers([2, 7, 11, 15], 9));
// Output [ 0, 1 ]

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
