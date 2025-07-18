// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);

    // Enhanced smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            console.log('Navigation clicked:', targetId, targetSection);
            
            if (targetSection) {
                const headerHeight = navbar.offsetHeight || 70;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log('Scrolling to:', targetPosition);
            } else {
                console.error('Target section not found:', targetId);
            }
        }, { passive: false });
    });
    
    // Backup navigation method
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = 70;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements and observe them
    const animateElements = document.querySelectorAll('.about-content, .project-card, .skills-category, .contact-content');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Contact form removed - direct contact via email/social links

    // Typing effect for hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Enhanced parallax effects for hero section
    const heroImage = document.querySelector('.hero-image-placeholder');
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -1.2; // Much stronger overall movement
        const rotateSpeed = scrolled * 0.15; // More rotation too
        
        // Move hero content with strong parallax effect
        if (heroContent) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
        
        // Individual element movements for dramatic effect
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrolled * -0.8}px) scale(${1 - scrolled * 0.0005})`;
        }
        
        if (heroSubtitle) {
            heroSubtitle.style.transform = `translateY(${scrolled * -1.0}px) scale(${1 - scrolled * 0.0003})`;
        }
        
        if (heroDescription) {
            heroDescription.style.transform = `translateY(${scrolled * -0.9}px) scale(${1 - scrolled * 0.0004})`;
        }
        
        if (heroButtons) {
            heroButtons.style.transform = `translateY(${scrolled * -1.1}px) scale(${1 - scrolled * 0.0002})`;
        }
        
        // Much more dramatic image rotation and movement
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * -0.6}px) rotateX(${rotateSpeed}deg) rotateY(${rotateSpeed}deg) scale(${1 - scrolled * 0.0003})`;
        }
    });

    // Mouse move parallax effect for hero section
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const heroContent = document.querySelector('.hero-content');
        const heroImageDiv = document.querySelector('.hero-image');
        
        if (heroContent) {
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
        
        if (heroImageDiv) {
            const moveX = (mouseX - 0.5) * -30;
            const moveY = (mouseY - 0.5) * -30;
            heroImageDiv.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Enhanced 3D Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
        });
        
        // 3D tilt effect based on mouse position
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
    });

    // Skill items animation delay and 3D effects
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
        observer.observe(item);
        
        // 3D tilt effect for skill items
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            this.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // Stats counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat h3');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current) + '+';
            }, 20);
        });
    }

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // Scroll to top functionality (optional)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #4facfe 0%, #f093fb 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Enhanced 3D hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotateX(5deg)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
        });
        
        // 3D tilt effect for buttons
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            this.style.transform = `translateY(-3px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });



    // Initialize active link on page load
    highlightActiveLink();

    // Add a floating particles effect to the hero section
    function createFloatingParticles() {
        const hero = document.querySelector('.hero');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: linear-gradient(45deg, rgba(79, 172, 254, 0.3), rgba(240, 147, 251, 0.3));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticles ${Math.random() * 10 + 10}s linear infinite;
                pointer-events: none;
                z-index: 1;
            `;
            hero.appendChild(particle);
        }
    }

    // Add floating particles animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticles {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    createFloatingParticles();

    // Dark emoji cursor system with fallback
    let emojiCursor;
    let currentEmoji = '⚫'; // Default dark circle
    
    function createEmojiCursor() {
        try {
            emojiCursor = document.createElement('div');
            emojiCursor.id = 'emoji-cursor';
            emojiCursor.innerHTML = currentEmoji;
            document.body.appendChild(emojiCursor);
            
            // Test if cursor is working
            setTimeout(() => {
                if (!emojiCursor || !emojiCursor.offsetParent) {
                    enableFallbackCursor();
                }
            }, 100);
            
        } catch (error) {
            console.log('Emoji cursor failed, using fallback');
            enableFallbackCursor();
        }
    }
    
    function enableFallbackCursor() {
        document.body.classList.add('cursor-fallback');
        if (emojiCursor) {
            emojiCursor.remove();
        }
        createCustomCursor();
    }
    
    function createCustomCursor() {
        // Remove any existing custom cursor
        const existingCursor = document.getElementById('custom-cursor');
        if (existingCursor) {
            existingCursor.remove();
        }
        
        const customCursor = document.createElement('div');
        customCursor.id = 'custom-cursor';
        
        // Create cursor components
        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        
        const cursorRing = document.createElement('div');
        cursorRing.className = 'cursor-ring';
        
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        
        // Assemble cursor
        customCursor.appendChild(cursorGlow);
        customCursor.appendChild(cursorRing);
        customCursor.appendChild(cursorDot);
        
        document.body.appendChild(customCursor);
        
        // Initial positioning
        customCursor.style.left = '50px';
        customCursor.style.top = '50px';
        customCursor.style.opacity = '1';
        customCursor.style.visibility = 'visible';
        customCursor.style.display = 'block';
        
        // Mouse tracking for custom cursor with better event handling
        let mouseX = 0, mouseY = 0;
        let animationId;
        
        function updateCursorPosition() {
            if (customCursor && document.body.contains(customCursor)) {
                customCursor.style.left = (mouseX - 20) + 'px';
                customCursor.style.top = (mouseY - 20) + 'px';
            }
        }
        
        // Use multiple event listeners for better tracking
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            updateCursorPosition();
        }, { passive: true });
        
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            updateCursorPosition();
        }, { passive: true });
        
        // Track cursor visibility across sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && customCursor) {
                    customCursor.style.opacity = '1';
                    customCursor.style.visibility = 'visible';
                }
            });
        });
        
        // Observe all main sections
        const sections = document.querySelectorAll('section, .hero, .about, .projects, .skills, .contact');
        sections.forEach(section => observer.observe(section));
        
                 // Enhanced hover effects for interactive elements
         function setupInteractiveElements() {
             const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, .social-link, .nav-link, .stat, input, textarea, .hero-image, .about-image');
             
             console.log('Setting up interactive elements:', interactiveElements.length);
             
             interactiveElements.forEach(element => {
                 // Ensure elements are clickable
                 element.style.pointerEvents = 'auto';
                 element.style.zIndex = 'auto';
                 
                 element.addEventListener('mouseenter', () => {
                     if (customCursor) customCursor.classList.add('hover');
                 }, { passive: true });
                 
                 element.addEventListener('mouseleave', () => {
                     if (customCursor) customCursor.classList.remove('hover');
                 }, { passive: true });
                 
                 element.addEventListener('mousedown', () => {
                     if (customCursor) customCursor.classList.add('click');
                 }, { passive: true });
                 
                 element.addEventListener('mouseup', () => {
                     if (customCursor) customCursor.classList.remove('click');
                 }, { passive: true });
             });
         }
        
        setupInteractiveElements();
        
        // Re-setup interactive elements periodically (in case new elements are added)
        setInterval(setupInteractiveElements, 2000);
        
        // Global click effects
        document.addEventListener('mousedown', () => {
            if (customCursor) customCursor.classList.add('click');
        }, { passive: true });
        
        document.addEventListener('mouseup', () => {
            if (customCursor) customCursor.classList.remove('click');
        }, { passive: true });
        
        // Force cursor visibility on scroll
        window.addEventListener('scroll', () => {
            if (customCursor) {
                customCursor.style.opacity = '1';
                customCursor.style.visibility = 'visible';
            }
        }, { passive: true });
        
        console.log('🎨 Enhanced custom animated cursor created and tracking all sections!');
    }
    
    // Skip emoji cursor and go directly to custom cursor
    enableFallbackCursor();

    // Follow mouse movement with smooth animation
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (emojiCursor && !document.body.classList.contains('cursor-fallback')) {
            emojiCursor.style.left = (mouseX - 14) + 'px';
            emojiCursor.style.top = (mouseY - 14) + 'px';
        }
    });

    // Update emoji with dark, visible alternatives
    function updateCursor(emoji, size = '28px') {
        if (emojiCursor && !document.body.classList.contains('cursor-fallback')) {
            emojiCursor.innerHTML = emoji;
            emojiCursor.style.fontSize = size;
            currentEmoji = emoji;
        }
    }

    // Change emoji on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, .social-link, .nav-link, .stat, input, textarea');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            updateCursor('🎯', '32px'); // Target for interactive elements
        });
        
        element.addEventListener('mouseleave', () => {
            updateCursor('⚫', '28px'); // Back to default
        });
    });

    // Dark emojis for different sections
    document.querySelector('.hero')?.addEventListener('mouseenter', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('🌟', '30px'); // Star in hero section
        }
    });

    document.querySelector('.hero')?.addEventListener('mouseleave', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('⚫', '28px'); // Back to default
        }
    });

    document.querySelector('.projects')?.addEventListener('mouseenter', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('🚀', '30px'); // Rocket in projects section
        }
    });

    document.querySelector('.projects')?.addEventListener('mouseleave', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('⚫', '28px'); // Back to default
        }
    });

    document.querySelector('.skills')?.addEventListener('mouseenter', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('🔥', '30px'); // Fire in skills section
        }
    });

    document.querySelector('.skills')?.addEventListener('mouseleave', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('⚫', '28px'); // Back to default
        }
    });

    document.querySelector('.about')?.addEventListener('mouseenter', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('💎', '30px'); // Diamond in about section
        }
    });

    document.querySelector('.about')?.addEventListener('mouseleave', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('⚫', '28px'); // Back to default
        }
    });

    document.querySelector('.contact')?.addEventListener('mouseenter', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('📧', '30px'); // Email in contact section
        }
    });

    document.querySelector('.contact')?.addEventListener('mouseleave', () => {
        if (!currentEmoji.includes('🎯')) {
            updateCursor('⚫', '28px'); // Back to default
        }
    });

    console.log('🚀 3D Portfolio website loaded successfully with amazing effects! ✨');
});

// Utility function to throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events for better performance
window.addEventListener('scroll', throttle(function() {
    // Any additional scroll-based functionality can go here
}, 16)); // ~60fps 