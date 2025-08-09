// Mavyack Events Website JavaScript

// Global variables
let currentSection = 'home';
let currentGalleryCategory = 'All';
let currentImageIndex = 0;
let filteredImages = [];

// Gallery data - ADD NEW GALLERY IMAGES HERE
// To add new images: copy the structure below and customize
// Make sure to add corresponding filter buttons in HTML
const galleryImages = [
    {
        id: 1,
        title: 'Corporate Conference',
        category: 'Corporate',
        url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=500&h=500&fit=crop'
    },
    {
        id: 2,
        title: 'Wedding Celebration',
        category: 'Wedding',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=500&fit=crop'
    },
    {
        id: 3,
        title: 'Birthday Party',
        category: 'Birthday',
        url: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=500&h=500&fit=crop'
    },
    {
        id: 4,
        title: 'Music Festival',
        category: 'Festival',
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop'
    },
    {
        id: 5,
        title: 'Gala Dinner',
        category: 'Gala',
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=500&fit=crop'
    },
    {
        id: 6,
        title: 'Anniversary Party',
        category: 'Anniversary',
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&h=500&fit=crop'
    },
    {
        id: 7,
        title: 'Product Launch',
        category: 'Corporate',
        url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop'
    },
    {
        id: 8,
        title: 'Beach Wedding',
        category: 'Wedding',
        url: 'https://images.unsplash.com/photo-1519225421984-791161655ac1?w=500&h=500&fit=crop'
    },
    {
        id: 9,
        title: 'Sweet 16 Party',
        category: 'Birthday',
        url: 'https://images.unsplash.com/photo-1533174072545-fdf3183fd472?w=500&h=500&fit=crop'
    },
    {
        id: 10,
        title: 'Food Festival',
        category: 'Festival',
        url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop'
    },
    {
        id: 11,
        title: 'Charity Gala',
        category: 'Gala',
        url: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?w=500&h=500&fit=crop'
    },
    {
        id: 12,
        title: 'Company Anniversary',
        category: 'Anniversary',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop'
    }
    // ADD NEW GALLERY IMAGES ABOVE THIS LINE
];

// Testimonials data - ADD NEW TESTIMONIALS HERE
// To add new testimonials: copy the structure below and customize
// Rating should be a number from 1 to 5
const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Bride',
        content: 'The team made our wedding day absolutely perfect! Every detail was handled with care and professionalism. I couldn\'t have asked for a better experience.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'CEO, TechCorp',
        content: 'Outstanding service for our corporate conference. The attention to detail and seamless coordination made our event a huge success.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Birthday Party Host',
        content: 'They transformed my birthday celebration into an unforgettable experience. The decor, entertainment, and coordination were flawless!',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
    // ADD NEW TESTIMONIALS ABOVE THIS LINE
];

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    
    // Add intersection observer for performance
    setupIntersectionObserver();
    
    // Add smooth scrolling behavior
    addSmoothScrolling();
    
    // Add navbar scroll effect
    setupNavbarScroll();
});

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setupIntersectionObserver() {
    // Lazy load images and animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all service cards, testimonial cards, and gallery items
    document.querySelectorAll('.service-card, .testimonial-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

function addSmoothScrolling() {
    // Add smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
}

function initializeWebsite() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Render gallery
    filterGallery('All');
    
    // Render testimonials
    renderTestimonials();
    
    // Set up smooth scrolling
    setupSmoothScrolling();
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update active nav link
                updateActiveNav(this.getAttribute('href').substring(1));
            }
        });
    });
}

// Update active navigation
function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Mobile menu functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('active');
}

// Gallery functions - MANAGE GALLERY FILTERING AND DISPLAY
function filterGallery(category) {
    currentGalleryCategory = category;
    
    // Update active filter button
    document.querySelectorAll('.gallery-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter images based on category
    filteredImages = category === 'All' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === category);
    
    // Render the filtered gallery
    renderGallery();
}

function renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    // Generate HTML for each gallery item
    galleryGrid.innerHTML = filteredImages.map((image, index) => `
        <div class="gallery-item cursor-glow" onclick="openLightbox(${index})">
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3 class="gallery-title">${image.title}</h3>
                <p class="gallery-category">${image.category}</p>
            </div>
        </div>
    `).join('');
}

// Testimonials functions - MANAGE TESTIMONIAL DISPLAY AND STAR RATINGS
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (!testimonialsGrid) return;
    
    // Generate HTML for each testimonial
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-rating" id="testimonial-rating-${testimonial.id}">
            <div class="stars">
                <span class="star" data-value="1">★</span>
                <span class="star" data-value="2">★</span>
                <span class="star" data-value="3">★</span>
                <span class="star" data-value="4">★</span>
                <span class="star" data-value="5">★</span>
            </div>
            <div class="rating-info">
                Rating: <span class="rating-value">${testimonial.rating}</span>/5
            </div>
        </div>
        <div class="testimonial-content">
            "${testimonial.content}"
        </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize Lucide icons for the new content
    lucide.createIcons();
    
    // Initialize star rating components for testimonials
    initializeTestimonialStarRatings();
}

