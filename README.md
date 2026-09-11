# React Movie Project

Bu proje, TMDB API kullanarak popüler filmleri listeleyen, arama yapan ve favorilere ekleme özelliği sunan bir React + Vite uygulamasıdır.

## Özellikler

- Popüler filmleri listeleme
- Film arama
- Favorilere ekleme / çıkarma
- Favori filmleri ayrı sayfada görüntüleme
- `localStorage` ile favori verilerinin saklanması
- React Router ile sayfa yönlendirmeleri

## Teknolojiler

- React
- Vite
- React Router DOM
- TMDB API

## Proje Yapısı

```text
react_project/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ assets/
│  ├─ components/
│  │  ├─ MovieCard.jsx
│  │  └─ Navbar.jsx
│  ├─ contexts/
│  │  └─ MovieContext.jsx
│  ├─ css/
│  ├─ pages/
│  │  ├─ Favorites.jsx
│  │  └─ Home.jsx
│  └─ services/
│     └─ api.js
└─ README.md
```

## Kurulum

1. Depoyu klonlayın
2. Proje klasörüne girin
3. Bağımlılıkları yükleyin

```bash
npm install
```

## Çalıştırma

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Uygulama varsayılan olarak şu adreste çalışır:

```text
http://localhost:5173/
```

## Build

Production build almak için:

```bash
npm run build
```

Build çıktısı `dist` klasörüne yazılır.

## Deployment

Bu proje Vite tabanlı olduğu için Vercel veya Netlify üzerinde kolayca yayınlanabilir.

### Vercel için önerilen ayarlar

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Netlify için önerilen ayarlar

- Build Command: `npm run build`
- Publish Directory: `dist`

## API Anahtarı

Bu proje şu an TMDB API anahtarını doğrudan kod içinde kullanıyor. Yayınlama yapmadan önce güvenlik açısından `VITE_TMDB_API_KEY` gibi bir ortam değişkeni kullanmanız önerilir.

Örnek kullanım:

```js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

## Notlar

- Favoriler `localStorage` içinde saklanır.
- Sayfa yenilendiğinde favoriler korunur.
- Arama sonuçları TMDB üzerinden alınır.

## Lisans

Bu proje için özel bir lisans dosyası bulunmamaktadır. Kendi kullanımınız için düzenleyebilirsiniz.
