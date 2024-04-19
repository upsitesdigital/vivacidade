/**
 * Home
 */
export default function() {
  $(document).on('click', '.anchor', function() {
    var $target = $(this).attr('href');
    var $offset = $($target).position().top;
    $('body,html').animate({ scrollTop: $offset }, 1000);
    return false;
  });

  $(document).on('click', 'header .grid .menu .search,header .grid .menu .box-search .close', function() {
    var $target = $(this).closest('.menu').find('.box-search');
    $target.toggleClass('act');
    return false;
  });

  $(document).on('click', '.list-events .grid .sidebar .box-filter .more-options', function() {
    console.log('click');
    var $target = $(this).closest('.box-filter').find('.box li.extra-field').get();
    var time = 5;
    console.log($(this).hasClass('act'));
    if ($(this).hasClass('act')) {
      $target.reverse();
    }
    $(this).toggleClass('act');
    $.each($target, function(index) {
      var $this = $(this);
      setTimeout(function() {
        console.log('hide');
        $this.toggleClass('hide');
      }, time);
      time += 100;
    });
    return false;
  });

  $.getJSON("https://api.ipify.org/?format=json", function(e) {
    $.getJSON("//www.geoplugin.net/json.gp?ip=" + e.ip, function(e) {
      //console.log(e);
      console.log(e.geoplugin_city);
      console.log(e.geoplugin_region);
      console.log(e.geoplugin_regionCode);
      console.log(e.geoplugin_regionName);
      $('header .grid .location .box-location span').html(e.geoplugin_city);
    });
  });

}