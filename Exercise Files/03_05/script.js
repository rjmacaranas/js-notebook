var a = 5;
var b = 5;
var theNumbersMatch;

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);


// 5 == '5' is true, but 5 === '5' is false (strict equality)
// ternary operators work just like c
// and and or are just like c, xor is not built-in to js