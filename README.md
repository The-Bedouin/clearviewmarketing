# O-K Consulting Hero Section Clone

A Next.js clone of the O-K Consulting website's hero section, featuring modern design patterns, responsive layout, and interactive elements.

## 🎯 Project Overview

This project replicates the hero section of the O-K Consulting website (https://www.o-kconsulting.com/) using Next.js 15, TypeScript, and Tailwind CSS. The clone focuses on:

- **Navigation Architecture**: Fixed header with smooth hover effects and mobile-responsive hamburger menu
- **Hero Section**: Animated content with staggered fade-in effects and gradient text
- **Client Logo Carousel**: Interactive grid layout with hover effects and pagination
- **Responsive Design**: Mobile-first approach with breakpoint-specific optimizations

## 🏗️ Architecture Analysis

### Core Components Structure:
1. **Navigation Header**
   - Fixed positioning with backdrop blur
   - Desktop navigation with underline hover effects
   - Mobile hamburger menu with slide-down animation
   - CTA button integration

2. **Hero Section**
   - Badge components with animated elements
   - Large typography with gradient text effects
   - Dual CTA buttons with hover animations
   - Staggered fade-in animations

3. **Client Logo Carousel**
   - Responsive grid layout
   - Interactive hover effects
   - Pagination controls
   - Placeholder client logos

### Technical Patterns:
- **State Management**: React hooks for mobile menu toggle
- **Styling Methodology**: Tailwind CSS with custom animations
- **Component Structure**: Single-page component with semantic HTML
- **Interactive Behaviors**: Hover effects, transitions, and micro-interactions

## 🚀 Features

### ✅ Implemented:
- [x] Responsive navigation with mobile menu
- [x] Animated hero section with staggered effects
- [x] Client logo carousel with pagination
- [x] Hover effects and micro-interactions
- [x] Mobile-first responsive design
- [x] Custom CSS animations
- [x] Gradient text effects
- [x] Smooth scrolling

### 🎨 Design Elements:
- **Typography**: Inter font family with various weights
- **Color Scheme**: Blue primary (#3B82F6) with gray accents
- **Animations**: Fade-in, hover lift, and pulse effects
- **Layout**: Centered content with max-width containers
- **Spacing**: Consistent padding and margins using Tailwind scale

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (Google Fonts)
- **Animations**: CSS keyframes and Tailwind utilities
- **Icons**: Heroicons (SVG)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Desktop**: > 768px (lg)
- **Large Desktop**: > 1024px (xl)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd o-k-consulting-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Implementation Details

### Navigation Flow:
- Fixed header with backdrop blur effect
- Smooth underline animations on hover
- Mobile hamburger menu with state management
- Responsive breakpoint handling

### Component Structure:
- Single page component with semantic sections
- Conditional rendering for mobile menu
- Array mapping for dynamic content
- Inline styles for animation delays

### Styling Methodology:
- Utility-first CSS with Tailwind
- Custom CSS animations and keyframes
- Responsive design patterns
- Consistent spacing and typography

### Interactive Behaviors:
- Hover lift effects on buttons and cards
- Color transitions on interactive elements
- Scale animations on pagination dots
- Smooth scrolling behavior

## 🔧 Customization

### Colors:
Update the color scheme by modifying Tailwind classes:
- Primary: `blue-600`, `blue-700`
- Secondary: `gray-600`, `gray-700`
- Background: `white`, `gray-50`

### Animations:
Custom animations are defined in `globals.css`:
- `fadeInUp`: Staggered content reveal
- `hover-lift`: Button and card hover effects
- `animate-pulse`: Badge indicator animation

### Typography:
Font family is set to Inter in `globals.css` with various weights:
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

## 📄 License

This project is for educational purposes and demonstrates modern web development techniques.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: This is a clone for educational purposes. All design credits go to O-K Consulting (https://www.o-kconsulting.com/).
