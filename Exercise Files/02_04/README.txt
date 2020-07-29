Simply loading the script at the end is not best for performance.

Include <script> src="$PATH" defer </script> in the head for
ideal performace. This defers execution of js until all HTML
is rendered, and renders js in parallel with html 
