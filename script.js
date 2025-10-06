// Mavryck Events Website JavaScript

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
        title: 'Decoration',
        category: 'Birthday',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMRMc556EZJrqHvBhp0kIa4cqgFQ_8Qwzk-EgGZArfw_Biaph7wy7ZkPn_Fgfyn2N55h6Y9hYwN7D329WnqVHT7RyIA84BBV_rOkbA1T4ewetILPEKLZ7XTniPpk8rosGK_V_1LTwQGia1UGVUSRAyG=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 2,
        title: 'Games',
        category: 'Birthday',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczNyWlz-riZ76l-JLsZ8m1u9LcnYSW68enxOp9WqwoCSQjPdnqHmIqnLzbweMdfXhgsnnxYpm4xAWo1dmoNXttXe122--jq__gTvqew-UNrVKfI8ZpEPKe6HuQ_gR8dmWZaS8XK8H9KaatdScswYaSgx=w481-h641-s-no-gm?authuser=0'
    },
{
        id: 3,
        title: 'Coporate Holi Celebration',
        category: 'Festival',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMVc6VNkfBN8fmiELiwsUJmBpglSawafzn1Yzh6__pUQyQEb62dKkZVhXSHA6eSmxosH4phbsgJKUX-DZyNqBZLeCEzCiCpxYAazZhE3mX9Ui3BbtqvbRR2WLgkzHBs9E6DqZH2hbBDhtWaDvBc-wHj=w598-h641-s-no-gm?authuser=0'
    },
{
        id: 4,
        title: 'New Year Celebration',
        category: 'Corporate',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczOZ7GrH_lDuw6OGCvbd7Y07Ud8MdFw9-8ML4jwxW5MeiLAqn49zKFrOiJ-T2sgOh0Kyw1FNC9ohAYZKs5_uqb0FRSl7g8op2SNklG_ghjoyIGOh5k8z45rSn-q1slvH_EItOFXIj_VRGsAbrX3oYsHP=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 5,
        title: 'Party Games',
        category: 'Birthday',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczNOVydBZ25BCYg2J7iekPgfOKf6wQdbfQLZMdQ-f2OOAuq--l8fXdDAt9IwX1WR3BwQXtilEnKoAZY0JlpGj09ZTEDzJcaxrCHyDvsGTug_017E33cqpqyKrlBcJaHfvnhIPpedBzaez47x7VPu8-Km=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 6,
        title: 'test',
        category: 'Festival',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMh_cwKLykcURyJ3sbtpA6XUE132b9Z31e054ChttZNIgAeek-xXple4oKLGnbRoEkLyyo8ClIdUh2UgvQRIQsK8Q2vO0PLiG3cov2Q9Zb6D1GxgVxYOlSdaTrLIU8MlxacVVi8OmsGHOhSXB6maUCn=w1140-h641-s-no-gm?authuser=0'
    },
{
        id: 7,
        title: 'Normal Get to gather',
        category: 'Corporate',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczNAUJJN9pUZAwOQz3HLtAApgMRRpyDQ7UOFqjiv_HXb0opN05iVUiwhWm1_TWMKjWOhxAM_e1cRFfJyKzNjWLNiyZIhMt3mUU1B_hWoTRFzpFjCYy6mV6i1uPAsO1NMvH7OVyU66HewxdNmGT3PRO4Y=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 8,
        title: 'Tattoo',
        category: 'Birthday',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczOQo8eWBJ4um1CIDl_bVKH1Gx1mbGWfyaCQHLW_QFCXgkcIvodhPHqyj7PwDOH4uuMn2sqVqr5WL1gEeX4OJz6HDSsXEyjVo-DgNGkzBukQsRTXcbd3PN5_RD2Ru4j45m5C8bRfrS05ijA95KZs4grX=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 9,
        title: 'Corporate Appraisal Event',
        category: 'Corporate',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczNtuXM1A8LuGPcGQh8EM3-ydW7VDa9DQV-qcgo9nO-mh7yUBu6jylDLqnaCfPWwKoVdQz-rY7ztG0NoOfBjUflPg-UX0rbB7AYrE13QEZGbzXCZvzJS60RI8IDMe7IAmpmQzgQRB6QoigfrBrlY8SSx=w1138-h641-s-no-gm?authuser=0'
    },
{
        id: 10,
        title: 'Shop Opening',
        category: 'Corporate',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczNGKop7wWCNGQ3wqYupiAtI6v8aWen5_---r3RG6EpYPw8FMTiMkn9u3y7Ez9OMsdW4AYO776tZAnmU4V3VpOdygXa6eRSURGZVrsrOZmV0CyKG0jks3pFTDgOuopzWBdeGeB32xnsW6MX2WEijEeUz=w855-h641-s-no-gm?authuser=0'
    },
{
        id: 11,
        title: 'Birthday Event',
        category: 'Corporate',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczNIKcyqrg-amSS-S1mJErrhAbZsP5AL3O45JUqkqCr77MAndZpgu7W93J098GNzntXfJT_5F97S9XwH8t00gUdr2KldlzNNo1uN2KVPkAJ2tf3TGsKfS8rIZXXYOi1bbaNeYU4tkfPZ795kEjgT3TBr=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 12,
        title: 'Holi Celebration',
        category: 'Festival',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMD2PEKXdyqX8GRFDVwe1UncFhjK1KzBbqRFkfvyEdhB3FsaYEGInz6f3w77XWI8UPeI05aWrO-YANnOVZrJp5ukFzV5Gnp9VkrZnIpLJNDv8b0oT0zmAH7nyzQ8pV5jwLIS9r4aOpSQtDGcT6njmu4=w861-h641-s-no-gm?authuser=0'
    },
{
        id: 13,
        title: 'Birthday Decoration',
        category: 'Birthday',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMKhkKd2WczWR_MyvTPLyVgY4HeZKjYVwD73AZUQ_Ai78d4szlB4g9rrHZCwLDpiDauRLWDoV4Dh0ZR1qinT6eDDh6zu7NP8pGmdl-YkU3WUtj25BFz5DFr3Z_BWoVis8mPGelLwaIorR-0avWRc0Pq=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 14,
        title: 'Cartoon Characters',
        category: 'Birthday',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMMrBSxF3DSMSYgQWk6c00gTywg8vwWNYbUqtRg2TvZjmiHcuCVaf-Acej4lEsX78m59VD2JAJ8Ca0Msr4vVUmhw-aglxSQvMDQTtqc_XiiqYLEemHO8IXfc8Bl85dhYsCneF5UPOPPlTMW5owSqMDD=w855-h641-s-no-gm?authuser=0'
    },
{
        id: 15,
        title: 'Childern Party',
        category: 'Birthday',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczP9LResGjyLDK5bLYDbRDlwadsnXH5j3IFXk9IDHC9p3d5aDp8tiwiOmNspQjgBqa3rEEhXWY1sjfCLMshyze9pW3efmuiBksoVaZ4jEA3IXVt7q674ictndrM5ZyRBD0hjf8lajwzJeAjufekPe4bD=w481-h641-s-no-gm?authuser=0'
    },
{
        id: 16,
        title: 'Festive Celebration',
        category: 'Festival',
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMRpb5JJoj0A_-phjhcOgtz8ksRPcTjxwTT6LQtd8PKGIO11NsvQMlK1PZF1m4_cJocpx6tPHex4M4IVY0F6j7YpBl8jnIKYXYwvz51eyAcBKXtGX-f-SYguVJV47W67xsk5cwq-L7DFPB_preIfjzY=w361-h641-s-no-gm?authuser=0'
    },
{
        id: 16,
        title: 'Mehndi',
        category: 'Wedding',
        url: 'https://kailash-gupta.github.io/Event-Gallery/images/IMG_20230711_175309.jpg'
    }
    // ADD NEW GALLERY IMAGES ABOVE THIS LINE
];

