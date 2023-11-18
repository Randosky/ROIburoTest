const officeSwiper = new Swiper(".office__swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".office__progressbar",
        type: "progressbar"
    },
    navigation: {
        nextEl: '.office__btns-next',
        prevEl: '.office__btns-prev',
    },
    breakpoints: {
        // when window width is >= 1470px
        1470: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1050: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
});

const teamSwiper = new Swiper(".team__swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: ".team__progressbar",
        type: "progressbar"
    },
    navigation: {
        nextEl: '.team__btns-next',
        prevEl: '.team__btns-prev',
    },
    breakpoints: {
        // when window width is >= 1470px
        1800: {
            slidesPerView: 4,
            spaceBetween: 40,
            grid: {
                rows: 1,
            },
        },
        1470: {
            slidesPerView: 3,
            spaceBetween: 24,
            grid: {
                rows: 1,
            },
        },
        1050: {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerColumn: 2,
            grid: {
                rows: 2,
                fill: "row"
            },
        },
    }
});