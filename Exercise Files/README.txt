General Rule of Thumb
If we want the js to run before the contents of the page
are rendered, add it to the head. Otherwise, add it to the body.

If we put it in the head, have no idea where the body is, so
there is an error! Browser renders top to down. The script is in
the wrong position.

Js renders as soon as the browsers gets a hold of it. The order
in which you provide content and js is the order that the browsers
will read it. So if you try to access the body before it is being
rendered, an error will occur.
