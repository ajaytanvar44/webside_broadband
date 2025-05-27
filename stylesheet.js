// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded and ready!');

    // Example: Add a class to grid items on hover (just for demonstration)
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // You could also use JS to dynamically load content,
    // implement a sticky header, or add more complex interactions.
});