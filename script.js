// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
    
    // Trigger loading animations
    document.querySelectorAll('.loading').forEach(element => {
        element.classList.add('loaded');
    });
});

// Navbar scroll effect with .scrolled class
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            navMenu.classList.add('hidden');
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Project filtering
document.querySelectorAll('.project-filter').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        document.querySelectorAll('.project-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter projects
        document.querySelectorAll('.project-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Service modal content
const serviceDetails = {
    'densification': {
        title: 'Densification',
        description: 'Professional densification services to strengthen and stabilize concrete surfaces. Our expert team uses advanced techniques to improve surface hardness and durability.',
        features: ['Surface preparation', 'Advanced densification techniques', 'Improved durability', 'Professional finish'],
        image: 'Densification.jpg'
    },
    'brick-work': {
        title: 'Brick Work',
        description: 'Expert brick laying and masonry work for residential and commercial projects. We ensure precision and quality in every brick placement.',
        features: ['Precision brick laying', 'Quality materials', 'Structural integrity', 'Aesthetic finish'],
        image: 'Brick-Work.jpg'
    },
    'concrete-flooring': {
        title: 'Concrete Flooring',
        description: 'Durable and cost-effective concrete flooring solutions. We provide polished, stained, and decorative concrete options.',
        features: ['Polished concrete', 'Stained concrete', 'Decorative finishes', 'Durable solutions'],
        image: 'Concrete-Flooring.jpg'
    },
    'flooring-tiles': {
        title: 'Flooring Tiles',
        description: 'Professional tile installation for floors, walls, and outdoor spaces. We work with ceramic, porcelain, and natural stone tiles.',
        features: ['Ceramic tiles', 'Porcelain tiles', 'Natural stone', 'Professional installation'],
        image: 'Flooring-Tiles.jpg'
    },
    'epoxy-flooring': {
        title: 'Epoxy Flooring',
        description: 'High-performance epoxy flooring systems for industrial and commercial applications. Resistant to chemicals, stains, and heavy traffic.',
        features: ['Chemical resistance', 'Stain resistance', 'Heavy traffic durability', 'Custom colors'],
        image: 'Epoxy-Flooring.jpg'
    },
    'granite-flooring': {
        title: 'Granite Flooring',
        description: 'Luxury granite flooring installation for premium spaces. Natural beauty with exceptional durability and timeless appeal.',
        features: ['Natural granite', 'Premium finish', 'Timeless appeal', 'Exceptional durability'],
        image: 'Granite-Flooring.jpg'
    },
    'painting-work': {
        title: 'Painting Works',
        description: 'Interior and exterior painting services with attention to detail. We use quality paints and professional techniques.',
        features: ['Interior painting', 'Exterior painting', 'Quality materials', 'Professional finish'],
        image: 'Painting-Work.jpg'
    },
    'false-ceiling': {
        title: 'False Ceiling',
        description: 'Modern false ceiling solutions for improved aesthetics and functionality. We offer various materials and designs.',
        features: ['Modern designs', 'Various materials', 'Improved aesthetics', 'Functional solutions'],
        image: 'False-Ceiling.jpg'
    },
    'grid-ceiling': {
        title: 'Grid Ceiling',
        description: 'Professional grid ceiling installation for commercial and industrial spaces. Durable and easy to maintain.',
        features: ['Commercial grade', 'Easy maintenance', 'Durable construction', 'Professional installation'],
        image: 'Grid-Ceiling.jpg'
    },
    'gypsum-partitions': {
        title: 'Gypsum Partitions',
        description: 'Lightweight and flexible gypsum partition walls for office and residential spaces. Quick installation and excellent sound insulation.',
        features: ['Lightweight construction', 'Sound insulation', 'Quick installation', 'Flexible design'],
        image: 'Gypsum-Partitions.jpg'
    },
    'wood-partitions': {
        title: 'Wood Partitions',
        description: 'Elegant wood partition solutions for creating functional spaces. Natural beauty with excellent craftsmanship.',
        features: ['Natural wood', 'Elegant design', 'Excellent craftsmanship', 'Functional spaces'],
        image: 'Wood-Partitions.jpg'
    },
    'vinyl-flooring': {
        title: 'Vinyl Flooring',
        description: 'Versatile vinyl flooring options for various applications. Waterproof, durable, and available in numerous styles.',
        features: ['Waterproof', 'Durable', 'Various styles', 'Easy maintenance'],
        image: 'Vinyl-Flooring.jpg'
    }
};

function openServiceModal(serviceId) {
    const service = serviceDetails[serviceId];
    if (service) {
        const modal = document.getElementById('service-modal');
        const content = document.getElementById('service-content');
        
        content.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${service.title}</h2>
            <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/2">
                    <img src="${service.image}" alt="${service.title}" class="w-full rounded-lg shadow-lg">
                </div>
                <div class="md:w-1/2">
                    <p class="text-gray-700 mb-4">${service.description}</p>
                    <h3 class="font-bold text-gray-800 mb-2">Key Features:</h3>
                    <ul class="list-disc list-inside text-gray-700 mb-4">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <button onclick="openModal('contact-modal')" class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Get Quote for ${service.title}
                    </button>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Project modal content
const projectDetails = {
    'swordlily': {
        title: 'Swordlily Cultural and Sports Pvt Ltd.',
        description: 'A comprehensive facility designed for cultural and sports activities, built with precision to meet client expectations and industry standards.',
        details: 'This project involved the construction of a state-of-the-art cultural and sports complex. We implemented advanced construction techniques and used high-quality materials to ensure durability and functionality.',
        services: ['Structural construction', 'Interior finishing', 'Sports facility setup', 'Cultural center design'],
        duration: '8 months',
        category: 'Commercial'
    },
    'robomatic': {
        title: 'Robomatic Precorn Pvt Ltd.',
        description: 'Innovative construction solutions for industrial needs, focusing on durability, safety, and high performance in automation facilities.',
        details: 'An industrial automation facility requiring specialized construction techniques. We focused on creating a robust infrastructure that could support heavy machinery and automation systems.',
        services: ['Industrial construction', 'Heavy machinery support', 'Safety systems', 'Automation infrastructure'],
        duration: '12 months',
        category: 'Industrial'
    },
    'uniworks': {
        title: 'Uniworks Designs',
        description: 'Modern architectural designs with a focus on aesthetics and functionality, bringing the client\'s vision to life in every detail.',
        details: 'A modern office complex featuring contemporary design elements and sustainable building practices. The project emphasized both aesthetic appeal and functional workspace design.',
        services: ['Modern architecture', 'Interior design', 'Sustainable building', 'Office space planning'],
        duration: '10 months',
        category: 'Commercial'
    },
    'ns-epoxy': {
        title: 'NS Epoxy and Fabrications',
        description: 'Specialized epoxy and fabrication work, delivering superior quality and precision for lasting results in industrial and commercial projects.',
        details: 'Specialized industrial facility requiring epoxy flooring and custom fabrication work. We delivered precision-engineered solutions for optimal performance.',
        services: ['Epoxy flooring', 'Custom fabrication', 'Industrial finishing', 'Precision engineering'],
        duration: '6 months',
        category: 'Industrial'
    },
    'priya-living': {
        title: 'Priya Living',
        description: 'Residential construction project focusing on luxury living with elegant design elements, functionality, and comfort in every space.',
        details: 'A luxury residential complex designed for modern living. We incorporated premium materials and thoughtful design to create comfortable and elegant living spaces.',
        services: ['Luxury residential', 'Premium materials', 'Interior design', 'Landscaping'],
        duration: '14 months',
        category: 'Residential'
    },
    'gaudium': {
        title: 'Gaudium International School',
        description: 'An educational facility designed to provide a supportive and inspiring environment, focusing on innovation and student growth.',
        details: 'A comprehensive educational facility designed to foster learning and development. The project included classrooms, laboratories, sports facilities, and administrative areas.',
        services: ['Educational facility', 'Classroom construction', 'Laboratory setup', 'Sports facilities'],
        duration: '16 months',
        category: 'Commercial'
    }
};

function openProjectModal(projectId) {
    const project = projectDetails[projectId];
    if (project) {
        const modal = document.getElementById('project-modal');
        const content = document.getElementById('project-content');
        
        content.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
            <div class="space-y-4">
                <p class="text-gray-700">${project.description}</p>
                <div class="bg-gray-100 p-4 rounded-lg">
                    <h3 class="font-bold text-gray-800 mb-2">Project Details:</h3>
                    <p class="text-gray-700">${project.details}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="font-bold text-gray-800 mb-2">Services Provided:</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            ${project.services.map(service => `<li>${service}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 mb-2">Project Information:</h3>
                        <p class="text-gray-700"><strong>Duration:</strong> ${project.duration}</p>
                        <p class="text-gray-700"><strong>Category:</strong> ${project.category}</p>
                    </div>
                </div>
                <button onclick="openModal('contact-modal')" class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get Similar Project Quote
                </button>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Testimonials carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dot');

function showTestimonial(index) {
    testimonials.forEach(slide => slide.classList.add('hidden'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.remove('hidden');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.querySelector('h3').innerText);
        const increment = target / speed;

        if (count < target) {
            counter.querySelector('h3').innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.querySelector('h3').innerText = target;
        }
    });
}

// Trigger counter animation when in view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Create email content
    const subject = `Quote Request - ${data.service || 'General Inquiry'}`;
    const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service Required: ${data.service || 'Not specified'}
Project Details: ${data.details || 'No details provided'}

---
This message was sent from the SN Constructions website contact form.
    `.trim();
    
    // Open email client with pre-filled content
    const mailtoLink = `mailto:snconstruction60@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Show success message
    alert('Email client opened! Please send the email to complete your quote request.');
    this.reset();
    closeModal('contact-modal');
});

// WhatsApp integration
function sendWhatsApp() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    let message = 'Hello! I would like to get a quote for construction services.\n\n';
    
    if (data.name) message += `Name: ${data.name}\n`;
    if (data.service) message += `Service: ${data.service}\n`;
    if (data.details) message += `Project Details: ${data.details}\n`;
    
    message += '\nPlease contact me for more details.';
    
    const whatsappLink = `https://wa.me/919398589479?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .testimonial-slide {
        transition: all 0.5s ease;
    }
    
    .testimonial-dot.active {
        background-color: #ef4444;
    }
    
    .service-card:hover img {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
    
    .project-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('home');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #ef4444, #dc2626);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') {
                closeModal(modal.id);
            }
        });
    }
});

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next testimonial
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        } else {
            // Swipe right - previous testimonial
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        }
        showTestimonial(currentTestimonial);
    }
}

