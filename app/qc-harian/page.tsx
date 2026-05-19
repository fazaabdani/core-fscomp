import Link from "next/link";
import { units } from "../lib/data";

export default function QcHarianPage() {
  return (
    <main className="min-h-screen bg-[#081120] text-white p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link href="/" className="text-cyan-300">← Dashboard</Link>
        <section className="bg-[#101b2d] border border-slate-800 rounded-3xl p-6">
          <h1 className="text-4xl font-black">QC Harian</h1>
          <p className="text-slate-400 mt-2">Isi perubahan kondisi unit setiap pagi. Fokus: ada perubahan atau masih memenuhi standar minimal lolos.</p>
        </section>
        <section className="bg-[#101b2d] border border-slate-800 rounded-3xl p-6 space-y-4">
          <Field label="Nomor Unit"><select className="input">{units.map((u) => <option key={u.id}>{u.id} - {u.model}</option>)}</select></Field>
          <Field label="Nama Checker"><input className="input" placeholder="Nama anak magang" /></Field>
          <Field label="Kondisi Hari Ini"><select className="input"><option>Normal</option><option>Ada Catatan</option><option>Problem Baru</option><option>Belum Dicek</option></select></Field>
          <Field label="Masih Memenuhi Standar Minimal Lolos?"><select className="input"><option>Masih Lolos</option><option>Lolos Dengan Catatan</option><option>Perlu Cek Ulang</option><option>Tidak Lolos / Hold</option></select></Field>
          <Field label="Catatan Perubahan"><textarea className="input min-h-32" placeholder="Contoh: WiFi kadang hilang, baterai drop cepat, layar flicker, dll." /></Field>
          <button className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black">Simpan QC Harian</button>
        </section>
      </div>
      <style>{`.input{width:100%;background:#0b1322;border:1px solid #334155;border-radius:16px;padding:14px;color:white}`}</style>
    </main>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><p className="text-slate-300 mb-2 font-semibold">{label}</p>{children}</label>; }
