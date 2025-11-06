# Brian Huang's Modern Portfolio 🚀

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my work, skills, and professional experience in software development.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Works beautifully on all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Interactive Sections**: 
  - Hero section with animated background
  - About me with personal details
  - Project showcase with hover effects
  - Experience timeline with expandable details
  - Contact form with Formspree integration
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [Formspree](https://formspree.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bryhuang9/bryhuang9.github.io.git
cd portfolio-new
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
portfolio-new/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Experience timeline
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── public/             # Static assets
│   ├── pic.png
│   ├── davis.png
│   └── ...
└── package.json
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update components with your details
2. **Projects**: Modify the `projects` array in `components/Projects.tsx`
3. **Experience**: Update the `experiences` array in `components/Experience.tsx`
4. **Social Links**: Change URLs in `components/Hero.tsx` and `components/Contact.tsx`
5. **Images**: Replace images in the `public/` folder
6. **Colors**: Modify Tailwind classes or update `globals.css`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bryhuang9/bryhuang9.github.io)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Brian Huang - brian.yao.huang@gmail.com

Portfolio: [brianhuang.dev](https://brianhuang.dev)

GitHub: [@bryhuang9](https://github.com/bryhuang9)
