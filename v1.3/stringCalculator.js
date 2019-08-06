function myParse(string) {
  let arr = [];
  let result = 0;
  string = string.split(' ');
  string.forEach((item, index)=> {
    if (!isNaN(parseInt(item))){
       arr.push(parseInt(item, 16));
    } else {
      arr.push(item);
    }
  });

  while (arr.includes('x') || arr.includes('/')) {
    for (i = 1; i < arr.length; i += 2) {
      if (arr[i] === 'x' || arr[i] === '/') {
        condense(arr[i - 1], arr[i + 1], arr[i], i);
      }
    }
  }

  for (i = 0; i < arr.length; i++) {
      condense(arr[0], arr[2], arr[1], 1);
  }

  return arr[0];

  function condense (operand1, operand2, operator, index) {
    switch(operator) {
      case 'x':
        result = operand1 * operand2;
        arr.splice(index - 1, 3);
        arr.splice(index - 1, 0, result);
        break;
      case '/':
        result = operand1 / operand2;
        arr.splice(index - 1, 3);
        arr.splice(index - 1, 0, result);
        break;
      case '+':
        result = operand1 + operand2;
        arr.splice(index - 1, 3);
        arr.splice(index - 1, 0, result);
        break;
      case '-':
        result = operand1 - operand2;
        arr.splice(index - 1, 3);
        arr.splice(index - 1, 0, result);
        break;
      case '%':
        result = operand1 % operand2;
        arr.splice(index - 1, 3);
        arr.splice(index - 1, 0, result);
        break;
    }
  }

}

let  equation = "1 + 4 + 5 x 3 / 8 - 2";

console.log(
  myParse(equation)
);
