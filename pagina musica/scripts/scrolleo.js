function scrollToMiddle() {
    const scrollableElement = document.getElementById('scrollable');
    const scrollHeight = scrollableElement.scrollHeight;
    const scrollPosition = scrollHeight * 0.63; // 50% of the scrollable height
    scrollableElement.scrollLeft = scrollPosition;
}

window.onload = scrollToMiddle;
window.onresize = onResize;