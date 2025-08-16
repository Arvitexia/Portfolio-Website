document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved user preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedTheme);
    } else {
        // Apply system preference if no saved theme
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        } else {
            body.classList.add('light-mode');
        }
    }

    // Toggle between light and dark modes
    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only apply system theme if no user preference is saved
        if (!localStorage.getItem('theme')) {
            body.classList.remove('light-mode', 'dark-mode');
            if (e.matches) {
                body.classList.add('dark-mode');
            } else {
                body.classList.add('light-mode');
            }
        }
    });
});
