// ==========================================
// COPTICS PREMIUM DETAILING - JAVASCRIPT
// Professional Car Detailing Website
// ==========================================

// Pricing Configuration
const pricing = {
    exterior: 35,
    interior: 75,
    full: 99,
    ceramic: 30
};

// Main Coptics Object
const coptics = {
    // Initialize the website
    init: function() {
        this.setupEventListeners();
        this.setupMinDate();
    },

    // Setup all event listeners
    setupEventListeners: function() {
        const bookingForm = document.getElementById('bookingForm');
        const contactForm = document.getElementById('contactForm');
        const serviceSelect = document.getElementById('service');
        const ceramicCheckbox = document.getElementById('ceramic');

        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => this.handleBookingSubmit(e));
        }

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }

        if (serviceSelect) {
            serviceSelect.addEventListener('change', () => this.updatePrice());
        }

        if (ceramicCheckbox) {
            ceramicCheckbox.addEventListener('change', () => this.updatePrice());
        }
    },

    // Set minimum date to today
    setupMinDate: function() {
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
    },

    // Update total price based on selections
    updatePrice: function() {
        const serviceSelect = document.getElementById('service');
        const ceramicCheckbox = document.getElementById('ceramic');
        const totalPriceElement = document.getElementById('totalPrice');

        if (!serviceSelect || !totalPriceElement) return;

        let total = 0;
        const service = serviceSelect.value;

        if (service === 'exterior') {
            total = pricing.exterior;
        } else if (service === 'interior') {
            total = pricing.interior;
        } else if (service === 'full') {
            total = pricing.full;
        }

        if (ceramicCheckbox && ceramicCheckbox.checked) {
            total += pricing.ceramic;
        }

        totalPriceElement.textContent = '$' + total;
    },

    // Handle booking form submission
    handleBookingSubmit: function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const vehicle = document.getElementById('vehicle').value.trim();
        const service = document.getElementById('service').value;
        const ceramic = document.getElementById('ceramic').checked;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const notes = document.getElementById('notes').value.trim();

        // Validation
        if (!name || !email || !phone || !vehicle || !service || !date || !time) {
            alert('Please fill in all required fields');
            return;
        }

        // Calculate total price
        let total = 0;
        if (service === 'exterior') total = pricing.exterior;
        else if (service === 'interior') total = pricing.interior;
        else if (service === 'full') total = pricing.full;

        if (ceramic) total += pricing.ceramic;

        // Create booking object
        const booking = {
            id: Date.now(),
            name,
            email,
            phone,
            vehicle,
            service,
            ceramic,
            date,
            time,
            notes,
            totalPrice: total,
            timestamp: new Date().toLocaleString()
        };

        // Save booking
        this.saveBooking(booking);

        // Show success message
        this.showSuccessMessage('bookingForm', 'Booking submitted successfully! We will contact you at ' + phone + ' to confirm your appointment.');

        // Reset form
        document.getElementById('bookingForm').reset();
        document.getElementById('totalPrice').textContent = '$0';

        // Log to console for verification
        console.log('New Booking:', booking);
    },

    // Handle contact form submission
    handleContactSubmit: function(e) {
        e.preventDefault();

        const form = e.target;
        const inputs = form.querySelectorAll('input, textarea');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const message = inputs[2].value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Create message object
        const msg = {
            id: Date.now(),
            name,
            email,
            message,
            timestamp: new Date().toLocaleString()
        };

        // Save message
        this.saveMessage(msg);

        // Show success message
        this.showSuccessMessage('contactForm', 'Thank you for your message! We will get back to you soon at ' + email);

        // Reset form
        form.reset();

        // Log to console
        console.log('New Message:', msg);
    },

    // Save booking to local storage
    saveBooking: function(booking) {
        let bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('coptics_bookings', JSON.stringify(bookings));
    },

    // Save message to local storage
    saveMessage: function(msg) {
        let messages = JSON.parse(localStorage.getItem('coptics_messages')) || [];
        messages.push(msg);
        localStorage.setItem('coptics_messages', JSON.stringify(messages));
    },

    // Show success message
    showSuccessMessage: function(formId, message) {
        const form = document.getElementById(formId);
        if (!form) return;

        // Create success message element
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message show';
        successDiv.textContent = message;

        // Insert before form
        form.parentNode.insertBefore(successDiv, form);

        // Remove after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    },

    // View all bookings (for business owner)
    viewBookings: function() {
        const bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        console.log('=== ALL BOOKINGS ===');
        console.table(bookings);
        return bookings;
    },

    // View all messages (for business owner)
    viewMessages: function() {
        const messages = JSON.parse(localStorage.getItem('coptics_messages')) || [];
        console.log('=== ALL MESSAGES ===');
        console.table(messages);
        return messages;
    },

    // View specific booking by ID
    viewBooking: function(id) {
        const bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        const booking = bookings.find(b => b.id === id);
        if (booking) {
            console.log('Booking Details:', booking);
            return booking;
        }
        console.log('Booking not found');
        return null;
    },

    // Delete booking (for business owner)
    deleteBooking: function(id) {
        let bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('coptics_bookings', JSON.stringify(bookings));
        console.log('Booking deleted');
    },

    // Delete message (for business owner)
    deleteMessage: function(id) {
        let messages = JSON.parse(localStorage.getItem('coptics_messages')) || [];
        messages = messages.filter(m => m.id !== id);
        localStorage.setItem('coptics_messages', JSON.stringify(messages));
        console.log('Message deleted');
    },

    // Clear all data (for testing)
    clearData: function() {
        if (confirm('Are you sure you want to delete ALL bookings and messages? This cannot be undone.')) {
            localStorage.removeItem('coptics_bookings');
            localStorage.removeItem('coptics_messages');
            console.log('All data cleared');
        }
    },

    // Export bookings as JSON
    exportBookings: function() {
        const bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        const dataStr = JSON.stringify(bookings, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `coptics_bookings_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        console.log('Bookings exported');
    },

    // Export messages as JSON
    exportMessages: function() {
        const messages = JSON.parse(localStorage.getItem('coptics_messages')) || [];
        const dataStr = JSON.stringify(messages, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `coptics_messages_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        console.log('Messages exported');
    },

    // Get booking statistics
    getStats: function() {
        const bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        const stats = {
            totalBookings: bookings.length,
            totalRevenue: bookings.reduce((sum, b) => sum + b.totalPrice, 0),
            bookingsByService: {
                exterior: bookings.filter(b => b.service === 'exterior').length,
                interior: bookings.filter(b => b.service === 'interior').length,
                full: bookings.filter(b => b.service === 'full').length
            },
            ceramicAddonBookings: bookings.filter(b => b.ceramic).length
        };
        console.log('=== BUSINESS STATISTICS ===');
        console.table(stats);
        return stats;
    },

    // Get today's bookings
    getTodayBookings: function() {
        const bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        const today = new Date().toISOString().split('T')[0];
        const todayBookings = bookings.filter(b => b.date === today);
        console.log(`=== BOOKINGS FOR ${today} ===`);
        console.table(todayBookings);
        return todayBookings;
    },

    // Search bookings by customer name
    searchByName: function(searchName) {
        const bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        const results = bookings.filter(b => b.name.toLowerCase().includes(searchName.toLowerCase()));
        console.log(`=== SEARCH RESULTS FOR "${searchName}" ===`);
        console.table(results);
        return results;
    },

    // Search bookings by email
    searchByEmail: function(searchEmail) {
        const bookings = JSON.parse(localStorage.getItem('coptics_bookings')) || [];
        const results = bookings.filter(b => b.email.toLowerCase().includes(searchEmail.toLowerCase()));
        console.log(`=== SEARCH RESULTS FOR "${searchEmail}" ===`);
        console.table(results);
        return results;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    coptics.init();
});

// Smooth scroll for anchor links
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

// Add animation on scroll
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

document.querySelectorAll('.service-card, .pricing-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Console greeting
console.log('%c🚗 Welcome to Coptics Premium Detailing! 🚗', 'font-size: 20px; color: #d32f2f; font-weight: bold;');
console.log('%cUse these commands to manage your business:', 'font-size: 14px; font-weight: bold;');
console.log('%ccoptics.viewBookings()        // View all bookings', 'color: #0f1823; font-weight: bold;');
console.log('%ccoptics.viewMessages()        // View all messages', 'color: #0f1823; font-weight: bold;');
console.log('%ccoptics.getTodayBookings()    // View today\'s bookings', 'color: #0f1823; font-weight: bold;');
console.log('%ccoptics.getStats()            // View business statistics', 'color: #0f1823; font-weight: bold;');
console.log('%ccoptics.searchByName("John")  // Search bookings by customer name', 'color: #0f1823; font-weight: bold;');
console.log('%ccoptics.exportBookings()      // Download all bookings as JSON', 'color: #0f1823; font-weight: bold;');
console.log('%ccoptics.clearData()           // Delete all data (be careful!)', 'color: #d32f2f; font-weight: bold;');
console.log('%cPhone: (348) 265-3842', 'font-size: 12px; color: #d4af37;');
