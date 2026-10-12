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

## TMDB API Anahtarı

Yerel geliştirme için `react_project/.env.local` dosyasına `VITE_TMDB_API_KEY=...` ekleyin. Bu dosya Git tarafından yok sayılır ve repoya gönderilmemelidir. `VITE_` değişkenleri Vite tarafından tarayıcı paketine eklenir; bu yaklaşım yalnızca yerel geliştirme içindir ve yayımlanan sitede anahtarı ziyaretçilerden gizlemez.

Vercel'de dağıtım yaparken TMDB isteklerini sunucu tarafında tutmak için `react_project/api/movies.js` işlevini kullanın, Vercel Root Directory değerini `react_project` ayarlayın ve `TMDB_API_KEY` değerini Vercel Project Settings > Environment Variables içine ekleyin. Yerel proxy testi için `react_project` klasöründe `vercel dev` çalıştırın.

### Açığa çıkmış anahtarı döndürme

Eski anahtar herkese açık depoya gönderildiği için `.env.local` kullanmak geçmiş sızıntıyı geri almaz. Eski anahtar daha önce açıktı; mümkünse TMDB'den yenileyin ve yeni anahtarı yalnızca Vercel sunucu ortamına kaydedin. Anahtarı sohbet veya kaynak kod üzerinden paylaşmayın.

## Notlar

- Favoriler `localStorage` içinde saklanır.
- Sayfa yenilendiğinde favoriler korunur.
- Arama sonuçları TMDB üzerinden alınır.

## Lisans

Bu proje için özel bir lisans dosyası bulunmamaktadır. Kendi kullanımınız için düzenleyebilirsiniz.