// Testimonials data - ADD NEW TESTIMONIALS HERE
// To add new testimonials: copy the structure below and customize
// Rating should be a number from 1 to 5
const testimonials = [
    {
    id: 1,
    name: 'Sahil Khan',
    role: 'Event Coordinator',
    content: 'Elevating professional connections and celebrating achievements at our dynamic corporate gathering.',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/pw/AP1GczOabZNedAjJmsyv2hsfBU11bl0VjpWIzVaKJ7FigeCVpI68Dkcfhv0wgp_ztneOs00GfgXOmmcPDu7hGNZ4ykSLUBtEYfNCJ6xrxhAZDf7Pq6t407qj45ZO1qUopZ-p7UKd1jqq9wLmum05hWXl8HXI=w1138-h641-s-no-gm?authuser=0'
},
{
    id: 2,
    name: 'Sujal Bhul',
    role: 'Manager',
    content: mavryk events transformed our office with vibrant, cheerful decorations! As Office Manager, Sujal Bhul, I highly recommend their professional and creative team for any event or office uplift.,
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/pw/AP1GczMh_cwKLykcURyJ3sbtpA6XUE132b9Z31e054ChttZNIgAeek-xXple4oKLGnbRoEkLyyo8ClIdUh2UgvQRIQsK8Q2vO0PLiG3cov2Q9Zb6D1GxgVxYOlSdaTrLIU8MlxacVVi8OmsGHOhSXB6maUCn=w1140-h641-s-no-gm?authuser=0'
},
{
    id: 3,
    name: 'Sangeeta Pawar',
    role: 'Mother',
    content: 'As a mother, I can say these decorations truly made my child’s birthday magical! The stunning princess castle backdrop and cheerful balloons created a perfectly enchanting atmosphere.',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/pw/AP1GczNqPDnNOf1BWUEpF7FDvHgKuaSGhHdT2I34nd-tdBfw11lI53NNKVW4ExUKTnqsKh_n6hoQsJPCBSq32TTitqpDrRp0bbEZBxpvBcX2TID3_V7UdR0ZiW9ZD9DqMlpsE3zF4dbkVDqs0-lRN_2A2fTs=w481-h641-s-no-gm?authuser=0'
},
{
    id: 4,
    name: 'Rekha Gupta',
    role: 'Mother',
    content: 'For my two-year-old’s birthday, the decorations were absolutely stunning – a true showstopper! Every guest was incredibly impressed and it made his day feel so special.',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/pw/AP1GczPMKOUtYVlJOljMhIaVL5tPAbAg-HRmrOnZvZ_iw9euVRfIrka0SUPP1H7ai03B2n4etKOBJnB-tOQXQO3p-Bh_PBUNNMvF39Qrd0oU0YwLInayOx7IFVHi8jEUQh_ja2kzh7NlaAzYsOaHdCaSLdGu=w481-h641-s-no-gm?authuser=0'
},
{
    id: 5,
    name: 'Rani',
    role: 'Guest',
    content: 'The body paint artistry at the birthday party was absolutely phenomenal – truly a highlight! The vibrant mermaid design was incredibly detailed and left every guest with its stunning, tattoo-like quality. What a fantastic addition to the celebration!',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/pw/AP1GczP_AiMl-IDsOvzDJYUmHO0RQm49-qqEHA5rQuN4Sy0svw9N1gF__H0b9K6w8zlheenZq8LbuR7zZPVh0MDJ92DJRaX69PBi5BDJ8BWqcJE1AMSvNkxz4x2DWEbV6WSRLnSXcedWlMAEet5E8xyYha5N=w361-h641-s-no-gm?authuser=0'
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
        <div class="gallery-item cursor-glow">
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
    const mailtoLink = `mailto:hello@mavryckevents.com?subject=${subject}&body=${body}`;
    
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
    const message = encodeURIComponent('Hi Mavryck Events! I have a quick inquiry about your event planning services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

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
window.handleFormSubmit = handleFormSubmit;
window.openWhatsApp = openWhatsApp;
