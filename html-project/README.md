# IPTours.lk - HTML Project

This is a complete HTML/CSS/JavaScript conversion of the React-based IPTours.lk website, using Tailwind CSS for styling.

## Project Structure

```
html-project/
├── index.html          # Home page
├── about.html          # About Us page
├── tours.html          # Tour Packages page with filtering
├── blog.html           # Blog listing page
├── blog-post.html      # Individual blog post page
├── contact.html        # Contact page with form
├── styles.css          # Custom CSS styles
├── script.js           # Shared JavaScript functionality
├── about.js            # About page specific JavaScript
├── tours.js            # Tours page filtering functionality
├── blog.js             # Blog page filtering functionality
└── README.md           # This file
```

## Features

### Pages

1. **Home (index.html)**
   - Hero slider with auto-advance
   - Featured tours section
   - Why choose us section
   - Testimonials
   - Newsletter subscription

2. **About Us (about.html)**
   - Mission statement
   - Company story
   - Team members
   - Awards & recognition
   - Call to action

3. **Tour Packages (tours.html)**
   - Search functionality
   - Category filtering
   - Duration filtering
   - Tour grid display
   - Pagination

4. **Blog (blog.html)**
   - Blog post listing
   - Search functionality
   - Category filtering
   - Recent posts sidebar
   - Newsletter subscription
   - Popular tags

5. **Blog Post (blog-post.html)**
   - Full article content
   - Share buttons
   - Author bio
   - Comments section
   - Comment form

6. **Contact (contact.html)**
   - Contact form
   - Business information
   - WhatsApp integration
   - Social media links
   - Google Maps embed

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **JavaScript (Vanilla)** - No frameworks, pure JavaScript
- **Lucide Icons** - Icon library (via CDN)
- **Google Maps** - Embedded map for contact page

## Getting Started

1. Open any HTML file in a web browser
2. All pages are standalone and can be opened directly
3. No build process or server required

## Features Implemented

### Interactive Elements

- **Mobile Menu**: Responsive navigation with hamburger menu
- **Hero Slider**: Auto-advancing image slider with manual controls
- **Search & Filter**: Real-time filtering on tours and blog pages
- **Form Handling**: Contact form, newsletter subscription, and comment forms
- **Hover Effects**: Card hover animations and image zoom effects

### Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Mobile menu for small screens
- Flexible typography and spacing

### Styling

- Custom CSS patterns (dots, grid, waves, circuit)
- Decorative blob elements
- Smooth transitions and animations
- Consistent color scheme matching the original design

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All images are loaded from Unsplash (external URLs)
- Forms use client-side validation and alerts (can be connected to backend)
- Icons are loaded from Lucide CDN
- Tailwind CSS is loaded from CDN

## Customization

To customize colors, edit the Tailwind classes in HTML files or add custom CSS in `styles.css`.

Main color scheme:
- Primary dark: `#0a1628`
- Primary: `#132640`
- Accent blue: `#1e3a8a` / `#3b82f6`
- Gold accent: `#fbbf24`
- Text: `#e8edf5`

## Future Enhancements

- Connect forms to backend API
- Add image lazy loading
- Implement actual pagination
- Add smooth scroll animations
- Add loading states for dynamic content