// Initialize star rating components for testimonials
function initializeTestimonialStarRatings() {
    testimonials.forEach(testimonial => {
        const ratingId = `testimonial-rating-${testimonial.id}`;
        const ratingComponent = new StarRating(ratingId);
        // Set the initial rating
        ratingComponent.setRating(testimonial.rating);
        // Make it read-only (disable click interactions)
        ratingComponent.setReadOnly(true);
    });
}

/**
 * StarRating Component
 * A reusable star rating system based on the provided example
 */
class StarRating {
    /**
     * @param {string} containerId - ID of the container element
     */
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.stars = this.container.querySelectorAll('.star');
        this.ratingValue = this.container.querySelector('.rating-value');
        this.currentRating = 0;
        this.readOnly = false;
        
        this.init();
    }
    
    /**
     * Initialize the star rating component
     */
    init() {
        // Add click event to each star
        this.stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                if (!this.readOnly) {
                    this.setRating(index + 1);
                }
            });
            
            // Add hover effect
            star.addEventListener('mouseenter', () => {
                if (!this.readOnly) {
                    this.highlightStars(index + 1);
                }
            });
        });
        
        // Reset highlight when mouse leaves container
        this.container.addEventListener('mouseleave', () => {
            if (!this.readOnly) {
                this.resetHighlight();
            }
        });
    }
    
    /**
     * Set the rating
     * @param {number} rating - Rating value (1-5)
     */
    setRating(rating) {
        this.currentRating = rating;
        if (this.ratingValue) {
            this.ratingValue.textContent = rating;
        }
        this.updateStars();
        
        // Dispatch custom event
        this.container.dispatchEvent(new CustomEvent('ratingChanged', {
            detail: { rating: rating }
        }));
    }
    
    /**
     * Highlight stars up to the given rating
     * @param {number} rating - Rating to highlight
     */
    highlightStars(rating) {
        this.stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    /**
     * Reset highlight to current rating
     */
    resetHighlight() {
        this.updateStars();
    }
    
    /**
     * Update stars based on current rating
     */
    updateStars() {
        this.stars.forEach((star, index) => {
            if (index < this.currentRating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    /**
     * Get current rating
     * @returns {number} Current rating
     */
    getRating() {
        return this.currentRating;
    }
    
    /**
     * Reset rating to 0
     */
    reset() {
        this.setRating(0);
    }
    
    /**
     * Set rating to read-only mode
     * @param {boolean} isReadOnly - Whether to make rating read-only
     */
    setReadOnly(isReadOnly) {
        this.readOnly = isReadOnly;
        // Update cursor style
        this.stars.forEach(star => {
            star.style.cursor = isReadOnly ? 'default' : 'pointer';
        });
    }
}

// Lightbox functions
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    
    if (filteredImages[index]) {
        // Preload image
        const img = new Image();
        img.onload = function() {
            lightboxImage.src = this.src;
            lightboxImage.alt = filteredImages[index].title;
            lightboxTitle.textContent = filteredImages[index].title;
            lightboxCategory.textContent = filteredImages[index].category;
            
            // Show lightbox with fade effect
            lightbox.style.display = 'flex';
            setTimeout(() => {
                lightbox.classList.add('active');
            }, 10);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        };
        img.src = filteredImages[index].url;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Wait for transition to complete before hiding
    setTimeout(() => {
        lightbox.style.display = 'none';
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }, 300);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    
    if (filteredImages[currentImageIndex]) {
        // Add loading state
        lightboxImage.style.opacity = '0.5';
        
        // Preload new image
        const img = new Image();
        img.onload = function() {
            lightboxImage.src = this.src;
            lightboxImage.alt = filteredImages[currentImageIndex].title;
            lightboxTitle.textContent = filteredImages[currentImageIndex].title;
            lightboxCategory.textContent = filteredImages[currentImageIndex].category;
            
            // Fade in new image
            lightboxImage.style.opacity = '1';
        };
        img.src = filteredImages[currentImageIndex].url;
    }
}

// Form submission - HANDLE CONTACT FORM PROCESSING
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Create mailto link - UPDATE EMAIL ADDRESS HERE
    const subject = encodeURIComponent('New Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:hello@mavyackevents.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    event.target.reset();
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We will get back to you soon.');
}

// WhatsApp function for Quick Inquiry
function openWhatsApp() {
    const phoneNumber = '15551234567'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi Mavyack Events! I have a quick inquiry about your event planning services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        switch(event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    }
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

// Mobile menu close when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = event.target.closest('button[onclick="toggleMobileMenu()"]');
    
    if (!mobileMenuButton && !mobileMenu.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});

// Export functions for global access
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.filterGallery = filterGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextImage = nextImage;
window.prevImage = prevImage;
window.handleFormSubmit = handleFormSubmit;
window.openWhatsApp = openWhatsApp;