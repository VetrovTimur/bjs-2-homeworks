function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  // let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
  // let different = (arr.length === 0) ? 0 : Math.max(...arr) - Math.min(...arr);
  return (arr.length === 0) ? 0 : Math.max(...arr) - Math.min(...arr); 
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  // let different = sumEvenElement - sumOddElement;

  return sumEvenElement - sumOddElement;;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  if(arr.length === 0) {
    return 0;
  } else {
    for(let i = 0; i < arr.length; i++) {
      if((arr[i] % 2) === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for(let i = 0; i < arrOfArr.length; i++) {
    
  }
  // return console.log(test);
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = [];
	let maxOfTheMax = [];

	for (let i = 0; i < arrOfArr.length; i++) {
		maxWorkerResult = arrOfArr[i];
		maxOfTheMax.push(func(...maxWorkerResult));
	};

	// const max = maxOfTheMax.reduce((a, b) => Math.max(a, b), 0);
	return maxOfTheMax.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), 0);
};