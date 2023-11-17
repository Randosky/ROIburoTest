const officeSwiper = new Swiper(".office__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.office__btns-next',
        prevEl: '.office__btns-prev',
    },
    renderProgressbar: (progressbarFillClass) => {
        return '<span class="' + progressbarFillClass + '"></span>';
    }
});

const teamSwiper = new Swiper(".team__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.team__btns-next',
        prevEl: '.team__btns-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            grid: {
                rows: 2,
            },
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});