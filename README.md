# Keyorix Landing Page

A modern, bilingual (English/Spanish) marketing landing page for Keyorix - an open-source secrets management platform built for DevOps and zero-trust environments.

## 🌟 Features

- **Bilingual Support**: Complete English and Spanish versions
- **Modern Design**: Dark theme with cyan/violet gradients and glass morphism effects
- **Responsive**: Mobile-first design with breakpoints for all devices
- **Performance Optimized**: Lightweight, fast-loading with optimized assets
- **SEO Friendly**: Complete meta tags, structured data, and sitemap
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Netlify Ready**: Configured for seamless Netlify deployment

## 📁 File Structure

```
keyorix-landing/
├── index.html              # English homepage
├── index.es.html           # Spanish homepage
├── privacy.html            # English privacy policy
├── privacy.es.html         # Spanish privacy policy
├── terms.html              # English terms of service
├── terms.es.html           # Spanish terms of service
├── 404.html                # Bilingual 404 page
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── _redirects              # Netlify redirects
├── netlify.toml            # Netlify configuration
├── css/
│   └── main.css            # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
└── assets/
    ├── logo.svg            # Keyorix logo
    ├── hero-illustration.svg # Hero section illustration
    ├── favicon.ico         # Site favicon
    └── og-keyorix.png      # Open Graph image
```

## 🎨 Design System

### Colors
- **Primary Background**: `#0B0E11` (deep near-black blue)
- **Primary Accent**: `#00C4FF` (cyan)
- **Secondary Accent**: `#6B73FF` (violet)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A0A0A0`
- **CTA Gradient**: `linear-gradient(90deg, #00C4FF 0%, #6B73FF 100%)`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: Regular (400), Medium (500), Bold (700)
- **Fallback**: System fonts for performance

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. **Connect Repository**:
   ```bash
   # Push to your Git repository
   git init
   git add .
   git commit -m "Initial Keyorix landing page"
   git remote add origin https://github.com/aibeshkov/KeyOrix
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Build settings are automatically configured via `netlify.toml`
   - Domain: Configure `keyorix.com` in Netlify DNS settings

3. **Environment Variables** (Optional):
   ```
   CONTACT_EMAIL=hello@keyorix.com
   GITHUB_REPO=https://github.com/aibeshkov/KeyOrix
   ```

### Manual Deployment

For other hosting providers:

```bash
# Upload all files to your web server root
# Ensure your server supports:
# - Custom 404 pages
# - URL redirects (via .htaccess or server config)
# - HTTPS with proper headers
```

## 🛠 Development

### Local Development

```bash
# Serve locally with Python
python3 -m http.server 8000

# Or with Node.js
npx serve .

# Or with PHP
php -S localhost:8000
```

### Testing

```bash
# Test all pages
open http://localhost:8000/index.html
open http://localhost:8000/index.es.html
open http://localhost:8000/privacy.html
open http://localhost:8000/terms.html

# Test forms (requires Netlify or form handler)
# Submit contact forms on both language versions
```

## 📧 Contact Forms

Forms are configured for **Netlify Forms**:

- **English Form**: `name="contact"`
- **Spanish Form**: `name="contact-es"`
- **Anti-spam**: Hidden honeypot field included
- **Success Handling**: URL parameter `?success=true`

### Form Fields
- Name / Nombre (required)
- Email / Correo (required)
- Company / Empresa (optional)
- Message / Mensaje (required)

## 🔍 SEO Configuration

### Meta Tags
- Complete Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs for each page
- Hreflang tags for bilingual SEO

### Structured Data
- Organization schema
- Website schema
- Breadcrumb navigation

### Performance
- Preloaded critical fonts
- Optimized images with proper alt tags
- Minified CSS and JavaScript
- Proper caching headers

## 🌐 Internationalization

### Language Switching
- Header language toggle (EN ⇄ ES)
- Maintains current page context
- Proper hreflang implementation
- URL structure: `/` (EN) and `/index.es.html` (ES)

### Content Translation
All content is fully translated:
- Navigation menus
- Hero sections
- Feature descriptions
- Legal pages
- Form labels and messages
- Error pages

## 🎯 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: Basic functionality on older browsers
- **Progressive Enhancement**: Advanced features for modern browsers

## 📊 Analytics Integration

Ready for analytics integration:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Plausible Analytics (Privacy-friendly alternative) -->
<script defer data-domain="keyorix.com" src="https://plausible.io/js/script.js"></script>
```

## 🔒 Security Features

- **Content Security Policy** ready
- **HTTPS enforcement** via redirects
- **XSS protection** headers
- **Clickjacking protection**
- **MIME type sniffing** prevention
- **Referrer policy** configuration

## 🚀 Performance Optimizations

- **Critical CSS** inlined
- **Font loading** optimized with `font-display: swap`
- **Image optimization** with proper formats
- **JavaScript** deferred and minified
- **Caching** headers configured
- **Gzip compression** enabled

## 📝 Content Management

### Updating Content
1. Edit HTML files directly for content changes
2. Update `sitemap.xml` with new pages
3. Modify `_redirects` for URL changes
4. Test both language versions

### Adding New Pages
1. Create English version: `page.html`
2. Create Spanish version: `page.es.html`
3. Add to navigation menus
4. Update sitemap and redirects
5. Add hreflang tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices/browsers
5. Submit a pull request

## 📄 License

This landing page is part of the Keyorix project. See the main repository for license information.

## 🆘 Support

- **Issues**: Report bugs or request features
- **Documentation**: Check the main Keyorix repository
- **Community**: Join our GitHub discussions

---

**Built with ❤️ for the Keyorix community**