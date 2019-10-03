function validAnagram(str1, str2){
    if(str1.length != str2.length){ return console.log("Arrays do not have equal size") }
    size = str1.length;
    counter_1 = {};
    counter_2 = {};
    for (let a of str1){ counter_1[a] = (counter_1[a] || 0) + 1 }
    for (let b of str2){ counter_2[b] = (counter_2[b] || 0) + 1 }

    for (let c in counter_1){
      if(!c in counter_2){ return false }

      if(counter_1[c] !== counter_2[c]){ return false }

    }
    return true;
} // Frequency counter

function sameFrequency(number1, number2){
    let num1 = String(number1);
    let num2 = String(number2);
    if (num1.length !== num2.length){
        return false;
    }
    let counter_1 = {};
    let counter_2 = {};
    for (let i of num1){
        counter_1[i] = (counter_1[i] || 0) + 1;
    }
    for (let j of num2){
        counter_2[j] = (counter_2[j] || 0) + 1;
    }
    for (let k in counter_1){
        console.log(k);
        if(!k in counter_2){
            return false;
        }
        if(counter_1[k] !== counter_2[k]){
            return false;
        }
    }
    return true;
} // Frequency counter


function sumzero(arr){
  let left = 0;
  let right = arr.length-1;
  let sum = 0;
  while(right > left){
    sum = arr[left] + arr[right];
    if (sum === 0){
      return [arr[left], arr[right]];
    }
    else if (sum < 0){
      left += 1;
    }
    else if (sum > 0){
      right -= 1;
    }
  }
} // Multiple pointers

function count_unique(arr){
  let left = 0;
  let right = 1;
  if (arr.length == 0){
      return left;
  }
  while (right < arr.length){
    if(arr[left] == arr[right]){
      right += 1;
    }
    else if (arr[left] !== arr[right]){
      left += 1;
      arr[left] = arr[right];
      right += 1;
    }
  }
  return (left+1);
} // Multiple pointers


function maxSubarraySum(arr, num){
    if(arr.length < num){ return null }
    let max_sum = 0, temp_sum = 0;
    for(let k = 0; k < num; k++){ max_sum += arr[k] }
    temp_sum = max_sum;
    for(let i = num; i < arr.length; i++){
        temp_sum += arr[i] - arr[i-num];
        if(temp_sum > max_sum){ max_sum = temp_sum }
    }
  return max_sum;
} // Sliding window


function areThereDuplicates() {
    let counter = {};
    for (let i in arguments){ counter[arguments[i]] = (counter[arguments[i]] || 0) + 1 }
    for (let a in counter){ if(counter[a] > 1) return true}
    return false;
} // Frequency counter

function averagePair(numbers, average){

  if(numbers.length === 0){return false}
  let left = 0;
  let right = numbers.length - 1;
  let mean;
  while (left !== right){
      mean = ( numbers[left] + numbers[right] )/2;
      if(mean === average){ return true }
      else if(mean > average){ right -= 1 }
      else if(mean < average){ left += 1  }
  }
  return false;
} // Multiple pointers

function isSubsequence(str1, str2) {
  let count = str1.length, b = 0;
  for (let a = 0; a < str2.length; a++){
      if(str2[a] === str1[b] && b < count){
          b += 1;
      }
  }
  if(b === count){ return true }
  else{ return false }
}


function minSubArrayLen(arr, num) {
    if(arr.length === 0){ return 0 }
    let i = 0, j = 0, sum = 0, len = 9999;
    while(i < arr.length){
      if(sum < num && j < arr.length){
        sum += arr[j];
        j += 1;
      }
      else if(sum >= num){
        len = Math.min(len, j-i);
        sum = sum - arr[i];
        i += 1;
      }
      else{
        break;
      }
    }
    if (len === 9999) {return 0}
    else {
      return len;
    }
} // Sliding window


let a = [-1, 0, 2, 3];
count_unique(a);
sameFrequency(8454, 4458);
console.log(validAnagram("cacilda", "cildoca"));
console.log(count_unique(a));
console.log(maxSubArray(a, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
