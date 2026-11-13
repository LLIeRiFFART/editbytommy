var header = document.querySelector('.navbar-2');
if (header) {
    var updateHeaderHeight = function () {
        document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    };
    updateHeaderHeight();
    if ('ResizeObserver' in window) {
        new ResizeObserver(updateHeaderHeight).observe(header);
    } else {
        window.addEventListener('resize', updateHeaderHeight);
    }
}

document.querySelectorAll('[data-copyright-year]').forEach(function (element) {
    element.textContent = Math.max(2026, new Date().getFullYear());
});

// Keep portfolio-only links on the page instead of jumping to the top.
document.querySelectorAll('a[href="#"]').forEach(function (link) {
    var isCourseLink = link.classList.contains('btn') || link.classList.contains('btn_8');
    var isPricingLink = isCourseLink && !link.closest('#Pricing');
    link.setAttribute('href', isPricingLink ? '#Pricing' : '#');

    if (!isPricingLink) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
        });
    }
});
