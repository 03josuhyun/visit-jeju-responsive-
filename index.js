document.addEventListener('DOMContentLoaded', function () {
  const weatherBtn = document.querySelector('.header_outer .header .weather_box');
  const weatherClose = document.querySelector('.header_outer .weather_box_down .weather_close');
  const weatherBox = document.querySelector('.header_outer .weather_box_down');

  weatherBox.style.display = 'none';
  weatherBtn.onclick = function () {
    weatherBox.style.display = 'block';
  }
  weatherClose.onclick = function () {
    weatherBox.style.display = 'none';
  }
  //weather

  const langTypeBtn = document.querySelector('.header_outer .header .lang_type_box');
  const langTypeBox = document.querySelector('.header_outer .lang_type');
  let state = false;

  langTypeBtn.addEventListener('click', () => {
    if (state) {
      langTypeBox.style.display = 'none';
      state = false;
    } else {
      langTypeBox.style.display = 'block';
      state = true;
    }
  });//lang_type

  const langSizeBtn = document.querySelector('.header_outer .header .lang_size_btn');
  const langSizeBox = document.querySelector('.header_outer .lang_size_down');
  let state01 = false;

  langSizeBtn.addEventListener('click', () => {
    if (state01) {
      langSizeBox.style.display = 'none';
      state01 = false;
    } else {
      langSizeBox.style.display = 'block';
      state01 = true;
    }
  });//lang_size

  const searchBtn = document.querySelector('.header_outer .header .search_btn');
  const searchBox = document.querySelector('.header_outer .search_sheet');
  let state02 = false;

  searchBtn.addEventListener('click', () => {
    if (state02) {
      searchBox.style.display = 'none';
      state02 = false;
    } else {
      searchBox.style.display = 'block';
      state02 = true;
    }
  });//search

  const gnbBtn = document.querySelector('.header_outer .header .gnb_btn');
  const gnbMenu = document.querySelector('.header_outer .gnb_outer .gnb_menu');
  let state03 = false;

  gnbBtn.addEventListener('click', () => {
    if (state03) {
      gnbMenu.style.right = '-100%';
      state03 = false;
    } else {
      gnbMenu.style.right = '0';
      state03 = true;
    }
  });//gnb

  const gnbBox = $('.header_outer .gnb_wrap .gnb_out_box');
  const gnbDown = $('.header_outer .gnb_wrap .gnb_out_box .gnb_full_down');
  gnbBox.on('mouseenter', function () {
    gnbDown.stop(true, true).css('display', 'block').animate({ height: 300 }, 300);
  });
  gnbDown.on('mouseleave', function () {
    gnbDown.stop(true, true).animate({ height: 0 }, 300, function () {
      $(this).css('display', 'none');
    });
  });//gnb_down

  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const tab01 = $('.content01 .content01_tab li');
  const sheet01 = $('.content01 .content01_sheet>div');
  let index = 0;

  tab01.click(function () {
    tab01.removeClass('on_tab');
    $(this).addClass('on_tab');

    index = $(this).index();

    sheet01.removeClass('on_sheet');
    sheet01.eq(index).addClass('on_sheet');
  });//content01

  const tab02 = $('.content02 .artist_tab li');
  const sheet02 = $('.content02 .content02_sheet>div');
  let index02 = 0;

  tab02.click(function () {
    tab02.removeClass('on_tab02');
    $(this).addClass('on_tab02');

    index02 = $(this).index();

    sheet02.removeClass('on_sheet02');
    sheet02.eq(index02).addClass('on_sheet02');
  });//content02

  $(".festival .name").on("click", function () {
    $(".festival").removeClass("active");
    $(this).parent().addClass("active");
  });//content03

  const tab04 = $('.content04 .way_tab li');
  const sheet04 = $('.content04 .way_sheet>div');
  let index04 = 0;

  tab04.click(function () {
    tab04.removeClass('on_tab04');
    $(this).addClass('on_tab04');

    index04 = $(this).index();

    sheet04.removeClass('on_sheet04');
    sheet04.eq(index04).addClass('on_sheet04');
  });//content04

});//DOMContentLoaded

$(function () {
  $('.gnb01').on('click', function () {
    $('.lnb01').toggle('slow');
  });
  $('.gnb02').on('click', function () {
    $('.lnb02').toggle('slow');
  });
  $('.gnb03').on('click', function () {
    $('.lnb03').toggle('slow');
  });
  $('.gnb04').on('click', function () {
    $('.lnb04').toggle('slow');
  });
  $('.gnb05').on('click', function () {
    $('.lnb05').toggle('slow');
  });//gnb_lnb


  let beforeMetapo = '';
  $('.metapo').on('mouseover', function () {
    if (beforeMetapo) {
      beforeMetapo.find('div').stop().animate({ top: 0 }, 300);
    }
    $(this).find('div').stop().animate({ top: -10 }, 300);
    beforeMetapo = $(this);
  });
  $('.metapo').on('mouseout', function () {
    $(this).find('div').stop().animate({ top: 0 }, 300);
  });//metapo

  let index = false;
  $('.heart').on('click', function () {
    if (index === false) {
      $(this).find('i').css({ color: 'var(--point-color)' });
      index = true;
    } else {
      $(this).find('i').css({ color: "var(--white" });
      index = false;
    }
  });
  //heart

  $('.active').on({
    mouseenter: function () {
      $(this).find('.active_text').stop(true, true).fadeIn(200);
    },
    mouseleave: function () {
      $(this).find('.active_text').stop(true, true).fadeOut(200);
    }
  });//active


});//jqurey