// Initialize tooltips for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    imageObserver.observe(img);
});

document.addEventListener('DOMContentLoaded', function() {
  const heroImages = [
    "images/e819052e-6de7-4473-8aa5-af2fe99f1214.jpeg",
    "images/0de7d974-d338-4307-9f8e-83ff049a2ada.jpeg",
    "images/806d72c1-e501-4e1b-8bc7-032afafcfa1f.jpeg",
    "images/Densi1.jpeg",
    "images/Densi2.jpeg",
    "images/densi3.jpeg",
    "images/Densi4.jpeg",
    "images/densi5.jpeg",
    "images/densi6.jpeg",
    "images/construction1.jpeg",
    "images/painting1.jpeg",
    "images/painting2.jpeg",
    "images/painting3.jpeg",
    "images/painting4.jpeg",
    "images/painting5.jpeg",
    "images/pipeline1.jpeg",
    "images/roadwork1.jpeg",
    "images/False_ceiling.jpeg",
    "images/brickwork2.jpeg",
    "images/falseceiling2.jpeg",
    "images/brickwork4.jpeg",
    "images/falseceling5.jpeg",
    "images/falseceling6.jpeg"
  ];
  let current = 0;
  const heroBg = document.getElementById('hero-carousel-bg');
  const dotsContainer = document.getElementById('hero-carousel-dots');
  if (!heroBg || !dotsContainer) return;

  function updateDots() {
    dotsContainer.querySelectorAll('button').forEach((dot, idx) => {
      dot.classList.toggle('bg-red-500', idx === current);
      dot.classList.toggle('bg-opacity-100', idx === current);
      dot.classList.toggle('bg-opacity-50', idx !== current);
    });
  }

  function showSlide(idx) {
    heroBg.style.opacity = 0;
    setTimeout(() => {
      heroBg.style.backgroundImage = `url('${heroImages[idx]}')`;
      heroBg.style.opacity = 1;
    }, 400);
    updateDots();
  }

  function goToSlide(idx) {
    current = idx;
    showSlide(current);
  }

  // Create dots
  dotsContainer.innerHTML = '';
  heroImages.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 focus:outline-none transition-all duration-300';
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  // Initial state
  showSlide(current);

  // Auto slide
  setInterval(() => {
    current = (current + 1) % heroImages.length;
    showSlide(current);
  }, 3000);
});

console.log('SN Constructions Interactive Website Loaded Successfully!'); 