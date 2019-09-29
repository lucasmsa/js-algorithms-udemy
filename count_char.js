function str_count(str){
    //return how many lowercase alphanumeric terms exists within your string
    console.log(str);
    let a = {};
    console.log(str.length)
    str.toLowerCase();
    for(let char of str){
        if(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123){
            a[char] = ++a[char] || 1;
        }
    }
    console.log(a);
    return a;
}

//  Formulate an approach towards solving the problem
//  before heading to it
//  Knowing the logic of the problem in question is really important

// Inputs of the problem
// Outputs of the problem


// Understand the problem; Explore Concrete examples; Break it down; Solve/Simplify
// Look back and refactor, change stuff in your code to make it better

// Solve the problem. If you can't, solve a simpler problem 

//str_count('aaabbbccdd')//{a:3, b:3, c:2, d:2}
var b = str_count("blablablablubu")
 