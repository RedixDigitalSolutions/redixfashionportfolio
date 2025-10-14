# 🎨 Redix Digital Solutions - Fashion Portfolio

![Redix Digital Solutions](public/redix_logo.png)

> Transforming fashion brands through premium video content and digital marketing excellence.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://YOUR-USERNAME.github.io/redix-fashion-portfolio/)
[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Our Clients](#our-clients)
- [Contact](#contact)

## 🎯 About

A premium portfolio website showcasing Redix Digital Solutions' work in fashion video content creation and web development. This platform features an elegant, responsive design with interactive video galleries and project showcases.

Based in Tunisia, we serve clients worldwide with cutting-edge digital marketing solutions, specializing in:

- Fashion & Clothing Brand Video Production
- E-commerce Website Development
- Social Media Content Creation
- Digital Marketing Strategy

## ✨ Features

- 🎥 **Interactive Video Gallery** - Display videos with custom aspect ratios (9:16 reels, 16:9 landscape, 1:1 square)
- 🎮 **Video Controls** - Play/pause functionality with smooth animations
- 🔍 **Advanced Filtering** - Filter videos by client and content type
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎨 **Premium Design** - Gradient backgrounds with purple/blue theme
- 🚀 **Fast Performance** - Built with Vite for lightning-fast load times
- 🌐 **Web Projects Showcase** - Display of developed e-commerce platforms
- 📊 **Analytics Ready** - Track user engagement and interactions

## 🛠️ Tech Stack

### Frontend

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **Lucide React** - Icon library
- **React Icons** - Additional icons (FontAwesome)

### Tools & Libraries

- **react-social-media-embed** - Social media embedding (if needed)
- **ESLint** - Code linting
- **Git** - Version control

### Video Handling

- Native HTML5 video player
- Custom aspect ratio handling
- Intersection Observer API for lazy loading

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
git clone https://github.com/YOUR-USERNAME/redix-fashion-portfolio.git
cd redix-fashion-portfolio


2. **Install dependencies**
npm install


3. **Add your videos**
- Place all video files in the `public/videos/` directory
- Update `src/data/data.js` with your video information

4. **Add your logo**
- Place your logo as `redix_logo.png` in the `public/` directory

5. **Start development server**
npm run dev

6. **Open your browser**
- Navigate to `http://localhost:5173`

### Build for Production

npm run build

The production build will be created in the `dist/` directory.

### Preview Production Build

npm run preview

## 📁 Project Structure

redix-fashion-portfolio/
├── public/
│ ├── videos/ # Video files
│ └── redix_logo.png # Company logo
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Navbar.module.css
│ │ ├── Hero.jsx
│ │ ├── Hero.module.css
│ │ ├── VideoCard.jsx
│ │ ├── VideoCard.module.css
│ │ ├── VideoGallery.jsx
│ │ ├── VideoGallery.module.css
│ │ ├── WebsiteShowcase.jsx
│ │ ├── WebsiteShowcase.module.css
│ │ ├── Footer.jsx
│ │ └── Footer.module.css
│ ├── data/
│ │ ├── data.js # Video portfolio data
│ │ └── links.js # Website portfolio data
│ ├── App.jsx
│ ├── App.module.css
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md



## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
export default defineConfig({
plugins: [react()],
base: '/redix-fashion-portfolio/' // Your repo name
})

2. **Install gh-pages**
npm install gh-pages --save-dev

3. **Add deploy script to `package.json`**
{
"scripts": {
"deploy": "npm run build && gh-pages -d dist"
}
}


4. **Deploy**
npm run deploy


5. **Configure GitHub Pages**
- Go to repository Settings → Pages
- Select `gh-pages` branch
- Save

Your site will be live at: `https://YOUR-USERNAME.github.io/redix-fashion-portfolio/`

## 👥 Our Clients

### Fashion Video Content
- **Nude Style Marsa** - Fashion boutique in Tunisia
- **B The Label Bali** - Bali-based fashion brand
- **Stripes ME** - Middle Eastern fashion retailer
- **Roar Fashion** - Contemporary fashion brand

### Web Development Projects
- **[Drest](https://www.drest.tn/)** - E-commerce platform for fashion and lifestyle
- **[Noon Clo](https://noonclo.com/)** - Modern clothing brand website
- **[Black Haze](https://www.black-haze.com/)** - Premium fashion brand online store
- **[Chill&Lit](https://chillandlit.tn/)** - N°1 De La Mode En Ligne En Tunisie
- **[Moudda](https://www.moudda.com/)** - #1 Site de Mode & Beauté en Tunisie

## 📞 Contact

**Redix Digital Solutions**

- 🌐 Website: [redixsolutions.pro](https://redixsolutions.pro/)
- 📧 Email: contact@redixsolutions.pro
- 📱 Phone: (+216) 21-999-898
- 📍 Location: Smart Technopark Manouba, Tunisia


de
### Social Media
- [Instagram](https://www.instagram.com/redixdigitalsolutions/)
- [Facebook](https://www.facebook.com/profile.php?id=61560535962106)
- [LinkedIn](https://www.linkedin.com/company/redix-digital-solutions/posts/?feedView=all)
- [WhatsApp](https://wa.me/21692861655)

## 📄 License

Copyright © 2025 Redix Digital Solutions. All rights reserved.

---

**Built with ❤️ by Redix Digital Solutions**

*Transforming businesses through innovative digital solutions*