$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint: 1025,
              settings: {
                arrows:false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                arrows:false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });

  $('.header-burger, .menu__item').click(function(event) {
    let windowSize = $(window).width();
    if(windowSize <= 1024){ 
      $('.header-burger, .menu').toggleClass('active');
      $('body').toggleClass('lock');
    }
  });

  $('nav ul li a').click(function(e){
		e.preventDefault();

		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('body, html').animate({
			scrollTop: offset,
		}, 500);
	});

	$('.to-top').click(function(e){
    e.preventDefault();  
	$('body, html').animate({
			scrollTop: 0,
		}, 500);
  });
  

  let totop = document.querySelector('.to-top');
  function magic() {
    if (window.pageYOffset > 400) {
      totop.style.opacity = '1'
    } else { totop.style.opacity = '0' }
  }
  totop.onclick = function () {
	  window.scrollTo(0,0)
  };
  window.onscroll = magic;

	$('.button-call, .fa__header-phone').on('click', function(){
    $('.popup-container').fadeIn(1000).css( 'display', 'flex' );
		$("body").addClass("fixed");
  });

  $('.popup-close, .popup__thanks-close').on('click', function(){
    $('.popup-container, .popup__thanks-container').fadeOut(1000);
		$("body").removeClass("fixed");
  });

  $('.popup__button').on('click', function(){
    $('.popup__thanks-container').fadeIn(600).css( 'display', 'flex' );
    $('.popup-container').fadeOut(400);
  });

  $('.popup-container, .popup__thanks-container').on('click', function(event){
		if(event.target == this) {
      $(this).fadeOut();
			$("body").removeClass("fixed");
		}
  });

  $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" });

			$('form').each(function () {
				$(this).validate({
					// errorPlacement(error, element) {
					// 	return true;
					// },
					focusInvalid: false,
					rules: {
						Телефон: {
							required: true,
						},
						Имя: {
							required: true,
						}
					},
					messages: {
						Телефон: {
							required: 'Нужно что-то ввести'
						},
						Имя: {
							required: 'Нужно что-то ввести',
						}
					},
					submitHandler(form) {
					let th = $(form);

					$.ajax({
					type: 'GET',
					url: 'mail.php',
					data: th.serialize(),
				}).done(() => {

					th.trigger('reset');
				});

				return false;
				}
			});
		});
});