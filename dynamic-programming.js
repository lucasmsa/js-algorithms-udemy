function fibonacci(n)  {
  if(n == 1 || n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibDP(n, table=[]) {
  if(table[n] != null) return table[n];
  if(n == 1 || n == 2) return 1;
  var value = fibDP(n - 1, table) + fibDP(n - 2, table);
  table[n] = value;
  return value;
}

function fibDP_Tabulation(n){
  if(n <= 2) return 1;
  var fibo = [1, 1];
  for(let i = 2; i < n; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return {Value: fibo[n-1]};
}

function Factorial(n, table=[]) {
  if(n == 0) return 1;
  return n*Factorial(n - 1);
}


function FactorialDP(n, table=[]) {
  if(table[n] != null) return table[n];
  if(n == 0) return 1;
  var ret = n*FactorialDP(n - 1, table);
  table[n] = ret;
  return ret;
}


console.log(fibDP_Tabulation(1476));
