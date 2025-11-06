# 📋 Instrucțiuni de Rulare - Service Auto Best Cristinho

## ✅ To-Do List Final pentru Rularea Site-ului

### Pasul 1: Instalare Dependențe
```bash
npm install
```
sau
```bash
yarn install
```

**Ce face:** Instalează toate dependențele necesare (Next.js, React, TypeScript, Tailwind CSS, Framer Motion, etc.)

---

### Pasul 2: Rulare în Modul Dezvoltare
```bash
npm run dev
```
sau
```bash
yarn dev
```

**Ce face:** Pornește serverul de dezvoltare Next.js pe portul 3000

**Rezultat:** Site-ul va fi accesibil la adresa: **http://localhost:3000**

---

### Pasul 3: Testare Site-ul
1. Deschide browserul și navighează la `http://localhost:3000`
2. Testează toate paginile:
   - ✅ Acasă (`/`)
   - ✅ Despre noi (`/despre-noi`)
   - ✅ Servicii (`/servicii`)
   - ✅ Contact (`/contact`)
3. Verifică:
   - ✅ Animațiile funcționează
   - ✅ Butoanele sunt funcționale
   - ✅ Formularul de contact se deschide
   - ✅ Google Maps se încarcă
   - ✅ Design-ul este responsive (testează pe mobile)

---

### Pasul 4: Build pentru Producție (Opcional - pentru testare locală)
```bash
npm run build
```
sau
```bash
yarn build
```

**Ce face:** Construiește versiunea optimizată pentru producție

Apoi rulează:
```bash
npm start
```
sau
```bash
yarn start
```

---

## 🚀 Deployment (Punerea Site-ului Online)

### Opțiunea 1: Vercel (Recomandat - Gratuit)

1. **Instalează Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login în Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   Urmează instrucțiunile și site-ul va fi live în câteva minute!

**Avantaje:**
- ✅ Gratuit pentru proiecte personale
- ✅ HTTPS automat
- ✅ CDN global
- ✅ Deploy automat la fiecare push pe GitHub

---

### Opțiunea 2: Netlify

1. **Instalează Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build și deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

---

### Opțiunea 3: Hosting Tradițional (cPanel, etc.)

1. **Construiește aplicația:**
   ```bash
   npm run build
   ```

2. **Export static (dacă e necesar):**
   Adaugă în `next.config.js`:
   ```javascript
   output: 'export'
   ```

3. **Upload fișierele:**
   - Folderul `.next` (după build)
   - `package.json`
   - `next.config.js`
   - Toate fișierele din `app/` și `components/`

**Notă:** Pentru hosting tradițional, poate fi necesară configurarea Node.js pe server.

---

## 📁 Fișiere Importante pentru Hosting

Când uploadezi pe hosting, asigură-te că incluzi:

```
✅ package.json
✅ next.config.js
✅ tsconfig.json
✅ tailwind.config.ts
✅ postcss.config.js
✅ .eslintrc.json
✅ app/ (toate fișierele)
✅ components/ (toate fișierele)
✅ public/ (dacă există)
```

**NU uploadezi:**
- ❌ node_modules/ (se instalează pe server)
- ❌ .next/ (se generează la build)
- ❌ .git/ (dacă nu folosești Git)

---

## 🔧 Configurări Post-Deployment

### 1. Actualizează URL-ul în sitemap.ts
Editează `app/sitemap.ts` și înlocuiește:
```typescript
const baseUrl = 'https://www.bestcristinho.ro'
```
cu URL-ul real al site-ului tău.

### 2. Actualizează URL-ul în robots.ts
Editează `app/robots.ts` și înlocuiește:
```typescript
sitemap: 'https://www.bestcristinho.ro/sitemap.xml'
```
cu URL-ul real al site-ului tău.

### 3. Configurare Formular Contact (Opcional)
Pentru ca formularul să funcționeze complet, creează:
- `app/api/contact/route.ts` - endpoint pentru procesarea formularului
- Sau integrează cu un serviciu de email (SendGrid, Mailgun, etc.)

---

## 🎨 Personalizări Recomandate

1. **Imagini:**
   - Înlocuiește URL-urile Unsplash cu imagini proprii
   - Optimizează imaginile pentru web (folosește format WebP)

2. **Linkuri Sociale:**
   - Actualizează linkurile Facebook și Instagram din `components/Footer.tsx`

3. **Email:**
   - Actualizează adresa de email în toate locurile unde apare

4. **Culori:**
   - Personalizează culorile în `tailwind.config.ts` dacă dorești

---

## ⚠️ Probleme Comune și Soluții

### Eroare: "Module not found"
**Soluție:** Rulează `npm install` din nou

### Eroare: "Port 3000 already in use"
**Soluție:** Fie oprește procesul care folosește portul 3000, fie rulează:
```bash
npm run dev -- -p 3001
```

### Animațiile nu funcționează
**Soluție:** Verifică că `framer-motion` este instalat corect:
```bash
npm install framer-motion
```

### Stilurile Tailwind nu se aplică
**Soluție:** Verifică că `tailwind.config.ts` este configurat corect și rulează:
```bash
npm run dev
```

---

## 📞 Suport

Dacă întâmpini probleme:
1. Verifică că ai Node.js 18.x sau mai recent instalat
2. Verifică că toate dependențele sunt instalate
3. Șterge `node_modules` și `.next` și rulează `npm install` din nou

---

## ✅ Checklist Final

- [ ] Node.js instalat (v18+)
- [ ] Dependențele instalate (`npm install`)
- [ ] Site-ul rulează local (`npm run dev`)
- [ ] Toate paginile funcționează
- [ ] Design-ul este responsive
- [ ] Formularul de contact se deschide
- [ ] Google Maps se încarcă
- [ ] Animațiile funcționează
- [ ] URL-urile sunt actualizate pentru producție
- [ ] Site-ul este deployat online

---

**Succes cu site-ul! 🚗✨**

