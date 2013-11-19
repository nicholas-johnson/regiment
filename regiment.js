/*
  Plugin to equalise the heights of a set of elements.

  Version 1.0.0
  www.github.com/forwardadvance/regiment

  Released under the MIT licence.
  */
(function($) {
  $.fn.regiment = function() {
    var maxHeight = 0;
    this.each(function(i, el) {
      var mHeight = $(el).height();
      if (mHeight > maxHeight) {
        maxHeight = mHeight;
      }
    });
    this.each(function(i, el) {
      $(el).css('height', maxHeight+"px");
    });
    return this;
  }
})(jQuery);

$('div.widget').regiment();