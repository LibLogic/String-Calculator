function myParse(string) {
  let arr = [];
  string = string.split(' ');
  string.forEach((item, index)=> {
    if (!isNaN(parseInt(item))){
       arr.push(parseInt(item));
    } else {
      arr.push(item);
    }
  });

  while (arr.length > 0) {
    getResult();
  }

  console.log(result);

  function getResult () {
    switch(arr[1]) {
      case 'x':
        result = arr[0] * arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
      case '/':
        result = arr[0] / arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
      case '+':
        result =  arr[0] + arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
      case '-':
        result = arr[0] - arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
      case '%':
        result = arr[0] % arr[2];
        arr.splice(0, 3);
        arr.unshift(result);
    }
  }

}

let  equation = "10 x 23 / 12";

console.log(
  myParse(equation)
);