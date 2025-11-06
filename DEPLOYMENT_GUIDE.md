# 🚀 Deployment Guide

## Overview

Your Next.js portfolio can be deployed in multiple ways. Here are the best options:

---

## ✨ Option 1: Vercel (Recommended)

**Best for:** Zero configuration, automatic deployments, optimal performance

### Why Vercel?
- ✅ **Free forever** (hobby plan)
- ✅ **Made for Next.js** by the Next.js team
- ✅ **Automatic deployments** on every git push
- ✅ **Zero configuration** required
- ✅ **Custom domains** included
- ✅ **SSL certificates** automatic
- ✅ **Edge network** (fast worldwide)
- ✅ **Preview deployments** for pull requests

### Steps to Deploy:

1. **Push to GitHub:**
```bash
cd /Users/brian/Documents/bryhuang9.github.io/portfolio-new
git init
git add .
git commit -m "Initial commit - Portfolio"
git branch -M main
git remote add origin https://github.com/bryhuang9/your-repo-name.git
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign up" and use your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings ✨
   - Click "Deploy"
   - Wait 1-2 minutes ⏱️
   - **Done!** Your site is live! 🎉

3. **Your site will be at:**
```
https://your-project-name.vercel.app
```

4. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., brianhuang.dev)
   - Follow DNS instructions
   - SSL automatically configured!

### Future Updates:
- Just push to GitHub: `git push`
- Vercel automatically rebuilds and deploys! 🚀

---

## 🌐 Option 2: GitHub Pages (Static Export)

**Best for:** Free hosting, using GitHub's infrastructure

### Configuration Done ✅

I've already configured your project for GitHub Pages:
- ✅ `next.config.ts` - Static export enabled
- ✅ `.github/workflows/deploy.yml` - Auto-deployment workflow
- ✅ `package.json` - Export script added

### Steps to Deploy:

1. **Update basePath in next.config.ts:**

If deploying to `https://bryhuang9.github.io/portfolio-new/`:
```typescript
basePath: process.env.NODE_ENV === 'production' ? '/portfolio-new' : '',
```

If deploying to `https://bryhuang9.github.io/` (root):
```typescript
basePath: '',
```

2. **Push to GitHub:**
```bash
cd /Users/brian/Documents/bryhuang9.github.io/portfolio-new
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/bryhuang9/portfolio-new.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Click **Settings** → **Pages**
   - Under "Source": Select **GitHub Actions**
   - The workflow will automatically run!

4. **Wait for Deployment:**
   - Go to **Actions** tab
   - Watch the deployment process (1-3 minutes)
   - Once complete, your site is live! 🎉

5. **Your site will be at:**
```
https://bryhuang9.github.io/portfolio-new/
```

### Future Updates:
```bash
git add .
git commit -m "Update portfolio"
git push
```
GitHub Actions automatically rebuilds and deploys! 🚀

---

## 🔥 Option 3: Netlify

**Best for:** Alternative to Vercel, drag-and-drop deployment

### Steps:

1. **Build your site locally:**
```bash
npm run build
```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Drag and drop the `out` folder
   - Or connect GitHub repo for auto-deployments

**Benefits:**
- ✅ Free tier
- ✅ Custom domains
- ✅ SSL included
- ✅ Easy rollbacks

---

## ⚡ Comparison Table

| Feature | Vercel | GitHub Pages | Netlify |
|---------|--------|--------------|---------|
| **Cost** | Free | Free | Free |
| **Setup Difficulty** | ⭐ Easy | ⭐⭐ Medium | ⭐ Easy |
| **Performance** | ⭐⭐⭐ Excellent | ⭐⭐ Good | ⭐⭐⭐ Excellent |
| **Custom Domain** | ✅ Yes | ✅ Yes | ✅ Yes |
| **SSL** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Build Time** | Fast | Medium | Fast |
| **Auto Deploy** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Preview Deploys** | ✅ Yes | ❌ No | ✅ Yes |
| **Analytics** | ✅ Built-in | ❌ No | ✅ Built-in |
| **Best For** | Next.js | Simple static | Any framework |

---

## 🎯 My Recommendation

### **Use Vercel** because:
1. ⚡ **Zero configuration** - just connect GitHub and deploy
2. 🚀 **Fastest deployment** - under 1 minute
3. 💎 **Optimal for Next.js** - made by the same team
4. 📊 **Built-in analytics** - see your traffic
5. 🌍 **Global CDN** - fast everywhere
6. 🔄 **Preview deployments** - test before going live

---

## 📝 Step-by-Step: Deploy to Vercel Now

### 1. Create GitHub Repository:
```bash
cd /Users/brian/Documents/bryhuang9.github.io/portfolio-new
git init
git add .
git commit -m "🚀 Initial commit - Modern portfolio"
git branch -M main
```

### 2. Push to GitHub:
- Create new repo at github.com/new
- Name it: `portfolio` or `bryhuang9.github.io`
- Don't initialize with README
- Copy the git commands shown

```bash
git remote add origin https://github.com/bryhuang9/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Deploy to Vercel:
1. Open [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy" (no configuration needed!)
6. ⏱️ Wait 1-2 minutes
7. 🎉 **Done!** Click the link to see your live site

### 4. Share Your URL:
Your portfolio will be live at:
```
https://your-project-name.vercel.app
```

---

## 🔧 Troubleshooting

### Issue: "Module not found" errors
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Images not showing on GitHub Pages
**Solution:** Update image paths to use relative paths without leading slash if using basePath.

### Issue: Animations not smooth
**Solution:** This is normal on slower connections. Vercel's CDN will make it faster.

---

## 🎨 Custom Domain Setup (Optional)

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `brianhuang.dev`)
3. Add these DNS records at your domain provider:
   - **Type**: A
   - **Name**: @
   - **Value**: 76.76.21.21
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com

### For GitHub Pages:
1. Add CNAME file in your repo:
```bash
echo "yourdomain.com" > public/CNAME
```
2. Add A records at your domain provider:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

---

## 📊 After Deployment

### Monitor Your Site:
- **Vercel Dashboard**: Analytics, deployments, logs
- **GitHub Actions**: Build status and history
- **Google Analytics**: Add for detailed tracking

### Update Your Site:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Automatic deployment! 🚀

---

## ✅ Checklist Before Deploying

- [ ] All images are in `/public` folder
- [ ] Resume PDF is accessible
- [ ] All links work (test locally)
- [ ] Forms work (Formspree configured)
- [ ] Responsive on mobile (test with DevTools)
- [ ] No console errors
- [ ] Git repository initialized
- [ ] Pushed to GitHub
- [ ] Choose deployment platform
- [ ] Deploy! 🚀

---

## 🎉 You're Ready!

Your portfolio is production-ready. Choose your deployment method and go live!

**Recommended**: Start with **Vercel** for the easiest and fastest deployment.

Good luck! 🚀

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Pages: https://pages.github.com/
