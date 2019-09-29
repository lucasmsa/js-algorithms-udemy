let data = {
    firstname: "Bobinho",
    ehamigodoleny: true,
    saudadesdoleny: true,
    code: [32,43,58,72]
}

function ascendingsort(a, b){
    return a - b;
}

function invert(a, b) {
    return a + b;
}

console.log(data.code[3]);
console.log(Object.keys(data));

let names = ['leny', 'bobinho', 'kenny'];

console.log(names[2]);

let numbers = [63,42,78,92,46,103,101,110,9];
console.log(numbers.sort(ascendingsort));
