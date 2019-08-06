function myParse(string) {
  let arr = [];
  let result = 0;
  string = string.split(' ');
  string.forEach((item, index)=> {
    if (!isNaN(parseInt(item))){
       arr.push(parseInt(item));
    } else {
      arr.push(item);
    }
  });

  while (arr.length > 1) {
    getResult();
  }

  console.log(result);

  function getResult () {
    switch(arr[1]) {
      case 'x':
        result = arr[0] * arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
        break;
      case '/':
        result = arr[0] / arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
        break;
      case '+':
        result =  arr[0] + arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
        break;
      case '-':
        result = arr[0] - arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
        break;
      case '%':
        result = arr[0] % arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
        break;
    }
  }

}

let  equation = "1 - 4 + 5 x 3 / 8";

console.log(
  myParse(equation)
);