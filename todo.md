# $CROC Protocol Website - Development Plan

## Design Guidelines

### Design References
- **Style**: Futuristic Web3 + 3D Glassmorphism + Meme Energy
- **Inspiration**: High-end DeFi protocols (Uniswap, Aave) + Meme coin fun (Dogecoin, Pepe)
- **Vibe**: "Meme + Billion Dollar Protocol"

### Color Palette
- Primary Background: #0a0a0a (Deep Black)
- Secondary Background: #0d1b0d (Deep Green-Black)
- Accent Primary: #00ff41 (Neon Lime/Matrix Green)
- Accent Secondary: #39ff14 (Bright Neon Green)
- Glass Effect: rgba(255, 255, 255, 0.05) with backdrop blur
- Text Primary: #ffffff (White)
- Text Secondary: #a0a0a0 (Light Gray)

### Typography
- Heading1: Orbitron font-weight 900 (56px) - Futuristic tech feel
- Heading2: Orbitron font-weight 700 (42px)
- Heading3: Orbitron font-weight 600 (32px)
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasis: Inter font-weight 600 (16px)
- Navigation: Orbitron font-weight 600 (18px)

### Key Component Styles
- **Glass Cards**: backdrop-blur-lg, border: 1px solid rgba(0,255,65,0.3), box-shadow: 0 8px 32px rgba(0,255,65,0.1)
- **Buttons**: Neon green gradient background, white text, 8px rounded, glow effect on hover
- **Hover Effects**: 3D tilt transform, scale 1.05, enhanced glow
- **Animations**: Smooth 0.3s transitions, floating keyframes, parallax scroll

### Layout & Spacing
- Hero section: Full viewport height with 3D elements
- Section padding: 100px vertical, 80px horizontal
- Card spacing: 32px gaps in grid layouts
- Border radius: 16px for cards, 8px for buttons

### Images to Generate
1. **hero-croc-3d.png** - 3D rendered crocodile with neon green glow, futuristic cyber style, floating in space (Style: 3d, dark background, neon accents)
2. **blockchain-grid-bg.jpg** - Abstract blockchain network grid with glowing nodes and connections, dark theme (Style: photorealistic, tech, dark mood)
3. **ai-brain-visual.png** - AI neural network visualization with green circuit patterns, tech aesthetic (Style: 3d, minimalist, neon green)
4. **team-placeholder.jpg** - Professional placeholder for team members, dark background with subtle tech pattern (Style: minimalist, dark, professional)

---

## File Structure

### HTML Pages (7 files)
1. index.html - Homepage with hero section
2. what-is.html - Vision, mission, AI+Blockchain logic
3. tokenomics.html - Token distribution and economics
4. roadmap.html - 3D timeline with phases
5. buy.html - Solana integration, chart, buy button
6. team.html - Team member cards

### CSS Files (2 files)
1. css/style.css - Global styles, reset, layout
2. css/premium.css - Glassmorphism, 3D effects, animations

### JavaScript Files (4 files)
1. js/main.js - Global functionality, navbar
2. js/animation.js - 3D tilt, parallax, GSAP animations
3. js/solana.js - Phantom wallet connection
4. js/chart.js - Chart iframe loading

---

## Development Tasks

1. ✅ Setup file structure - Create folders (css/, js/, assets/)
2. ✅ Generate images - Create all 4 hero images
3. ✅ Global CSS - style.css with reset, variables, layout
4. ✅ Premium CSS - Glassmorphism, 3D effects, glow animations
5. ✅ Navigation component - Global navbar for all pages
6. ✅ Homepage (index.html) - Hero with 3D croc, CTA buttons
7. ✅ What is page - Vision, mission, AI flow diagram
8. ✅ Tokenomics page - Supply info, pie chart placeholder
9. ✅ Roadmap page - 3D floating timeline
10. ✅ Buy page - Solana integration, chart embed
11. ✅ Team page - 4 member cards with 3D hover
12. ✅ JavaScript modules - Animation, wallet, chart logic
13. ✅ Footer component - Social links with glow effects
14. ✅ Final polish - Test all interactions, optimize performance
