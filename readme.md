# Regiment

A JQuery plugin to equalise the heights of elements.

It can be difficult to get the bottoms of elements to line up nicely on a web page. Fixing the height, or using overflow:hidden have major drawbacks. Regiment.js addresses this. All elements will stretch vertically and adopt the height of the tallest element.

## Sample Usage

Import jQuery and regiment.js, then do something like:

    $(function () {
      $(".widget").regiment();
    });

## Dealing with images

If your element contains images, the height of those images may not be available when you first load the page. In this case, either specify the height of your image in CSS, or execute the script on window load, like this:

    $(window).load(function () {
      $(".homepage .widget").regiment();
    });