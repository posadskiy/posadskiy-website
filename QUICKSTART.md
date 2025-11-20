# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

Output will be in the `build/` directory.

## 📝 Common Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Check for linting errors
npm run format       # Format code with Prettier
```

## 🎨 Customization

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#a855f7',  // Change to your accent color
    // ...
  }
}
```

### Add New Project
Edit `src/constants/projects.ts`:
```typescript
export const PROJECTS = {
  // ...existing projects
  YourNewProject: {
    name: 'Your Project Name',
    icon: 'your-icon.png',
    description: 'Your description',
  },
}
```

Add icon to `public/project-icons/your-icon.png`

### Update Personal Info
- Main page text: `src/pages/MainPage.tsx`
- Social links: `src/constants/links.ts`
- Services: `src/pages/ServicesPage.tsx`

### Change EmailJS Settings
Update in `src/pages/ContactPage.tsx`:
```typescript
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  params,
  'YOUR_PUBLIC_KEY'
);
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 🆘 Need Help?

Check these files for detailed information:
- `README.md` - Full documentation
- `MIGRATION_NOTES.md` - Migration details
- `package.json` - Dependencies and scripts

