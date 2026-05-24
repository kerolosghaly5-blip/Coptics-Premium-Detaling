# Coptics Premium Detailing - Professional Car Detailing Website

Welcome to the Coptics Premium Detailing website! This is a complete, professional car detailing business website with online booking, pricing, contact forms, and more.

## 🚗 Features

### 📋 **Services Offered**
- **Exterior Cleaning** - $35
- **Interior Detailing** - $75
- **Full Service Package** - $99
- **Ceramic Coating Add-On** - +$30

### 💻 **Website Features**
- ✅ Professional, modern design with dark/gold color scheme
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Online appointment booking system
- ✅ Real-time price calculation
- ✅ Contact form for inquiries
- ✅ Business hours and contact information
- ✅ Smooth animations and transitions
- ✅ Services showcase with icons
- ✅ Pricing comparison cards
- ✅ Local storage for bookings and messages

### 📱 **Business Contact**
- **Phone:** (348) 265-3842
- **Email:** info@copticspremium.com
- **Hours:** Mon-Fri 9AM-6PM, Sat 10AM-4PM

## 📁 **Files Included**

1. **index.html** - Main website HTML structure
2. **styles.css** - Professional CSS styling and animations
3. **script.js** - JavaScript for bookings, forms, and interactivity
4. **README.md** - This documentation file

## 🚀 **How to Use**

### **Quick Start**
1. Open `index.html` in any web browser
2. No installation or server needed!
3. Website is fully functional offline

### **For Customers**
1. Browse services and pricing
2. Click "Book Your Appointment Now"
3. Fill out the booking form with:
   - Your name and contact info
   - Vehicle details
   - Service selection
   - Preferred date and time
   - Optional: Add ceramic coating
4. Submit the form
5. You'll see a confirmation message
6. The business will contact you to confirm

### **For Business Owner (You)**
The system stores all bookings and messages in the browser's local storage. To access:

**View all bookings:**
```javascript
// Open browser console (F12 or right-click > Inspect > Console)
coptics.viewBookings()
```

**View all messages:**
```javascript
coptics.viewMessages()
```

**Clear all data (for testing):**
```javascript
coptics.clearData()
```

## 🎨 **Design Features**

### **Color Scheme**
- **Primary Color:** Dark Navy Blue (#0f1823)
- **Secondary Color:** Vibrant Red (#d32f2f)
- **Accent Color:** Gold (#d4af37)
- **Light Background:** Off-white (#f5f5f5)

### **Design Elements**
- Smooth gradient backgrounds
- Hover animations and transitions
- Modern card layouts
- Responsive grid system
- Professional typography
- Icons for visual appeal
- Clean white space

## 📧 **Customer Information Flow**

1. **Bookings** are saved with:
   - Customer name, email, phone
   - Vehicle model
   - Service type
   - Date and time
   - Total price (auto-calculated)
   - Notes/special requests
   - Submission timestamp

2. **Messages** are saved with:
   - Customer name and email
   - Message content
   - Submission timestamp

## ✨ **Special Features**

### **Smart Price Calculation**
- Automatically calculates total based on service selection
- Adds ceramic coating cost if selected
- Updates in real-time as customer makes choices

### **Validation**
- All required fields must be filled
- Date picker prevents booking past dates
- Phone number automatically formatted
- Email validation built-in

### **User Experience**
- Smooth scroll navigation
- Success messages confirm submissions
- Mobile-friendly responsive design
- Fast loading and interactive elements
- Professional animations and transitions

## 🔧 **Customization**

### **Change Pricing**
Edit the `pricing` object in `script.js`:
```javascript
const pricing = {
    exterior: 35,      // Change exterior price here
    interior: 75,      // Change interior price here
    full: 99,          // Change full package price here
    ceramic: 30        // Change ceramic coating price here
};
```

### **Change Contact Info**
Edit phone/email in:
- `index.html` - Line 267 (phone number display)
- `index.html` - Line 333 (email display)
- Update social media links in footer

### **Change Business Hours**
Edit in `index.html` around line 270

### **Customize Colors**
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0f1823;    /* Dark blue */
    --secondary-color: #d32f2f;  /* Red */
    --accent-color: #d4af37;     /* Gold */
    /* etc... */
}
```

## 📊 **Data Storage**

All data is stored locally in the browser using `localStorage`:
- **Key for bookings:** `coptics_bookings`
- **Key for messages:** `coptics_messages`

This means:
- Data persists even after closing the browser
- Each browser/device has its own storage
- No server or database needed
- Completely private and local

## 🎯 **Next Steps (Optional Enhancements)**

1. **Deploy to web:**
   - Upload files to GitHub Pages
   - Use Netlify or Vercel (free)
   - Get a custom domain

2. **Add email notifications:**
   - Connect to a service like EmailJS
   - Send confirmation emails to customers

3. **Advanced features:**
   - Real payment processing
   - Admin dashboard
   - Email reminders
   - Before/after photo gallery

4. **SEO Optimization:**
   - Add meta descriptions
   - Schema.org markup
   - Google My Business integration

## 💡 **Tips**

- Test the booking system by filling out a form
- Check browser console (F12) for all submissions
- Share the website URL with customers
- Bookmark `coptics.viewBookings()` for quick access to new appointments

## 📞 **Support**

This website is self-contained and needs no external services. Everything is built into the HTML, CSS, and JavaScript files.

For any modifications or questions, you can edit the files directly in any text editor.

---

**Created for:** Coptics Premium Detailing
**Phone:** (348) 265-3842
**Website:** Professional Car Detailing Services

Enjoy your new website! 🚗✨
