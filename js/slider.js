new Swiper('.fillers-block-slider .image-slider', {
    navigation: {
        nextEl: '.fillers-block-slider .swiper-button-next',
        prevEl: '.fillers-block-slider .swiper-button-prev'
    },
    pagination: {
        el: '.fillers-block-slider .swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        615: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        970: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        },
    }
});

new Swiper('.accessories-block-slider .image-slider', {
    navigation: {
        nextEl: '.accessories-block-slider .swiper-button-next',
        prevEl: '.accessories-block-slider .swiper-button-prev'
    },
    pagination: {
        el: '.accessories-block-slider .swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        760: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        },
    }
});

new Swiper('.portfolio-block-slider .image-slider', {
    navigation: {
        nextEl: '.portfolio-block-slider .swiper-button-next',
        prevEl: '.portfolio-block-slider .swiper-button-prev'
    },
    grabCursor: true,
    loop: true,
    slidesPerGroup: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        615: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        970: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
});

new Swiper('.installation-block-slider .image-slider', {
    navigation: {
        nextEl: '.installation-block-slider .swiper-button-next',
        prevEl: '.installation-block-slider .swiper-button-prev'
    },
    grabCursor: true,
    loop: true,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
        },
        934: {
            slidesPerView: 3,
        },
        1120: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
});

new Swiper('.kinds-block-slider .image-slider', {
    navigation: {
        nextEl: '.kinds-block-slider .swiper-button-next',
        prevEl: '.kinds-block-slider .swiper-button-prev'
    },
    grabCursor: true,
    loop: true,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
        },
        934: {
            slidesPerView: 3,
        },
        1120: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
});

const cardDetailBullets = new Swiper('.card-detail-bullets .swiper-container', {
    slidesPerView: 4,
    watchSlidesProgress: true,
    freeMode: true,
    spaceBetween: 10
})

const cardDetailSlider = new Swiper('.card-detail-slider .swiper-container', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    spaceBetween:20,
    thumbs: {
        swiper: cardDetailBullets,
    }
})