// If you want to enable "scroll to top" button, remove comment from HTML and use this:
document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.querySelector('.top');

    if (topBtn) {
        topBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
