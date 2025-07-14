//messageエリア複数を一気にスライド
$(function () {
  $('.slick-slide-message').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    cssEase: 'ease',
    draggable: false, swipe: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 1500,
        },
      },
    ],
  });
});


//rainbowエリア一個ずつスライド
$(function () {
  $('.auto-slider-rainbow').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1200,
    cssEase: 'ease',
    draggable: false, swipe: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 400,
        },
      },
    ],
  });
});

//voice-area 自動で一個ずつスライド(手動も可能、一定時間操作がないと自動に戻る)
$(function () {
  const $slider = $(".voice-slide");
  let autoPlayTimer = null;

  $slider.slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: 'ease',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: '<button type="button" class="slick-arrow slick-custom-prev"><img src="img/arrow_prev.svg" alt="前へ"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-custom-next"><img src="img/arrow_next.svg" alt="次へ"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // 手動操作時に再生を5秒止める
  $slider.on('beforeChange', function () {
    $slider.slick('slickPause'); // 一旦停止
    clearTimeout(autoPlayTimer); // 既存のタイマーをクリア
    autoPlayTimer = setTimeout(function () {
      $slider.slick('slickPlay'); // 3秒後に再開
    }, 3000); // ←ここで秒数調整（5000ミリ秒＝5秒）
  });
});


//キャンパスについてのドロップダウンリストの設定
$(function () {
  $('.dropdown-wrapper').hover(
    function () {
      $(this).addClass('active');
    },
    function () {
      $(this).removeClass('active');
    }
  );

  $('.dropdown-list').on('click', function () {
    $('.dropdown-wrapper').removeClass('active');
  });
});

//ハンバーガーメニュー
$(function () {
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  $(".nav-responsive a").on("click", function () {
    $("header").toggleClass("open");
  });
});

//Q&Aアコーディオン
$(function () {
  $('.accordion-one .ac-header').click(function () {
    $(this).next('.ac-inner').slideToggle();
    $(this).toggleClass("ac-open");
  });
});

$(function () {
  let pagetop = $(".to-top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 9000) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1500);
    return false;
  });
});



