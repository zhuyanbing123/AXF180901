$(function () {

    $('.home').width(innerWidth)

    new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
    });


     new Swiper('#mustbuySwiper', {
        slidesPerView: 3,
        spaceBetween: 10,
         loop: true
    });
})