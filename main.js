
const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    grabCursor: true,
    breakpoints: {
        390: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        760: { slidesPerView: 3 },
        990: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1399: { slidesPerView: 7 },
    },
    on: {
        reachEnd: () => {
            document.querySelector(".next").classList.add("disabled");
        },
        reachBeginning: () => {
            document.querySelector(".prev").classList.add("disabled");
        },
        fromEdge: () => {
            document.querySelector(".next").classList.remove("disabled");
            document.querySelector(".prev").classList.remove("disabled");
        },
    },
});

const swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
    },
    grabCursor: true,
    breakpoints: {
        390: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        760: { slidesPerView: 3 },
        990: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1399: { slidesPerView: 7 },
    },
    on: {
        reachEnd: () => {
            document.querySelector(".next-2").classList.add("disabled");
        },
        reachBeginning: () => {
            document.querySelector(".prev-2").classList.add("disabled");
        },
        fromEdge: () => {
            document.querySelector(".next-2").classList.remove("disabled");
            document.querySelector(".prev-2").classList.remove("disabled");
        },
    },
});

const swiper3 = new Swiper(".mySwiper-3", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".next-3",
        prevEl: ".prev-3",
    },
    grabCursor: true,
    breakpoints: {
        390: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        760: { slidesPerView: 3 },
        990: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1399: { slidesPerView: 7 },
    },
    on: {
        reachEnd: () => {
            document.querySelector(".next-3").classList.add("disabled");
        },
        reachBeginning: () => {
            document.querySelector(".prev-3").classList.add("disabled");
        },
        fromEdge: () => {
            document.querySelector(".next-3").classList.remove("disabled");
            document.querySelector(".prev-3").classList.remove("disabled");
        },
    },
});