function getDigit(num, pos){
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) %  10;
}

function Digits(num){
  return num.toString().length;
}

function mostDigits(arr){
  let mostDig = 0;
  for(let i = 0; i < arr.length; i++){
    if(Digits(arr[i]) > mostDig){ mostDig = Digits(arr[i]) }
  }
  return mostDig;
}

function radixSort(arr){
  let dig = mostDigits(arr), n;
  for(let k = 0; k < dig; k++){
    let buckets = [[], [], [], [], [], [], [], [], [], []];
    for(let j = 0; j < arr.length; j++){
      n = getDigit(arr[j], k);
      buckets[n].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([1, 34, 2, 646, 78352, 32, 43, 12, 5]));
