// Learn More button functionality
document.getElementById('learn-more').addEventListener('click', function() {
    document.getElementById('overview').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add animation for specs cards when they come into view
const specCards = document.querySelectorAll('.spec-card');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Setup initial state and observe spec cards
window.addEventListener('DOMContentLoaded', () => {
    // Initialize spec cards for animation
    specCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        // Add delay for staggered animation
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Buy buttons functionality
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const model = this.closest('.pricing-card').querySelector('h3').textContent;
            alert(`Thank you for your interest in the Dell XPS 13 9345 ${model}! This would take you to the Dell checkout page.`);
        });
    });

    // Initialize feature items animation
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
    });

    // Create an observer for feature items
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                featureObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature items
    featureItems.forEach(item => {
        featureObserver.observe(item);
    });
});

// Image switcher for overview image
const overviewImg = document.getElementById('overview-img');
if (overviewImg) {
    // Array of image sources to cycle through
    const imageSources = [
        'images/front.webp',
        'images/side_left.webp',
        'images/side_right.webp',
        'images/back.webp'
    ];
    
    let currentImageIndex = 0;
    
    // Change image every 3 seconds
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        overviewImg.style.opacity = 0;
        
        setTimeout(() => {
            overviewImg.src = imageSources[currentImageIndex];
            overviewImg.style.opacity = 1;
        }, 500);
    }, 3000);
    
    // Set initial transition
    overviewImg.style.transition = 'opacity 0.5s ease';
}

// Add animation to hero section
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    window.addEventListener('load', () => {
        heroContent.style.opacity = 0;
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = 1;
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    });
}

// Gallery image hover effect enhancement
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = 10;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = 1;
    });
});

// Mobile menu toggle functionality (for responsive design)
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.cursor = 'pointer';
    mobileMenuBtn.style.color = '#0076CE';
    
    nav.insertBefore(mobileMenuBtn, nav.firstChild);
    
    const navList = document.querySelector('nav ul');
    
    // Handle window resize
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navList.style.display = 'none';
            nav.style.flexDirection = 'row';
            nav.style.justifyContent = 'space-between';
        } else {
            mobileMenuBtn.style.display = 'none';
            navList.style.display = 'flex';
            nav.style.flexDirection = 'row';
        }
    };
    
    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        if (navList.style.display === 'none' || navList.style.display === '') {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.width = '100%';
            navList.style.position = 'absolute';
            navList.style.top = '60px';
            navList.style.left = '0';
            navList.style.backgroundColor = '#fff';
            navList.style.padding = '1.5rem';
            navList.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            navList.style.borderRadius = '0 0 16px 16px';
            navList.style.gap = '1.2rem';
            
            // Animate menu items
            const menuItems = navList.querySelectorAll('li');
            menuItems.forEach((item, index) => {
                item.style.opacity = 0;
                item.style.transform = 'translateY(10px)';
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                item.style.transitionDelay = `${index * 0.05}s`;
                
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }, 10);
            });
            
            // Change menu button to X
            mobileMenuBtn.innerHTML = '✕';
        } else {
            navList.style.display = 'none';
            mobileMenuBtn.innerHTML = '☰';
        }
    });
    
    // Initialize on page load
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navList.style.display = 'none';
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    });
};

// Initialize mobile menu
window.addEventListener('DOMContentLoaded', createMobileMenu);