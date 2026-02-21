# 
Aryan Sharma - Portfolio Website

A fully responsive, dynamic portfolio website with Covr-inspired parallax scrolling effects. Built with pure HTML, CSS, and JavaScript - no frameworks required.

## Features

- **Covr-Inspired Design**: Smooth parallax scrolling effects on background images
- **6 Dynamic Sections**: Home, About, Education, Projects, Experience, and Contact
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations for enhanced user experience
- **Modern UI/UX**: Clean, professional design with gradient accents
- **Contact Form**: Functional contact form with validation (ready for backend integration)
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Smooth 60fps animations using requestAnimationFrame

## Project Structure

```
aryan-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet with extensive comments
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # Project images (add your own)
│   ├── weather-app.jpg
│   ├── news-app.jpg
│   ├── backend.jpg
│   ├── ecommerce-testing.jpg
│   ├── chatbot-testing.jpg
│   └── logistics-testing.jpg
└── README.md              # This file
```

##  Quick Start

1. **Clone or Download** this repository
2. **Add Your Images**: Place project images in the `images/` folder
3. **Customize Content**: Edit `index.html` to update your information
4. **Adjust Styling**: Modify CSS variables in `style.css`
5. **Test Locally**: Open `index.html` in your browser
6. **Deploy**: Push to GitHub Pages, Netlify, or Vercel

##  Customization Guide

### 1. Change Color Scheme

Edit CSS variables in `css/style.css` (lines 18-27):

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --primary-dark: #5568d3;       /* Darker shade */
    --primary-light: #7c8ff0;      /* Lighter shade */
    --secondary-color: #764ba2;    /* Secondary color */
    --accent-color: #f093fb;       /* Accent color */
}
```

### 2. Update Personal Information

#### Contact Details (Multiple Locations):
- **Hero Section**: Lines 45-46 in `index.html`
- **Contact Section**: Lines 705-720 in `index.html`
- **Footer**: Lines 759-765 in `index.html`

#### Professional Summary:
- **About Section**: Lines 131-147 in `index.html`

#### GitHub/LinkedIn Links:
- **Social Links**: Lines 58-68 in `index.html`

### 3. Add/Remove Projects

#### Edit Project Grid (Starting Line 351):

```html
<div class="project-card" data-aos="zoom-in">
    <div class="project-image">
        <img src="images/YOUR-PROJECT.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://github.com/YOUR-REPO" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a href="YOUR-LIVE-DEMO" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

### 4. Modify Skills Section

Edit skills in `index.html` (Lines 152-193):

```html
<div class="skill-category">
    <h4><i class="fas fa-code"></i> Category Name</h4>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>
```

### 5. Update Experience

Edit experience details (Lines 532-643):

- Company name
- Job title
- Duration
- Responsibilities
- Technologies used
- Achievements

### 6. Adjust Parallax Effect

Edit parallax speed in `js/script.js` (Lines 130-150):

```javascript
const speed = element.getAttribute('data-speed') || 0.5;
```

Or update in HTML:
```html
<div class="parallax-bg" data-speed="0.3"></div>
<!-- Lower number = slower scroll, more dramatic effect -->
```

### 7. Change Section Backgrounds

Edit background styles in `css/style.css` (Lines 304-330):

```css
#home .parallax-bg {
    background: var(--gradient-primary);
}

#about .parallax-bg {
    background: linear-gradient(...);
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🔧 Form Integration

The contact form needs backend integration. Options:

### Option 1: EmailJS (Recommended for beginners)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your credentials
3. Add to `js/script.js`:

```javascript
// In handleFormSubmit function (line 220)
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
    .then(() => {
        showMessage('Message sent successfully!', 'success');
    });
```

### Option 2: Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Get your form endpoint
3. Update form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom Backend API

Update the fetch URL in `js/script.js` (line 235):

```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🖼️ Adding Project Images

### Image Requirements:
- **Format**: JPG or PNG
- **Dimensions**: 800x600px (4:3 ratio) recommended
- **File Size**: Under 500KB for fast loading
- **Naming**: Use lowercase with hyphens (e.g., `weather-app.jpg`)

### Placeholder Images:
If images are missing, the site uses Unsplash placeholders automatically. To change placeholders, edit `js/script.js` (lines 272-279).

### How to Add:
1. Place image in `images/` folder
2. Update `src` attribute in HTML:
```html
<img src="images/your-image.jpg" alt="Description">
```

## 🚀 Deployment

### GitHub Pages:

1. **Create repository** named `username.github.io`
2. **Push code**:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Aryuansharma/Aryuansharma.github.io.git
git push -u origin main
```
3. **Enable GitHub Pages** in repository settings
4. **Access** at `https://aryuansharma.github.io`

### Netlify:

1. **Drag and drop** the folder to [Netlify](https://app.netlify.com/)
2. **Or connect** to your GitHub repository
3. **Deploy** automatically

### Vercel:

1. **Install** Vercel CLI: `npm i -g vercel`
2. **Run**: `vercel`
3. **Follow** prompts

## 📋 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## ⚡ Performance Tips

1. **Optimize Images**: Use tools like [TinyPNG](https://tinypng.com/)
2. **Lazy Loading**: Uncomment lazy loading code in `script.js`
3. **Minify CSS/JS**: Use build tools before production
4. **CDN for Icons**: Font Awesome is loaded from CDN
5. **Caching**: Configure server caching headers

## 🐛 Troubleshooting

### Images Not Loading:
- Check file paths are correct
- Ensure images are in `images/` folder
- Verify file extensions match (case-sensitive on Linux servers)

### Parallax Not Working:
- Check JavaScript console for errors
- Ensure `data-speed` attribute is set
- Verify `parallax-bg` class is applied

### Mobile Menu Not Opening:
- Clear browser cache
- Check JavaScript console
- Verify nav IDs match in HTML and JS

### Animations Not Triggering:
- Scroll slowly to test
- Check `data-aos` attributes
- Verify IntersectionObserver support

## 📝 To-Do / Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement blog section
- [ ] Add loading screen
- [ ] Include testimonials section
- [ ] Add downloadable resume button
- [ ] Integrate analytics (Google Analytics)
- [ ] Add language switcher
- [ ] Create admin panel for easy updates

##  License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own use!

##  Contact

**Aryan Sharma**
- Email: aryuansharma@gmail.com
- LinkedIn: [linkedin.com/in/aryan-sharma](https://www.linkedin.com/in/aryan-sharma/)
- GitHub: [github.com/Aryuansharma](https://github.com/Aryuansharma)

---

## Quick Reference: Common Edits

| What to Change | File | Line Numbers |
|----------------|------|--------------|
| Name & Title | index.html | 45-50 |
| Professional Summary | index.html | 131-147 |
| Skills | index.html | 152-193 |
| Education | index.html | 244-290 |
| Projects | index.html | 351-508 |
| Experience | index.html | 532-643 |
| Contact Info | index.html | 705-720 |
| Color Scheme | style.css | 18-27 |
| Fonts | style.css | 36 |
| Parallax Speed | script.js | 143 |
| Form Endpoint | script.js | 235 |

---

**Built with ❤️ by Aryan Sharma**

Last Updated: February 2026
