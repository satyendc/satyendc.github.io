document.addEventListener('DOMContentLoaded', () => {
    // Clock Functionality
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        const dateString = now.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });

        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = `${timeString}, ${dateString.toUpperCase()}`;
        }
    }

    setInterval(updateTime, 1000);
    updateTime();

    // Interaction for Filter Pills
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active class from all
            filterPills.forEach(p => p.classList.remove('active'));
            // Add to clicked
            pill.classList.add('active');
        });
    });

    // Navigation Tab Switching
    const navPills = document.querySelectorAll('.nav-pill');
    const sections = document.querySelectorAll('.content-section');
    const headerTitle = document.querySelector('.content-header h2');

    navPills.forEach(nav => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Update Active Nav State
            navPills.forEach(n => n.classList.remove('active'));
            nav.classList.add('active');

            // 2. Get Target Section
            const targetId = nav.getAttribute('href').substring(1); // remove '#'

            // 3. Update Content View
            sections.forEach(section => {
                section.style.display = 'none';
                if (section.id === targetId) {
                    section.style.display = 'block';
                    // Optional: Add fade-in animation class here
                }
            });

            // 4. Update Header Title
            // If target is portfolio (default), set title to Portfolio, else capitalize ID
            if (targetId === 'portfolio') {
                /* Default logic */
            }
            const navText = nav.querySelector('span').textContent;
            headerTitle.textContent = navText;
        });
    });
});
