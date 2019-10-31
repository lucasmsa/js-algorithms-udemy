function sumRange (n) {
  if(n === 1) { return  1 }
  return n + sumRange(n-1)
}


function Factorial(n){
  if (n === 0) return 1
  return n*(Factorial(n-1))
}


function collectOddValues(arr){
  let newArr = [];
  if(arr.length === 0) return newArr;
  if(arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}


function recursiveRange(n){
    if (n === 0 ) return 0
    return recursiveRange(n-1) + n;
}


function productOfArray(arr){
    if(arr.length === 0) return 1;
    return arr[0]*productOfArray(arr.slice(1));
}


function fib(n){
    if(n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);
}

function isPalindrome(str){
   if(str.length === 1) { return true }
   if (str[0] !== str.slice(-1)) { return false }
   if(str[0] === str.slice(-1)){ return isPalindrome(str.slice(1, -1)) }
}

function flatten(ant_arr){
    var arr = [];
    for (let i = 0; i < ant_arr.length; i++){
        if(Array.isArray(ant_arr[i])){ arr = arr.concat(flatten(ant_arr[i])) }
        else { arr.push(ant_arr[i]) }
        }
    return arr;
}

console.log(sumRange(5))
console.log(Factorial(6))
console.log(productOfArray([1,2,3,10]))
