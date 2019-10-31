function CountingSort(A, B, k, n){
  let C = [0]*(k);

  for (let j = 0; j < n; j++){
      C[A[j]] += 1;
    }

  for (let i = 1; i < k; i++){
      C[i] = C[i] + C[i-1];
    }

  j = n-1;

  while (j >= 0) {
      B[C[A[j]]-1] = A[j];
      C[A[j]] -= 1;
      j -= 1;
    }
  return B;
}

let arr = [14, 4, 5, 1, 32, 2, 12, 3, 13, 17];
let k = Math.max(arr);
let B = [0]*arr;
let len = arr.length;

console.log(CountingSort(arr, B, k, len));
