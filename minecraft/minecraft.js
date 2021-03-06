function setCarouselHeight(id) {
    var slideHeight = [];
    $(id + ' .carousel-item').each(function () {
        // add all slide heights to an array
        slideHeight.push($(this).height());
    });

    // find the tallest item
    max = Math.max.apply(null, slideHeight);

    // set the slide's height
    $(id + ' .carousel-content').each(function () {
        $(this).css('height', max + 'px');
    });
}

setCarouselHeight('#slideshow');

window.onorientationchange = function() {
    setCarouselHeight('#slideshow');
}