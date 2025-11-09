# 📸 Ghid pentru Adăugarea Pozelor

## 📁 Unde să adaugi pozele

Toate pozele trebuie adăugate în folderul: **`public/images/`**

---

## 🖼️ Poze pentru Hero (Banner Principal)

### Fișier necesar:
- **Nume:** `hero.jpg` sau `hero.png`
- **Locație:** `public/images/hero.jpg`

### Recomandări:
- **Dimensiuni:** 1920x1080px sau mai mare (16:9)
- **Format:** JPG sau PNG
- **Conținut:** Imagine cu mașini, service auto, sau atelier
- **Calitate:** Înaltă (pentru banner principal)

---

## 🛠️ Poze pentru Servicii

Adaugă câte o poză pentru fiecare serviciu:

### 1. Mecanică Ușoară și Întreținere
- **Nume:** `mecanica-usoara.jpg` sau `mecanica-usoara.png`
- **Locație:** `public/images/mecanica-usoara.jpg`
- **Conținut:** Schimb ulei, filtre, întreținere

### 2. Reparații Motoare
- **Nume:** `reparatii-motoare.jpg` sau `reparatii-motoare.png`
- **Locație:** `public/images/reparatii-motoare.jpg`
- **Conținut:** Motoare, reparații mecanice

### 3. Sistem Electric și Electronic
- **Nume:** `sistem-electric.jpg` sau `sistem-electric.png`
- **Locație:** `public/images/sistem-electric.jpg`
- **Conținut:** Diagnosticare, sisteme electrice, computere auto

### 4. Tinichigerie și Vopsitorie
- **Nume:** `tinichigerie.jpg` sau `tinichigerie.png`
- **Locație:** `public/images/tinichigerie.jpg`
- **Conținut:** Caroserie, vopsire, tinichigerie

### 5. Alte Servicii Specializate
- **Nume:** `alte-servicii.jpg` sau `alte-servicii.png`
- **Locație:** `public/images/alte-servicii.jpg`
- **Conținut:** Servicii generale, atelier

### Recomandări pentru pozele serviciilor:
- **Dimensiuni:** 1200x800px sau mai mare
- **Format:** JPG sau PNG
- **Calitate:** Înaltă
- **Orientare:** Orizontală (landscape)

---

## 📋 Lista completă de fișiere necesare

```
public/images/
├── hero.jpg (sau hero.png)                    ← Banner principal
├── mecanica-usoara.jpg                        ← Serviciu 1
├── reparatii-motoare.jpg                      ← Serviciu 2
├── sistem-electric.jpg                         ← Serviciu 3
├── tinichigerie.jpg                           ← Serviciu 4
└── alte-servicii.jpg                          ← Serviciu 5
```

---

## ✅ După ce adaugi pozele

După ce ai adăugat pozele cu numele corecte, site-ul le va încărca automat. Nu este nevoie să modifici codul!

---

## 💡 Sfaturi

1. **Optimizează pozele** înainte de a le adăuga (reduce dimensiunea pentru încărcare mai rapidă)
2. **Folosește format JPG** pentru poze cu multe detalii (mai mic decât PNG)
3. **Folosește format PNG** pentru poze cu fundal transparent sau logo-uri
4. **Asigură-te că pozele sunt de calitate** dar nu prea mari (max 2-3MB per poză)

---

## 🔄 Dacă vrei să schimbi numele pozelor

Dacă vrei să folosești alte nume pentru poze, trebuie să modifici:
- `components/Hero.tsx` - pentru hero
- `app/servicii/page.tsx` - pentru pozele serviciilor
- `app/servicii/[slug]/page.tsx` - pentru pozele detaliate servicii

