
const { performance } = require('perf_hooks');

function calc_till_n(n){
    let total = 0;
    for(let i = 0; i <= n; i++){
        total += i;
    }
    return total;
}

function add_till(n){
    return n*(n+1)/2;
}

var time_1 = performance.now();
calc_till_n(1000000000000);
var time_2 = performance.now();
console.log('Time taken: ' + (time_2 - time_1)/1000 + ' seconds');

time_1, time_2 = 0;

time_1 = performance.now();
add_till(1000000000000);
time_2 = performance.now();
console.log('Time taken: ' + (time_2 - time_1) / 1000 + ' seconds');