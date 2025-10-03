document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');

    // Получаем реальные стили через getComputedStyle
    const computedStyle = getComputedStyle(header);
    const initialHeaderStyle = {
        backgroundColor: computedStyle.backgroundColor,
        boxShadow: computedStyle.boxShadow,
        top: computedStyle.top
    };

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = initialHeaderStyle.backgroundColor;
            header.style.boxShadow = initialHeaderStyle.boxShadow;
        }
    });
});
