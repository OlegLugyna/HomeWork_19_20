$(function () {
   var $leftStep = $( '.carusel-arrow__left' );
   var $rightStep = $( '.carusel-arrow__right' );
   var $elements = $('.carusel__list');

   var $stepSize = 1050;
   var $currentElement = 0;
   var $elementsLength = $elements.find('li').length;
   var $minimumElements = -(($elementsLength - 1) * $stepSize);
   var $maximumElements = 0;

   $leftStep.on('click', function() {
      if ($currentElement != $maximumElements) {
        $currentElement = $currentElement + $stepSize;
        $elements.animate({
                  left: $currentElement + 'px'
        }, 1000);
      }
   });

   $rightStep.on('click', function() {
      if ($currentElement != $minimumElements) {
        $currentElement = $currentElement - $stepSize;
        $elements.animate ({
                  left: $currentElement + 'px'
        }, 1000);
      }
   });
});
