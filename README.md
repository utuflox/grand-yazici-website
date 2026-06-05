# Grand Yazıcı Club Turban Thermal - Luxury Hotel Website

Premium luxury hospitality website for Grand Yazıcı Club Turban Thermal, a 5-star all-inclusive resort in Marmaris, Turkey.

## 🏨 Project Overview

A world-class luxury hospitality website built with modern web technologies, featuring:

- **Premium Visual Design**: Cinematic photography, parallax scrolling, smooth animations
- **Responsive Architecture**: Mobile-first, works perfectly on all devices
- **Performance Optimized**: Fast loading, image optimization, accessibility compliant
- **SEO Ready**: Open Graph, Twitter Cards, Schema.org structured data
- **Luxury Aesthetic**: Minimalist design, generous whitespace, editorial typography

## 🛠 Technology Stack

### Framework & Core
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Full type safety and better DX

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Advanced animations and interactions
- **Custom CSS** - Global styles and utility classes

### Development
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 📁 Project Structure

```
grand-yazici-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── Navigation.tsx       # Sticky header with mobile menu
│   │   ├── HeroSection.tsx      # Full-screen hero with parallax
│   │   ├── RoomsSection.tsx     # Room showcase grid
│   │   ├── AmenitiesSection.tsx # Facilities & amenities
│   │   ├── DiningSection.tsx    # Restaurants & bars
│   │   ├── CTASection.tsx       # Call-to-action section
│   │   └── Footer.tsx           # Footer with links
│   ├── data/
│   │   └── hotel.ts            # Hotel content & metadata
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   └── styles/
│       └── globals.css         # Global styles & utilities
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies & scripts
```

## 🎨 Design System

### Color Palette
- **Primary Accent**: `#C09573` (Gold/Taupe) - CTAs, highlights
- **Secondary**: `#014A5D` (Deep Teal) - Overlays, important text
- **Accent Dark**: `#252525` (Charcoal) - Primary buttons, main text
- **Background**: `#FFFFFF` (White) - Generous whitespace
- **Text Secondary**: `#666666` (Gray) - Body text
- **Divider**: `#E8E8E8` (Light Gray) - Separators

### Typography
- **Headings**: Playfair Display (serif) - Editorial luxury feel
- **Body**: Poppins (sans-serif) - Modern, clean readability

### Font Sizes
```
H1: clamp(48px, 8vw, 72px)
H2: clamp(36px, 6vw, 56px)
H3: clamp(28px, 4vw, 40px)
Body: 16px (line-height: 1.7)
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1-column, full-width)
- **Tablet**: 640px - 1024px (2-column layouts)
- **Desktop**: 1024px - 1440px (3-column, full design system)
- **XL Desktop**: > 1440px (max-width container)

## ✨ Key Features

### 1. Hero Section
- Full-screen cinematic image
- Ken Burns zoom effect
- Parallax scrolling on scroll
- Gradient overlay
- Animated call-to-action buttons
- Scroll indicator animation

### 2. Navigation
- Sticky header with scroll detection
- Mobile hamburger menu
- Quick contact link
- Smooth scroll navigation
- Glass-morphism effect when scrolled

### 3. Rooms Section
- 6 room types: Standard, Superior, Family, Junior Suite, Marine Suite, Grand Suite
- Grid layout (responsive: 1→2→3 columns)
- Staggered entrance animations
- Hover effects with image zoom
- Amenities badges

### 4. Amenities Section
- 14+ facilities across 5 categories
- Icon grid with animations
- Statistics counters
- Smooth scroll reveal

### 5. Dining Section
- 6 restaurants + 4 bars
- Tab filtering (All/Restaurants/Bars)
- Image-heavy cards
- Layout animations

### 6. Call-to-Action Section
- Dark gradient background
- Large readable typography
- Multiple CTA buttons
- Contact information

### 7. Footer
- Links to all sections
- Social media
- Contact information
- Legal links

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

### Development

1. **Start development server**: `npm run dev`
2. Open [http://localhost:3000](http://localhost:3000)
3. Edit files in `src/` - changes auto-reload
4. Check `src/data/hotel.ts` for content edits

## 🎬 Animations & Interactions

### Framer Motion Effects
- **Fade In**: Elements fade in on scroll (0.8s duration)
- **Slide Up**: Elements slide up + fade (0.8s duration)
- **Scale In**: Elements scale from 0.95→1 on view
- **Parallax**: Background image moves with scroll offset
- **Ken Burns**: Subtle 8s zoom animation on hero
- **Stagger**: Sequential animations for grid items
- **Hover Effects**: Scale, opacity, shadow changes

### CSS Animations
- Smooth scroll behavior
- Focus states on interactive elements
- Selection styling
- Scrollbar styling (Chrome/Edge)

## 📊 SEO & Meta Tags

### Open Graph
- `og:title`, `og:description`, `og:image`
- `og:locale: tr_TR` (Turkish)
- `og:type: website`

### Twitter Card
- `twitter:card: summary_large_image`
- Custom title & description

### Structured Data
- Schema.org Hotel markup ready
- Canonical URLs
- Language meta tag: `tr-TR`

### Performance Meta
- `viewport`: Responsive design
- `theme-color`: Brand colors
- X-UA-Compatible, X-Content-Type-Options

## ♿ Accessibility (WCAG 2.1 AA)

- Semantic HTML (nav, section, article, main)
- ARIA labels on interactive elements
- Focus states on all buttons/links
- Color contrast compliance
- Image alt text
- Keyboard navigation support
- Touch-friendly button sizes (min 44x44px)

## 📦 Image Optimization

### Next.js Image Component
- Automatic format selection (AVIF, WebP, JPEG)
- Responsive image sizes
- Lazy loading
- Blur placeholder support
- Device-based image sizing

### Supported Image Sizes
- Device: 640px, 750px, 828px, 1080px, 1200px, 1920px, 2048px, 3840px
- Display: 16px, 32px, 48px, 64px, 96px, 128px, 256px, 384px

## 🔧 Configuration Files

### `next.config.ts`
- Image optimization settings
- Remote image domains
- Security headers
- Compression settings

### `tailwind.config.ts`
- Custom color palette
- Typography scale
- Spacing system
- Animation definitions

### `tsconfig.json`
- Strict type checking
- Module resolution
- JSX options
- Path aliases (`@/*`)

## 📝 Content Management

All content is managed in `src/data/hotel.ts`:
- Hotel information
- Room details (capacity, size, amenities)
- Restaurant/bar information
- Amenities list
- Navigation links

Update this file to modify:
- Hotel name, phone, location
- Room descriptions and images
- Dining venue details
- Facilities list
- Navigation menu items

## 🎯 Performance Targets

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

## 🌐 Supported Languages

- **Primary**: Turkish (tr-TR)
- Easy to add: English, German, Dutch (Poppins & Playfair support all Latin scripts)

## 📞 Contact Information

**Grand Yazıcı Club Turban Thermal**
- Phone: +90 252 417 73 12
- Location: Marmaris, Muğla, Turkey
- Booking: https://grandyazicihotels.platformeva.com/
- Tourism License: 12737

## 📄 License

All rights reserved © 2026 Grand Yazıcı Club Turban Thermal

## 🤝 Support

For issues or feature requests, please contact the development team.

---

Built with ❤️ for luxury hospitality excellence. Premium design meets modern web technology.
