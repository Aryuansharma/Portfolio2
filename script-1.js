/*
 * Aryan Sharma Portfolio - JavaScript
 * 
 * FEATURES:
 * 1. Smooth scrolling navigation
 * 2. Parallax scrolling effects (Covr theme inspired)
 * 3. Mobile menu toggle
 * 4. Active navigation highlighting
 * 5. Navbar scroll behavior
 * 6. Scroll animations (AOS-like)
 * 7. Contact form handling
 * 8. Image lazy loading
 * 
 * HOW TO CUSTOMIZE:
 * - Adjust parallax speed in parallaxScroll()
 * - Modify scroll offset in handleActiveNav()
 * - Change animation thresholds in initScrollAnimations()
 * - Update form submission endpoint in handleFormSubmit()
 */

// ==========================================
// 1. INITIALIZATION
// Run all functions when DOM is loaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initParallax();
    initScrollAnimations();
    initContactForm();
    initImageFallbacks();
});

// ==========================================
// 2. NAVIGATION FUNCTIONALITY
// Handles mobile menu, smooth scrolling, and active states
// ==========================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get target section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Smooth scroll to section
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle scroll events for navbar and active navigation
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class for navbar styling
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active navigation link
        handleActiveNav();
        
        lastScroll = currentScroll;
    });
}

// ==========================================
// 3. ACTIVE NAVIGATION HIGHLIGHTING
// Highlights current section in navigation
// ==========================================
function handleActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 100; // Offset for better UX
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ==========================================
// 4. PARALLAX SCROLLING EFFECTS
// Creates Covr-inspired parallax background movement
// 
// HOW IT WORKS:
// - Different sections scroll at different speeds
// - data-speed attribute controls movement intensity
// - Lower speed = slower movement (more parallax effect)
// 
// TO CUSTOMIZE:
// - Adjust data-speed values in HTML (0.1 to 1.0)
// - 0.5 = half speed (recommended)
// - 0.3 = slower, more dramatic effect
// ==========================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    function parallaxScroll() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const section = element.closest('.section');
            
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const windowHeight = window.innerHeight;
                
                // Only apply parallax when section is in viewport
                if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                    const yPos = -(scrolled - sectionTop) * speed;
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
        });
    }
    
    // Use requestAnimationFrame for smooth performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial call
    parallaxScroll();
}

// ==========================================
// 5. SCROLL ANIMATIONS
// AOS-like animation on scroll
// 
// TO CUSTOMIZE:
// - Change threshold value (0 to 1)
// - Adjust rootMargin for earlier/later triggers
// - Add new animation types in CSS
// ==========================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ==========================================
// 6. CONTACT FORM HANDLING
// Handles form submission and validation
// 
// TO CUSTOMIZE:
// - Update formData structure for your backend
// - Change success/error messages
// - Add more validation rules
// - Integrate with EmailJS, Formspree, or your API
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        
        // Basic validation
        if (!validateForm(formData)) {
            showMessage('Please fill in all fields correctly.', 'error');
            return;
        }
        
        // Disable submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            // CUSTOMIZE THIS SECTION FOR YOUR BACKEND
            // Example: Send to your API endpoint
            /*
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) throw new Error('Network response was not ok');
            */
            
            // Simulated success (remove this and uncomment above for real submission)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('Oops! Something went wrong. Please try again or email me directly.', 'error');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
    
    // Form validation helper
    function validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return (
            data.name.trim().length >= 2 &&
            emailRegex.test(data.email) &&
            data.subject.trim().length >= 3 &&
            data.message.trim().length >= 10
        );
    }
    
    // Show message helper
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ==========================================
// 7. IMAGE FALLBACK HANDLING
// Provides placeholder images if project images are missing
// 
// TO CUSTOMIZE:
// - Replace placeholder URLs with your own
// - Add different placeholders for different project types
// - Implement lazy loading if needed
// ==========================================
function initImageFallbacks() {
    const projectImages = document.querySelectorAll('.project-image img');
    
    // Placeholder images for each project
    const placeholders = {
        'weather-app.jpg': 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
        'news-app.jpg': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
        'backend.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        'ecommerce-testing.jpg': 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
        'chatbot-testing.jpg': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
        'logistics-testing.jpg': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
    };
    
    projectImages.forEach(img => {
        // Check if image exists, if not, use placeholder
        const src = img.getAttribute('src');
        const filename = src.split('/').pop();
        
        img.addEventListener('error', () => {
            if (placeholders[filename]) {
                img.src = placeholders[filename];
            } else {
                // Default placeholder
                img.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop';
            }
        });
        
        // Set placeholder immediately if local file
        if (!src.startsWith('http')) {
            img.src = placeholders[filename] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop';
        }
    });
}

// ==========================================
// 8. UTILITY FUNCTIONS
// Additional helper functions
// ==========================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for external use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToTop,
        getScrollPercentage,
        debounce
    };
}