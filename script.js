// Appointment Form Handler
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const carModel = document.getElementById('carModel').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;
    
    // Format the appointment details
    const appointmentDetails = `
Appointment Booked Successfully!

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Car Model: ${carModel}
Service: ${service}
Date: ${date}
Time: ${time}
Additional Notes: ${message || 'None'}

We'll contact you shortly to confirm. Call us at (347) 265-3842 for any questions.`;
    
    // Show confirmation
    const confirmationDiv = document.getElementById('confirmationMessage');
    confirmationDiv.textContent = appointmentDetails;
    confirmationDiv.classList.add('success');
    confirmationDiv.style.whiteSpace = 'pre-line';
    
    // Log to console (in production, this would send to a backend)
    console.log('Appointment Details:', {
        name,
        email,
        phone,
        carModel,
        service,
        date,
        time,
        message
    });
    
    // Reset form
    this.reset();
    
    // Hide confirmation after 10 seconds
    setTimeout(() => {
        confirmationDiv.classList.remove('success');
        confirmationDiv.textContent = '';
    }, 10000);
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    const formData = {};
    
    inputs.forEach(input => {
        formData[input.placeholder] = input.value;
    });
    
    console.log('Contact Form Submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Mobile menu toggle (if needed for smaller screens)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Add minimum date to date picker (today's date)
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Phone number formatting
document.getElementById('phone')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else {
            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
    }
    e.target.value = value;
});