document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    function rotateCarousel() {
        carouselImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Rotate images every 5 seconds
    setInterval(rotateCarousel, 5000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based header styling
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Add hover effects to event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // Format event dates
    const eventDates = document.querySelectorAll('.event-date');
    eventDates.forEach(dateElement => {
        const date = new Date(dateElement.textContent);
        dateElement.textContent = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });

    // Add mobile menu toggle
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');

        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        // Insert button before nav links
        nav.insertBefore(mobileMenuBtn, navLinks);

        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });
    };

    // Initialize mobile menu
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }

    // Example function to fetch and display events
    // This is a placeholder - you'll need to implement the actual event fetching logic
    function fetchEvents() {
        // TODO: Implement event fetching from your preferred source
        const eventsGrid = document.querySelector('.events-grid');
        if (eventsGrid) {
            // Example event card
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <h3>Upcoming Event</h3>
                <p>Stay tuned for our next meetup!</p>
                <a href="#" class="cta-button">Learn More</a>
            `;
            eventsGrid.appendChild(eventCard);
        }
    }

    // Call the fetchEvents function
    fetchEvents();
}); 