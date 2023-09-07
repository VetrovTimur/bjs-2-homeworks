function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let sum = 0;
  let avg = 0;

  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue}, sum);
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  return sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue}, sum);
}

function differenceMaxMinWorker(...arr) {
  let different;
    different = Math.max(...arr) - Math.min(...arr);
    if(different === -Infinity || different === Infinity) {
        return different = 0;
    }
    return different;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let different;

  for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return different = sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg;
  for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  avg = sumEvenElement / countEvenElement;
  if(Number.isNaN(avg)) {
      return avg = 0;
  } else {
      return avg;
  } 
}

// function makeWork (arrOfArr, func) {
//   let maxWorkerResult = 0;
//   let test = [];
//   for(let i = 0; i < arrOfArr.length;) {
//     maxWorkerResult = arrOfArr[i].func(arrOfArr[i]);
//     test = test.push(maxWorkerResult);
//   }
//   return console.log(test);
// }
