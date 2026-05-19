import Link from "next/link";
import { units, statusStyle } from "./lib/data";

export default function Home() {
  const verified = units.filter((u) => u.status === "VERIFIED").length;
  const recheck = units.filter((u) => u.status === "RECHECK").length;
  const notes = units.filter((u) => u.status === "WITH_NOTES").length;

  return (
    <main className="min-h-screen bg-[#081120] text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-cyan-400 tracking-[0.35em] text-xs font-bold">FS COMP INTERNAL SYSTEM</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-2">CORE FS COMP</h1>
            <p className="text-slate-400 mt-2">Manajemen laptop second, QC awal, QC harian, dan observasi tempo PSI.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/units/new" className="px-5 py-3 rounded-2xl bg-cyan-500 text-black font-bold">+ Unit Masuk</Link>
            <Link href="/qc-harian" className="px-5 py-3 rounded-2xl border border-slate-700 bg-[#101b2d]">QC Harian</Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <Stat title="Total Unit Observasi" value={units.length.toString()} />
          <Stat title="Verified" value={verified.toString()} color="text-emerald-400" />
          <Stat title="With Notes" value={notes.toString()} color="text-yellow-300" />
          <Stat title="Recheck" value={recheck.toString()} color="text-orange-400" />
        </section>

        <section className="bg-[#101b2d] border border-slate-800 rounded-3xl p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Monitoring Unit CORE</h2>
              <p className="text-slate-400 mt-1">Daftar unit dalam observasi 14 hari tempo PSI.</p>
            </div>
            <Link href="/batch-psi" className="text-cyan-300 hover:text-cyan-200">Lihat Batch PSI →</Link>
          </div>

          <div className="space-y-4">
            {units.map((unit) => (
              <div key={unit.id} className="bg-[#0b1322] border border-slate-800 rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-black flex items-center justify-center text-2xl font-black">{unit.id}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{unit.model}</h3>
                    <p className="text-slate-400 mt-1">{unit.spec}</p>
                    <div className="flex flex-wrap gap-2 mt-3 text-xs">
                      <Tag label={`SSD ${unit.ssdHealth}`} />
                      <Tag label={`Battery ${unit.battery}`} />
                      <Tag label={`Tempo ${unit.sisaTempo}`} />
                      <Tag label={unit.batch} />
                    </div>
                    <p className="text-slate-300 text-sm mt-3">{unit.note}</p>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-3">
                  <div className={`px-4 py-2 rounded-xl font-bold text-sm ${statusStyle(unit.status)}`}>{unit.status}</div>
                  <div className="flex gap-2">
                    <Link href={`/unit/${unit.id}`} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm">Detail</Link>
                    <Link href={`/label/${unit.id}`} className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-sm">Label</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ title, value, color = "text-white" }: { title: string; value: string; color?: string }) {
  return <div className="bg-[#101b2d] border border-slate-800 rounded-3xl p-6"><p className="text-slate-400 text-sm">{title}</p><h2 className={`text-5xl font-black mt-3 ${color}`}>{value}</h2></div>;
}
function Tag({ label }: { label: string }) {
  return <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">{label}</span>;
}
