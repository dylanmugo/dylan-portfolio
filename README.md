# Dylan Mugo Portfolio

A clean, professional portfolio website built with Next.js and ready for Vercel deployment.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Files
- Put your profile photo in `/public/profile.jpg`
- Put your CV in `/public/Dylan_Mugo-CV.pdf`

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy to Vercel

### Option A: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/dylanmugo/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Option B: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

---

## 📁 Project Structure

```
dylan-portfolio/
├── app/
│   ├── globals.css    # All styles
│   ├── layout.js      # HTML wrapper
│   └── page.js        # Main page content
├── public/
│   ├── profile.jpg    # Your photo (add this)
│   └── Dylan_Mugo-CV.pdf  # Your CV (add this)
├── package.json
├── next.config.js
└── README.md
```

---

## ✏️ How to Edit

### Change Text
Edit `app/page.js` - all content is there in plain HTML/JSX

### Change Colors
Edit `app/globals.css`:
- `#e65c00` - Orange accent
- `#fdf6e3` - Cream background
- `#1a1a1a` - Dark text/cards

### Add More Projects
Copy a project card block in `page.js` and update the content

---

## 🔗 Update Your Links

In `app/page.js`, replace:
- `https://www.linkedin.com/in/dylan-mugo` → Your LinkedIn
- `https://github.com/dylanmugo` → Your GitHub
- `Dylanmugo15@icloud.com` → Your email

---

## 📱 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Fast loading (Next.js optimized)
- ✅ SEO ready
- ✅ Easy to customize
- ✅ Vercel-ready deployment
