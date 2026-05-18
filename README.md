# CORE FS COMP

Sistem awal manajemen unit laptop FS Comp.

## Fitur MVP
- Dashboard monitoring unit
- Input unit masuk
- Detail unit via QR
- Form QC harian
- Halaman label print modern
- Batch PSI dan tempo observasi 14 hari

## Jalankan lokal/server
```bash
npm install
npm run dev
```

Buka: http://localhost:3000

## Deploy di Coolify
- Build command: `npm run build`
- Start command: `npm run start`
- Port: `3000`
- Domain: `core.fscomp.id`

## Catatan
Versi ini masih memakai data dummy di `app/lib/data.ts`. Nanti tahap berikutnya disambungkan ke database PostgreSQL/Prisma.
