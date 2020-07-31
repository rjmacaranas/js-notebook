/*
	Closures

	inside function, multiply relies on previously defined variables
	keeps two variables alive to use.

	has some interesting practical applications
*/

function giveMeEms(pixels)
{
	var baseValue = 16;		/* base font size for most browsers */

	function doMath()
	{
		return pixels/baseValue;
	}

	return doMath;
}


var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);

console.log("Small size: ", smallSize() );
console.log("mediumSize size: ", mediumSize() );
console.log("largeSize size: ", largeSize() );
console.log("xLargeSize size: ", xLargeSize() );









function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	function multiply()
	{
		var result = a * b;
		return result;
	}

	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);
