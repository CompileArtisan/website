export const gotoHeading = () => {
    document.querySelectorAll('a[href^="#org"]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default browser action
            console.log('Link clicked:', link.href);

            const targetId = link.getAttribute('href').substring(1); // Remove "#" from href
            const targetElement = document.getElementById(targetId);
            const leftPanel = document.querySelector('.left-panel');

            if (targetElement && leftPanel) {
                // Calculate position relative to the left panel
                const targetPosition = targetElement.offsetTop - leftPanel.offsetTop;
                leftPanel.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth', // Smooth scrolling
                });
            } else {
                console.warn('Target not found or no left-panel:', targetId);
            }
        });
    });
}
