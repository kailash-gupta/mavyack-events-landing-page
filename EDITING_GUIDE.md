# Mavryck Events Website - Editing Guide

This guide will help you easily modify and update your website content. All sections are clearly marked with comments in the code files.

## 📁 **File Structure Overview**

```
mavryck-static-site/
├── index.html              # Main website structure and content
├── styles.css             # Visual styling and animations
├── script.js              # Interactive features and data
├── EDITING_GUIDE.md       # This guide
└── public/                # Images and assets
```

---

## 🔧 **How to Edit Different Sections**

### 🎯 **1. Services Section (12 Services)**

**Location**: `script.js` (lines 9-105)

**How to Add a New Service**:
```javascript
// Copy this pattern and add it to the services array:
{
    id: 13,                    // Use next available number
    icon: 'gift',             // Lucide icon name
    name: 'New Service Name', // Display name
    description: 'Detailed description of what this service includes...',
    color: 'from-orange-500 to-orange-600' // Tailwind gradient colors
}
```

**Available Icons**: calendar, map-pin, gift, heart, building-2, music, party-popper, star, users, utensils, camera, truck, tv, etc.

**Available Colors**: blue, green, purple, pink, indigo, cyan, red, yellow, teal, orange, violet, emerald

**How to Modify Existing Services**:
- Change the `name`, `description`, `icon`, or `color` values
- Update the `id` only if reordering services

---

### 🖼️ **2. Gallery Section (24 Images)**

**Location**: `script.js` (lines 107-263)

**How to Add a New Gallery Image**:
```javascript
// Copy this pattern and add it to the galleryImages array:
{
    id: 25,                              // Use next available number
    title: 'Event Title',                // Name of the event
    category: 'Corporate',               // Must match existing categories
    url: 'https://example.com/image.jpg' // Full URL to the image
}
```

**Available Categories**: 'Corporate', 'Wedding', 'Birthday', 'Festival', 'Gala', 'Anniversary'

**Image Recommendations**:
- Size: 500x500 pixels
- Format: JPG or PNG
- Free image sources: unsplash.com, pexels.com, pixabay.com
- Use high-quality, event-related images

**How to Add New Categories**:
1. Add the new category to the `categories` array (line 308)
2. Update the gallery filter buttons in `index.html`

---

### 💬 **3. Testimonials Section ("What Our Clients Say")**

**Location**: `script.js` (lines 265-303)

**How to Add a New Testimonial**:
```javascript
// Copy this pattern and add it to the testimonials array:
{
    id: 4,                                    // Use next available number
    name: 'Client Name',                      // Full client name
    role: 'Client Role/Company',              // Client's position or company
    content: 'Client testimonial text...',    // The actual testimonial
    rating: 5,                                // Rating from 1-5 stars
    avatar: 'https://example.com/avatar.jpg'  // 100x100px profile picture
}
```

**Avatar Recommendations**:
- Size: 100x100 pixels
- Use professional headshots
- Free sources: unsplash.com/search/photos/portrait
- Ensure clear, friendly faces

---

### 🕒 **4. Working Hours Section**

**Location**: `index.html` (lines 185-238)

**How to Modify Working Hours**:
```html
<!-- Find the day you want to change and edit the time span -->
<div class="working-hours-row">
    <span class="working-hours-day">Monday</span>
    <span class="working-hours-time">9:00 AM - 6:00 PM</span> <!-- EDIT THIS LINE -->
</div>

<!-- For closed days, use: -->
<span class="working-hours-time closed">Closed</span>
```

**How to Edit the Note**:
```html
<!-- Edit the text in the working-hours-note div -->
<div class="working-hours-note">
    <i data-lucide="info" class="h-4 w-4"></i>
    Event consultations available by appointment. Extended hours during peak season. <!-- EDIT THIS LINE -->
</div>
```

---

### 📞 **5. Contact Information Section**

**Location**: `index.html` (lines 241-280)

