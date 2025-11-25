# 🎮 Zoopi Landing Page

Landing page percutante pour promouvoir l'application mobile Zoopi et inciter au vote.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview
```

## 📦 Stack technique

- **React 19** - UI Library
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations fluides

## 🎨 Palette de couleurs

```css
Primary Teal: #1FB6A5
Secondary Coral: #FF6B6B
Soft Yellow: #FFD166
Navy Dark: #0B2545
Neutral Surface: #F6F8FB
Neutral Muted: #9AA6C1
```

## 📂 Structure

```
src/
├── components/
│   ├── Hero.jsx              # Section hero avec mockup vidéo
│   ├── CTASticky.jsx         # CTA sticky top/bottom
│   ├── ProblemSolution.jsx   # Problème → Solution
│   ├── FeaturesGrid.jsx      # Grille de features
│   ├── DemoVideo.jsx         # Démo vidéo détaillée
│   ├── KPIs.jsx              # KPIs & Roadmap timeline
│   ├── HowItWorks.jsx        # 3 étapes
│   ├── Roadmap.jsx           # Roadmap & Monétisation
│   ├── Recruitment.jsx       # Section recrutement
│   └── Footer.jsx            # Footer + CTA final
├── App.jsx                   # App principale
├── main.jsx                  # Entry point
└── index.css                 # Styles globaux
```

## 🎬 Assets requis

### Vidéos (à ajouter dans `/public`)

- `hero_loop.mp4` / `hero_loop.webm` - Vidéo loop pour le hero (720p, 2-6s)
- `demo_video.mp4` / `demo_video.webm` - Vidéo démo complète
- `poster.jpg` / `demo_poster.jpg` - Posters de fallback

### Images

- `og-image.jpg` - Image Open Graph (1200x630px)
- `favicon.svg` - Favicon

## ✨ Features principales

- ✅ **Scrollytelling narratif** avec sections full-viewport
- ✅ **Phone mockup avec vidéo intégrée** dans le Hero
- ✅ **Animations scroll-triggered** avec IntersectionObserver
- ✅ **CTA sticky** desktop (top-right) et mobile (bottom)
- ✅ **Parallax subtil** sur éléments décoratifs
- ✅ **Support prefers-reduced-motion**
- ✅ **Mobile-first responsive**
- ✅ **SEO optimisé** (meta tags, JSON-LD)

## 🎯 Optimisations

### Performance

- Lazy loading des images/vidéos
- Formats WebP + fallback
- Code splitting automatique (Vite)
- CSS optimisé (Tailwind purge)

### Accessibilité

- Contraste WCAG AA
- Navigation clavier
- Aria labels
- Focus visible

## 📱 Points de rupture

- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024px+

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

```bash
# Build
npm run build

# Glisser-déposer le dossier /dist sur Netlify
```

### GitHub Pages

```bash
# Ajouter dans vite.config.js:
base: '/zoopi-landing/'

# Build
npm run build

# Push le dossier dist vers gh-pages branch
```

## 📊 Analytics

Ajouter Google Analytics ou Plausible dans `index.html` :

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## 🎨 Personnalisation

### Couleurs

Modifier `tailwind.config.js` :

```js
colors: {
  'primary-teal': '#1FB6A5',
  'secondary-coral': '#FF6B6B',
  // ...
}
```

### Animations

Modifier les variants dans chaque composant ou ajouter dans `tailwind.config.js` :

```js
animation: {
  'custom': 'custom 2s ease-in-out infinite',
}
```

## 📝 TODO avant production

- [ ] Ajouter les vraies vidéos dans `/public`
- [ ] Remplacer le lien du formulaire de vote dans Footer.jsx
- [ ] Ajouter Google Analytics ID
- [ ] Générer favicon.svg avec le logo Zoopi
- [ ] Créer og-image.jpg (1200x630px)
- [ ] Tester sur iOS Safari et Android Chrome
- [ ] Lighthouse audit (Performance > 80, A11y > 90)

## 🐛 Troubleshooting

### Vidéo ne s'autoplay pas sur mobile

Les navigateurs mobiles bloquent l'autoplay. La vidéo doit être `muted` et `playsinline`.

### Animations saccadées

Ajouter `will-change: transform` aux éléments animés (déjà présent dans le CSS).

### Build échoue

Vérifier que toutes les dépendances sont installées :

```bash
npm install
```

## 📞 Contact

- **Luiza** - luiza.nobrega@epitech.eu
- **Axel** - axel1.huguet@epitech.eu

---

**Fait avec 💚 par l'équipe Zoopi**

_Projet étudiant Epitech MSc Nice - 2025_
