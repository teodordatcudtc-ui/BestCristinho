# Service Auto Best Cristinho - Site Web Profesional

Site web complet și profesional pentru Service Auto Best Cristinho din Pitești, construit cu Next.js 14, React, TypeScript, Tailwind CSS și Framer Motion.

## 🚀 Caracteristici

- ✅ Design premium și profesional
- ✅ Animații fluide și micro-interacțiuni
- ✅ SEO optimizat complet
- ✅ Responsive design pentru toate dispozitivele
- ✅ Pagini: Acasă, Despre noi, Servicii, Contact
- ✅ Formular de contact funcțional
- ✅ Google Maps integrat
- ✅ Slider pentru testimonials
- ✅ Tranziții fluide între pagini

## 📋 Cerințe

- Node.js 18.x sau mai recent
- npm sau yarn

## 🛠️ Instalare

1. **Instalează dependențele:**
   ```bash
   npm install
   ```
   sau
   ```bash
   yarn install
   ```

2. **Rulează serverul de dezvoltare:**
   ```bash
   npm run dev
   ```
   sau
   ```bash
   yarn dev
   ```

3. **Deschide browserul:**
   Navighează la [http://localhost:3000](http://localhost:3000)

## 📦 Build pentru producție

1. **Construiește aplicația:**
   ```bash
   npm run build
   ```
   sau
   ```bash
   yarn build
   ```

2. **Rulează versiunea de producție:**
   ```bash
   npm start
   ```
   sau
   ```bash
   yarn start
   ```

## 📁 Structura Proiectului

```
best-cristinho/
├── app/
│   ├── contact/          # Pagina de contact
│   ├── despre-noi/       # Pagina despre noi
│   ├── servicii/         # Pagina servicii
│   ├── globals.css       # Stiluri globale
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Pagina principală
├── components/
│   ├── CTA.tsx           # Componentă call-to-action
│   ├── ContactForm.tsx   # Formular de contact
│   ├── Footer.tsx        # Footer
│   ├── Header.tsx        # Header/Navigation
│   ├── Hero.tsx          # Banner principal
│   ├── ServiceCard.tsx   # Card pentru servicii
│   ├── ServicesPreview.tsx # Preview servicii
│   └── Testimonials.tsx  # Testimonials slider
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🌐 Deployment

### Vercel (Recomandat)

1. Instalează Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Alte platforme

Pentru deployment pe alte platforme (Netlify, AWS, etc.), urmează instrucțiunile specifice platformei pentru aplicații Next.js.

## 📝 Note importante

- Formularul de contact este configurat pentru simulare. Pentru funcționalitate completă, adaugă un endpoint API în `app/api/contact/route.ts`
- Imaginile folosesc Unsplash. Pentru producție, înlocuiește cu imagini proprii
- Actualizează linkurile sociale din Footer cu linkurile reale

## 🎨 Personalizare

- **Culori:** Editează `tailwind.config.ts` pentru a schimba paleta de culori
- **Conținut:** Actualizează textele din componente
- **Imagini:** Înlocuiește URL-urile Unsplash cu imagini proprii

## 📞 Contact

Service Auto Best Cristinho
- Telefon: 0720 011 400
- Adresă: Strada Constantin Dobrogeanu Gherea nr 1, Pitești 117045
- Email: contact@bestcristinho.ro

