Simply loading the script at the end is not best for performance.

Include <script> src="$PATH" defer </script> in the head for
ideal performace. This defers execution of js until all HTML
is rendered, and renders js in parallel with html 


1. js is case sensitive
2. use camel case
ie getElementByTagName()

var start with lowercase
objects and classes start with upper
constants all caps

3. whitespace matters (to humans)
4. end each statement with a semicolon
5. use comments liberally (//, /* */)
