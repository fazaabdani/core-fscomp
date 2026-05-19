import Link from "next/link";
import { getUnit, statusStyle } from "../../lib/data";

export default async function UnitDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const unit = getUnit(id);
  return (
    <main className="min-h-screen bg-[#081120] text-white p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <Link href="/" className="text-cyan-300">← Dashboard</Link>
        <section className="bg-[#101b2d] border border-slate-800 rounded-3xl p-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="text-cyan-400 tracking-[0.35em] text-xs font-bold">CORE UNIT DETAIL</p>
              <h1 className="text-5xl font-black mt-3">Unit {unit.id}</h1>
              <h2 className="text-3xl font-bold mt-2">{unit.model}</h2>
              <p className="text-slate-400 mt-2">{unit.spec}</p>
            </div>
            <div className={`h-fit px-5 py-3 rounded-2xl font-black ${statusStyle(unit.status)}`}>{unit.status}</div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Info title="Batch" value={unit.batch} />
          <Info title="Supplier" value={unit.supplier} />
          <Info title="Tanggal Masuk" value={unit.masuk} />
          <Info title="Tempo PSI" value={unit.tempo} />
          <Info title="SSD Health" value={unit.ssdHealth} />
          <Info title="Battery" value={unit.battery} />
          <Info title="LCD" value={unit.lcd} />
          <Info title="Keyboard" value={unit.keyboard} />
        </section>

        <section className="bg-[#101b2d] border border-slate-800 rounded-3xl p-6">
          <h3 className="text-2xl font-bold">Catatan QC Awal</h3>
          <p className="text-slate-300 mt-3">{unit.note}</p>
          <p className="text-slate-500 mt-4 text-sm">QC oleh {unit.checker} · {unit.qcDate}</p>
        </section>

        <section className="bg-[#101b2d] border border-slate-800 rounded-3xl p-6">
          <h3 className="text-2xl font-bold">Histori QC Harian</h3>
          <div className="mt-4 space-y-3 text-sm">
            <Row date="18 Mei 2026" result="Normal" checker="Noval" />
            <Row date="19 Mei 2026" result="Normal" checker="Ammar" />
            <Row date="20 Mei 2026" result={unit.status === "RECHECK" ? "Ada problem baru" : "Normal"} checker="Yusril" />
          </div>
        </section>
      </div>
    </main>
  );
}
function Info({ title, value }: { title: string; value: string }) { return <div className="bg-[#101b2d] border border-slate-800 rounded-3xl p-5"><p className="text-slate-400 text-sm">{title}</p><p className="text-2xl font-bold mt-2">{value}</p></div>; }
function Row({ date, result, checker }: { date: string; result: string; checker: string }) { return <div className="flex justify-between gap-3 bg-[#0b1322] border border-slate-800 rounded-2xl p-4"><span>{date}</span><span className="text-slate-300">{result}</span><span className="text-slate-500">{checker}</span></div>; }
