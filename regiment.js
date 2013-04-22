// Regiment.js
// Released under the MIT licence.

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
  }
})(jQuery);