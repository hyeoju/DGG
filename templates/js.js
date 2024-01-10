document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    let counter = 0;

    setInterval(() => {
        carousel.style.transform = `translateX(-${counter * 300}px)`; // 300px는 이미지 너비입니다.
        counter++;

        if (counter === 3) {  // 이미지가 3개라고 가정합니다.
            counter = 0;
        }
    }, 2000);  // 2초마다 이미지 전환
});
