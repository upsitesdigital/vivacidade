/**
 * Slider
 */
export default function() {
  const $fullslider = $('.slide-full .slide');
  $fullslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.slide-full .btn.btn-prev'),
    nextArrow: $('.slide-full .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $featuredEvents = $('.featured-events .slide');
  $featuredEvents.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.featured-events .btn.btn-prev'),
    nextArrow: $('.featured-events .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $catEventsOne = $('#cat-one .slide');
  $catEventsOne.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('#cat-one .btn.btn-prev'),
    nextArrow: $('#cat-one .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
  const $catEventsTwo = $('#cat-two .slide');
  $catEventsTwo.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('#cat-two .btn.btn-prev'),
    nextArrow: $('#cat-two .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
  const $catEventsTree = $('#cat-tree .slide');
  $catEventsTree.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('#cat-tree .btn.btn-prev'),
    nextArrow: $('#cat-tree .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $featuredBlog = $('.featured-blog .slide');
  $featuredBlog.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.featured-blog .btn.btn-prev'),
    nextArrow: $('.featured-blog .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
}