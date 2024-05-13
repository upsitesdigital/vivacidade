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
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false
      }
    }]
  });

  const $slideCat = $('.slide-cat');
  $slideCat.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    }]
  });


  const $blogslider = $('.slide-blog .slide');
  $blogslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.slide-blog .btn.btn-prev'),
    nextArrow: $('.slide-blog .btn.btn-next'),
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
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }]
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
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }]
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
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }]
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
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }]
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
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    }]
  });

  const $featuredBlogCat = $('.featured-blog-categories .slide');
  $featuredBlogCat.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.featured-blog-categories .btn.btn-prev'),
    nextArrow: $('.featured-blog-categories .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $photogallery = $('.slide-photo-gallery .slide');
  $photogallery.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.slide-photo-gallery .btn.btn-prev'),
    nextArrow: $('.slide-photo-gallery .btn.btn-next'),
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
}