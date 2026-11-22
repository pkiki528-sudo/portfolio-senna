# Kiki Pratama × senna.dev

Personal portfolio untuk **Kiki Pratama**, developer di balik **senna.dev**.

## Stack

- Next.js 15.5 (React 18)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm ci
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Requires Node.js >=20.9.0.

## Production check

```bash
npm run lint
npm run typecheck
npm audit
npm run build
npm start
```

## Browser regression check

With the production server running, test navigation at 320, 375, 768, and 1440px:

```bash
python -m pip install playwright
python -m playwright install chromium  # Skip if Google Chrome is already installed.
python scripts/smoke.py http://127.0.0.1:3000
```

PostCSS is overridden to the patched 8.5 release because Next.js 15 bundles an older vulnerable version.

## Project links

- Telegram: https://t.me/sennasite
- SennMarket: https://sennmarket.web.id
- SennPayy: https://sennpayy.biz.id

## Asset

`public/avatar.jpg` adalah avatar visual untuk bagian Hero.

## Security

JANGAN kirim/commit `.env` asli karena berisi token dan API key.

Firebase dan SendGrid belum dikonfigurasi; keduanya dapat ditambahkan melalui environment variables saat form kontak/backend diperlukan.
