// Initialize Reveal.js
Reveal.initialize({
    controls: true,
    progress: true,
    center: false,
    hash: true,
    slideNumber: true,
    transition: 'slide',
    backgroundTransition: 'fade',
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: []
});

// Prevent zooming with ctrl + wheel
window.addEventListener("wheel", (e) => {
    const isPinching = e.ctrlKey;
    if (isPinching) e.preventDefault();
}, { passive: false });

// Prevent zooming with touch gestures
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
