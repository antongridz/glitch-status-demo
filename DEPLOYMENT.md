# Deployment Guide

Quick reference for publishing this project to GitHub, Vercel, and npm.

## 🚀 Quick Start

### 1. GitHub

```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/glitch-status-demo.git
git branch -M main
git push -u origin main
```

### 2. Vercel

**Via GitHub (Recommended):**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy

**Via CLI:**
```bash
npm i -g vercel
vercel
```

### 3. npm Package

```bash
cd package
npm install
npm run build
npm login
npm publish
```

**Note:** Update package name in `package/package.json` if `glitch-status-animation` is taken.

## 📦 Project Structure

```
glitch-status-demo/
├── src/              # Next.js demo app
├── package/          # npm package (component only)
│   ├── src/
│   │   ├── StatusAnimation.tsx
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md         # Full documentation
```

## ✅ Checklist

- [ ] Code committed to git
- [ ] GitHub repository created and pushed
- [ ] Vercel deployment configured
- [ ] npm account created
- [ ] Package name checked for availability
- [ ] Package built and published to npm

