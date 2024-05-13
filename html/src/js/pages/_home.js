/**
 * Home
 */
export default function() {
  $('.date').mask('00/00/0000');
  $('.phone').mask('(00) 0 0000-0000');

  Fancybox.bind('[data-fancybox]');

  var countChar = function(val, $quat, target) {
    var len = val.length;
    $('#' + target).text($quat - len);
  };

  $(document).on('keyup', '#msn-field', function() {
    var $val = $(this).val();
    var $quat = 300;
    var $taget = 'count-field';
    countChar($val, $quat, $taget);

    return false;
  });

  $(document).on('click', '.anchor', function() {
    var $target = $(this).attr('href');
    var $offset = $($target).position().top;
    $('body,html').animate({ scrollTop: $offset }, 1000);
    return false;
  });

  $(document).on('click', '#open-menu', function() {
    //$('.seach-box').removeClass('act');
    $('body').toggleClass('menu-open');
    $(this).toggleClass('opened').attr('aria-expanded', 'true');

    return false;
  });

  $(document).on('click', 'header .grid .menu .search,header .grid .menu .box-search .close', function() {
    var $target = $(this).closest('.menu').find('.box-search');
    $target.toggleClass('act');
    return false;
  });

  $(document).on('click', '.sidebar .box-filter .more-options', function() {
    var $target = $(this).closest('.box-filter').find('.box li.extra-field').get();
    var time = 5;
    if ($(this).hasClass('act')) {
      $target.reverse();
    }
    $(this).toggleClass('act');
    $.each($target, function() {
      var $this = $(this);
      setTimeout(function() {
        $this.toggleClass('hide');
      }, time);
      time += 100;
    });
    return false;
  });

  $(document).on('click', '.card-ticket .content .infos .get-ticket,.modal-ticket .overlay', function() {
    var $target = $('.modal-ticket');
    $target.toggleClass('act');
    return false;
  });

  $(document).on('change', '.box-input input[type="file"]', function() {
    var name = $(this).prop('files');
    if (name.length >= 2) {
      $(this).closest('.box-input').find('.file').html(name.length + ' arquivos');
    } else {
      $(this).closest('.box-input').find('.file').html(name[0].name);
    }
    return false;
  });

  /* $.getJSON('https://api.ipify.org/?format=json', function(e) {
    $.getJSON('//www.geoplugin.net/json.gp?ip=' + e.ip, function(e) {
      $('header .grid .location .box-location span').html(e.geoplugin_city);
    });
  }); */

}