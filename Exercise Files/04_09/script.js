/* alternatively can define object like this
var course = new Object();

course.title = "JS Essential Training";
couse.instructor = "Morten"
course.level = 1;
*/

var course = 
{
  title: "JS Essential",
  instructor: "Morten",
  level: 1,

  updateViews: function()
  {
    return ++course.views;
  }
}

console.log(course);
course.updateViews();
console.log(course);
