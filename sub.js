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

  let index = false;
  $('.heart').on('click', function () {
    if (index === false) {
      $(this).find('i').css({ color: 'var(--point-color)' });
      index = true;
    } else {
      $(this).find('i').css({ color: "var(--mid-gray)" });
      index = false;
    }
  });
  //heart

  let book = false;
  $('.booking').on('click', function () {
    if (book === false) {
      $(this).find('p').css({ color: 'var(--point-color)' });
      $(this).css({backgroundColor: "var(--white)"});
      book = true;
    } else {
      $(this).find('p').css({ color: "var(--white)"});
      $(this).css({backgroundColor: "var(--point-color)"});
      book = false;
    }
  });
  //booking

  $('.fest_bot').hide();
  $('.fest_btn label').on('click',function(){
    $('.fest_bot').stop(true,true).slideToggle(300);

    if($(this).text() === '더보기'){
      $(this).text('접기');
    }else {
      $(this).text('더보기');
    }
  });


});//jqurey