**How to Edit Email**:
```html
<div>
    <h3 class="text-xl font-semibold text-white mb-2">Email</h3>
    <p class="text-gray-300">hello@mavryckevents.com</p> <!-- EDIT THIS LINE -->
</div>
```

**How to Edit Phone**:
```html
<div>
    <h3 class="text-xl font-semibold text-white mb-2">Phone</h3>
    <p class="text-gray-300">+1 (555) 123-4567</p> <!-- EDIT THIS LINE -->
</div>
```

**How to Edit Address**:
```html
<div>
    <h3 class="text-xl font-semibold text-white mb-2">Location</h3>
    <p class="text-gray-300">123 Event Street, Celebration City, CC 12345</p> <!-- EDIT THIS LINE -->
</div>
```

---

### 📱 **6. Social Media Links**

**Location**: `index.html` (lines 283-303)

**How to Update Social Media URLs**:
```html
<!-- Replace the # with your actual social media URLs -->
<!-- Instagram -->
<a href="https://instagram.com/yourprofile" class="..."> <!-- EDIT THIS LINE -->
    <i data-lucide="instagram" class="h-5 w-5 text-white"></i>
</a>

<!-- Facebook -->
<a href="https://facebook.com/yourpage" class="..."> <!-- EDIT THIS LINE -->
    <i data-lucide="facebook" class="h-5 w-5 text-white"></i>
</a>

<!-- Twitter -->
<a href="https://twitter.com/yourprofile" class="..."> <!-- EDIT THIS LINE -->
    <i data-lucide="twitter" class="h-5 w-5 text-white"></i>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" class="..."> <!-- EDIT THIS LINE -->
    <i data-lucide="linkedin" class="h-5 w-5 text-white"></i>
</a>
```

---

## 🎨 **7. Design and Styling Changes**

**Location**: `styles.css`

**How to Change Colors**:
- **Primary Background**: Look for `#667eea` and `#764ba2` (purple gradient)
- **Accent Color**: Look for `#fbbf24` (orange/yellow)
- **Text Colors**: Look for `#ffffff` (white) and `#d1d5db` (gray)

**How to Modify Animations**:
- Scroll animations are controlled by CSS keyframes
- Hover effects are in the respective sections
- Animation delays are at the bottom of the file

---

## 🔧 **8. Technical Tips**

### **Adding New Services, Gallery Images, or Testimonials**:
1. Always use unique `id` numbers
2. Follow the exact pattern structure
3. Save the file and refresh your browser
4. Test the changes on different screen sizes

### **Image Management**:
- Use consistent image sizes for gallery (500x500px)
- Use square images for avatars (100x100px)
- Optimize images for web loading speed
- Use descriptive file names

### **Testing Your Changes**:
1. Open `index.html` in your web browser
2. Test all interactive elements (gallery filters, navigation, etc.)
3. Check mobile responsiveness (use browser developer tools)
4. Verify all links work correctly

### **Backup Before Editing**:
- Always keep a backup of your files
- Consider using Git for version control
- Test changes in a development environment first

---

## 🚀 **9. Deployment**

After making changes, deploy your updated website:

### **GitHub Pages** (Free):
1. Push changes to GitHub
2. Go to repository Settings → Pages
3. Select source branch: `static-site`
4. Your site will be available at: `https://recaps088.github.io/mavryck-static-site`

### **Netlify** (Free):
1. Connect your GitHub repository to Netlify
2. Set build command: `#` (leave empty for static site)
3. Set publish directory: `.` (root directory)
4. Deploy automatically on every push

### **Vercel** (Free):
1. Import your GitHub repository to Vercel
2. Select the `static-site` branch
3. Deploy automatically on every push

---

## 📞 **Need Help?**

If you encounter any issues while editing:
1. Check the browser console for errors (F12 → Console)
2. Verify all syntax is correct (missing commas, brackets, etc.)
3. Ensure all URLs are valid and accessible
4. Test in different browsers (Chrome, Firefox, Safari)

---

**Happy Editing! 🎉**

Your website is now fully customizable and easy to maintain. All sections are clearly marked with comments, making it simple to update content as your business grows.