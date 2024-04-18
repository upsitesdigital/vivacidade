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