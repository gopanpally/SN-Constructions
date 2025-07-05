# SN Constructions - Interactive Website

A modern, interactive website for SN Constructions featuring dynamic content, smooth animations, and enhanced user experience.

## 🚀 Features

### Interactive Components
- **Loading Screen**: Smooth loading animation with company branding
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **Modal System**: Interactive modals for contact forms, service details, and project information
- **Project Filtering**: Filter portfolio projects by category (Commercial, Residential, Industrial)
- **Service Showcase**: Detailed service information with interactive cards
- **Testimonials Carousel**: Auto-rotating testimonials with manual navigation
- **Animated Counters**: Statistics that animate when scrolled into view
- **Smooth Animations**: AOS (Animate On Scroll) library integration

### Enhanced User Experience
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Touch Gestures**: Swipe support for testimonials on mobile devices
- **Keyboard Navigation**: ESC key to close modals
- **Progress Bar**: Visual scroll progress indicator
- **Parallax Effects**: Subtle parallax scrolling on hero section
- **Lazy Loading**: Optimized image loading for better performance

### Contact & Communication
- **Interactive Contact Form**: Functional contact form with validation
- **Service Quote Requests**: Direct quote requests for specific services
- **Project Inquiry**: Detailed project information and inquiry options
- **Click-to-Call**: Direct phone number integration
- **Email Integration**: Direct email links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Tailwind CSS
- **JavaScript (ES6+)**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework
- **AOS Library**: Animate On Scroll animations
- **Font Awesome**: Icon library
- **Responsive Design**: Mobile-first approach

## 📱 Interactive Features Breakdown

### 1. Navigation & Scrolling
```javascript
// Smooth scrolling to sections
scrollToSection('portfolio')

// Dynamic navbar background on scroll
window.addEventListener('scroll', function() {
    // Navbar background changes on scroll
})
```

### 2. Modal System
```javascript
// Open modals
openModal('contact-modal')
openServiceModal('densification')
openProjectModal('swordlily')

// Close modals
closeModal('modal-id')
```

### 3. Project Filtering
- Filter projects by category (All, Commercial, Residential, Industrial)
- Smooth animations when filtering
- Visual feedback for active filters

### 4. Service Details
- Click any service card to view detailed information
- Features list for each service
- Direct quote request integration
- High-quality images and descriptions

### 5. Testimonials
- Auto-rotating carousel (5-second intervals)
- Manual navigation with dots
- Touch swipe support for mobile
- Smooth transitions between testimonials

### 6. Statistics Animation
- Animated counters for projects, clients, and experience
- Triggers when scrolled into view
- Smooth counting animation

## 🎨 Design Features

### Color Scheme
- **Primary**: Red (#ef4444) - Brand color
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Orange for contact information

### Typography
- Clean, modern font stack
- Responsive text sizing
- Proper hierarchy with headings

### Animations
- Fade-in effects on scroll
- Hover transformations
- Smooth transitions
- Loading animations

## 📋 File Structure

```
SN-Constructions/
├── index.html          # Main HTML file with interactive elements
├── script.js           # JavaScript functionality
├── README.md           # This documentation
├── CNAME              # Custom domain configuration
├── *.jpg              # Image assets for services and content
└── banner-image.jpg   # Hero section background
```

## 🚀 Getting Started

1. **Clone or Download** the repository
2. **Open** `index.html` in a modern web browser
3. **Explore** the interactive features:
   - Click service cards for detailed information
   - Use project filters to view different categories
   - Fill out the contact form
   - Navigate through testimonials
   - Scroll to see animations

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-optimized navigation menu
- Touch-friendly interactive elements
- Swipe gestures for testimonials
- Optimized layouts for all screen sizes

## 🔧 Customization

### Adding New Services
1. Add service image to the root directory
2. Update `serviceDetails` object in `script.js`
3. Add service card to HTML

### Adding New Projects
1. Update `projectDetails` object in `script.js`
2. Add project card to HTML with appropriate classes

### Modifying Colors
- Update Tailwind CSS classes in HTML
- Modify CSS custom properties in the style section

## 📞 Contact Information

- **Phone**: +91 9398589479
- **Email**: gbheemreddy3@gmail.com
- **Address**: Sarath Defense Colony, NH 65, Muthangi, Patancheru, Sangareddy Dist. - 502 300, TS

## 🎯 Interactive Elements Guide

### For Visitors
1. **Get Quote**: Click "Get Free Quote" button or any service card
2. **View Projects**: Use filter buttons to explore different project types
3. **Learn About Services**: Click service cards for detailed information
4. **Contact**: Use the contact form or direct contact information
5. **Navigation**: Smooth scrolling between sections

### For Developers
- All interactive features are modular and well-documented
- JavaScript functions are reusable and extensible
- CSS classes follow Tailwind conventions
- Responsive design patterns are implemented throughout

## 🔄 Future Enhancements

Potential additions for further interactivity:
- **Image Gallery**: Lightbox for project images
- **Blog Section**: Company updates and industry insights
- **Online Booking**: Appointment scheduling system
- **Live Chat**: Real-time customer support
- **Project Timeline**: Interactive project progress tracking
- **3D Tours**: Virtual project walkthroughs
- **Social Media Integration**: Feed from company social accounts

## 📄 License

© 2024 SN CONSTRUCTIONS All Rights Reserved.

---

**Built with ❤️ for SN Constructions** - Transforming static content into an engaging, interactive experience. 