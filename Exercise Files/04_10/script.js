/* Object constructor */

function Course(title, instructor,
                level, published, views)
{
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;

  this.updateViews = function()
  {
    return ++this.views;
  }
}


var course01 = new Course("JS Essential Training", "Morten Rand-Hendriksen",
                          1, true, 0);

var course02 = new Course("ECMAScript6", "Eve Porcello", 1,
                          true, 123456);
console.log(course01);
console.log(course02);


/*
  course.title == course["title"]

  course.WP:image is an error, but course["WP:image"] works because
  : is not parsed

  can use any of these at any time.
*/
