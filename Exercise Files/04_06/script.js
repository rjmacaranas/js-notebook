var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(7/9, 13/25)  /* immediately invoked function expression */

console.log(theBiggest);  /* logs the actual function ! */


/* benefit of immediately invoked expression often hooked
   event listeners */
