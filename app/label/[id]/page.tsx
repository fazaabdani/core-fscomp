import Link from "next/link";
import { getUnit, statusStyle } from "../../lib/data";

export default async function LabelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const unit = getUnit(id);
  const url = `https://core.fscomp.id/unit/${unit.token}`;
  return (
    <main className="min-h-screen bg-[#081120] p-8 flex flex-col items-center justify-center gap-6">
      <div className="no-print flex gap-3">
        <Link href="/" className="px-4 py-2 rounded-xl bg-slate-800 text-white">Dashboard</Link>
        <button onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold">Print Label</button>
      </div>

      <section className="w-[360px] bg-white text-black rounded-[28px] p-5 shadow-2xl border border-slate-200">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] tracking-[0.28em] text-slate-500 font-black">FS COMP · CORE QC</p>
            <h1 className="text-6xl font-black mt-2 tracking-tight">{unit.id}</h1>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center font-black text-xl">QC</div>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-black leading-tight">{unit.model}</h2>
          <p className="text-slate-500 mt-1 text-sm">{unit.spec}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
          <Box title="Battery" value={unit.battery} />
          <Box title="SSD" value={unit.ssdHealth} />
          <Box title="LCD" value={unit.lcd} />
          <Box title="Keyboard" value={unit.keyboard} />
        </div>

        <div className={`mt-5 p-3 rounded-2xl text-center font-black ${statusStyle(unit.status)}`}>{unit.status}</div>
        <p className="text-xs text-slate-600 mt-3 min-h-8">{unit.note}</p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-slate-500 font-bold">QC DATE</p>
            <p className="text-sm font-bold">{unit.qcDate}</p>
            <p className="text-[10px] text-slate-500 font-bold mt-2">SCAN DETAIL</p>
            <p className="text-[10px] break-all text-slate-500">{url}</p>
          </div>
          <div className="w-24 h-24 bg-slate-100 rounded-xl flex items-center justify-center text-[10px] text-center text-slate-500 border border-slate-300">QR CODE<br/>generate<br/>next step</div>
        </div>
      </section>
    </main>
  );
}
function Box({ title, value }: { title: string; value: string }) { return <div className="rounded-2xl bg-slate-100 p-3"><p className="text-xs text-slate-500">{title}</p><p className="font-black mt-1">{value}</p></div>; }
