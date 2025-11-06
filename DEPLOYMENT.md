# Deployment Guide for Brian's Portfolio

This guide covers multiple deployment options for your modern portfolio.

## Option 1: Vercel (Recommended) ⚡

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**:
   ```bash
   cd /Users/brian/Documents/bryhuang9.github.io/portfolio-new
   git init
   git add .
   git commit -m "Initial commit: Modern portfolio"
   git branch -M main
   git remote add origin https://github.com/bryhuang9/portfolio-v2.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live at `your-project.vercel.app`

3. **Custom Domain** (Optional):
   - In Vercel dashboard, go to Project Settings → Domains
   - Add your custom domain (e.g., brianhuang.dev)
   - Follow the DNS configuration instructions

## Option 2: GitHub Pages (Static Export) 📄

For GitHub Pages deployment with your custom domain:

### Steps:

1. **Update next.config.ts** for static export:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '',
     assetPrefix: '',
   };

   export default nextConfig;
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json** scripts:
   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint",
       "export": "next build",
       "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Repository**:
   - Go to your GitHub repository settings
   - Navigate to Pages section
   - Set source to `gh-pages` branch
   - Save

6. **Custom Domain**:
   - Add a `CNAME` file in the `public/` folder with your domain (e.g., `brianhuang.dev`)
   - Configure your domain's DNS:
     - Add an A record pointing to GitHub's IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Or add a CNAME record pointing to `bryhuang9.github.io`

## Option 3: Netlify 🎯

1. **Push to GitHub** (if not already done)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Custom Domain**:
   - In Netlify dashboard, go to Domain Settings
   - Add your custom domain
   - Follow DNS configuration instructions

## Option 4: Replace Existing Portfolio

To replace your current portfolio at bryhuang9.github.io:

### Steps:

1. **Backup Current Portfolio**:
   ```bash
   cd /Users/brian/Documents/bryhuang9.github.io
   mkdir ../portfolio-old
   cp -r . ../portfolio-old/
   ```

2. **Replace with New Portfolio**:
   ```bash
   # Remove old files (keep CNAME and .git)
   find . -maxdepth 1 ! -name 'CNAME' ! -name '.git' ! -name 'portfolio-new' ! -name '.' -exec rm -rf {} +
   
   # Move new portfolio files
   mv portfolio-new/* .
   mv portfolio-new/.* . 2>/dev/null || true
   rmdir portfolio-new
   ```

3. **Update for GitHub Pages** (Add to next.config.ts):
   ```typescript
   output: 'export',
   images: { unoptimized: true },
   ```

4. **Build and Deploy**:
   ```bash
   npm install
   npm run build
   
   # Copy build output to root
   cp -r out/* .
   
   # Commit and push
   git add .
   git commit -m "Update to modern Next.js portfolio"
   git push origin main
   ```

## Post-Deployment Checklist ✅

- [ ] Test all navigation links
- [ ] Verify contact form works (Formspree)
- [ ] Check mobile responsiveness
- [ ] Test dark mode
- [ ] Verify all images load correctly
- [ ] Check social media links
- [ ] Test resume download link
- [ ] Verify SEO meta tags (use [metatags.io](https://metatags.io))
- [ ] Test performance with Lighthouse
- [ ] Set up analytics (Google Analytics, Vercel Analytics, etc.)

## Troubleshooting 🔧

### Images not loading on GitHub Pages
- Ensure images are in the `public/` folder
- Use relative paths (e.g., `/pic.png` not `pic.png`)
- Set `images.unoptimized: true` in next.config.ts

### Contact form not working
- Verify Formspree endpoint URL in `components/Contact.tsx`
- Check browser console for errors
- Ensure form fields have correct `name` attributes

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

## Performance Optimization 🚀

After deployment, consider:

1. **Image Optimization**: Convert images to WebP format
2. **Font Optimization**: Already using next/font
3. **Analytics**: Add Vercel Analytics or Google Analytics
4. **SEO**: Add sitemap.xml and robots.txt
5. **Monitoring**: Set up error tracking (Sentry)

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- GitHub Pages Docs: https://docs.github.com/pages
