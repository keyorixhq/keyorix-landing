// Main JavaScript for Keyorix Landing Page - Dark Theme

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initSmoothScroll();
    initFormHandling();
    initAnimations();
    initAccessibility();
    initLanguageToggle();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });

        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            });
        });
    }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}/
    / Form Handling with Dark Theme
function initFormHandling() {
    const forms = document.querySelectorAll('.contact-form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                } else {
                    field.style.borderColor = '';
                }
            });

            // Email validation
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    isValid = false;
                    emailField.style.borderColor = '#ef4444';
                }
            }

            if (!isValid) {
                e.preventDefault();
                showNotification('Please fill in all required fields correctly.', 'error');
                return;
            }

            // Disable submit button
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                const originalText = submitBtn.textContent;
                submitBtn.textContent = submitBtn.textContent.includes('Enviar') ? 'Enviando...' : 'Sending...';

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            }
        });

        // Enhanced real-time validation feedback
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Focus and blur effects
            input.addEventListener('focus', function () {
                this.parentElement.classList.add('focused');
                const icon = this.parentElement.querySelector('.form-input-icon');
                if (icon) {
                    icon.style.color = 'var(--accent-blue)';
                }
            });

            input.addEventListener('blur', function () {
                this.parentElement.classList.remove('focused');
                const icon = this.parentElement.querySelector('.form-input-icon');

                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                    if (icon) icon.style.color = '#ef4444';
                } else if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value)) {
                        this.style.borderColor = 'var(--accent-green)';
                        this.classList.add('valid');
                        this.classList.remove('invalid');
                        if (icon) icon.style.color = 'var(--accent-green)';
                    } else {
                        this.style.borderColor = '#ef4444';
                        this.classList.add('invalid');
                        this.classList.remove('valid');
                        if (icon) icon.style.color = '#ef4444';
                    }
                } else if (this.value.trim()) {
                    this.style.borderColor = 'var(--accent-green)';
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                    if (icon) icon.style.color = 'var(--accent-green)';
                } else {
                    this.style.borderColor = '';
                    this.classList.remove('valid', 'invalid');
                    if (icon) icon.style.color = 'var(--text-muted)';
                }
            });

            // Input animation effects
            input.addEventListener('input', function () {
                if (this.value.trim()) {
                    this.parentElement.classList.add('has-content');
                } else {
                    this.parentElement.classList.remove('has-content');
                }
            });
        });
    });
}

// Dark Theme Animations
function initAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .lifecycle-step, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Header background on scroll - Dark Theme
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.style.background = 'rgba(13, 13, 13, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(13, 13, 13, 0.8)';
            header.style.backdropFilter = 'blur(20px)';
        }

        lastScrollY = currentScrollY;
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Language Toggle Enhancement
function initLanguageToggle() {
    const langLinks = document.querySelectorAll('.lang-link');

    langLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.classList.contains('active')) {
                e.preventDefault();
                return;
            }

            // Add loading state
            this.style.opacity = '0.7';
            this.textContent = '...';

            // Simulate loading (remove in production)
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    });
}

// Accessibility Enhancements
function initAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation for mobile menu
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Focus management
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && this.classList.contains('active')) {
                this.classList.remove('active');
                navToggle.focus();
            }
        });
    }

    // Screen reader announcements
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    document.body.appendChild(announcer);
    window.announcer = announcer;
}

// Dark Theme Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#2D9CDB'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);

    // Announce to screen readers
    if (window.announcer) {
        window.announcer.textContent = message;
    }
}

// Handle form success messages
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
    const isSpanish = window.location.pathname.includes('.es.html');
    const message = isSpanish
        ? 'Gracias — hemos recibido tu mensaje. Te contactaremos pronto.'
        : 'Thanks — we received your message. We\'ll get back to you soon.';

    setTimeout(() => {
        showNotification(message, 'success');
    }, 1000);
}

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Export functions for global use
window.Keyorix = {
    showNotification
};

// Add some interactive effects for the dark theme
document.addEventListener('DOMContentLoaded', function () {
    // Add glow effect to buttons on hover
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 8px 32px rgba(45, 156, 219, 0.4)';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.boxShadow = '0 4px 16px rgba(45, 156, 219, 0.3)';
        });
    });

    // Add subtle animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});