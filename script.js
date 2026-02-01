// Smooth scroll for navbar links and hero buttons
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Add smooth scroll to all navbar links
document.querySelectorAll('.nav-right a').forEach(link => {
    const href = link.getAttribute('href');
    if(href.startsWith('#')) {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
