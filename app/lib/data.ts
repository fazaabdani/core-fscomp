export type UnitStatus = "VERIFIED" | "WITH_NOTES" | "RECHECK" | "HOLD" | "RETUR" | "SOLD";

export const units = [
  {
    id: "1A",
    token: "X28A92",
    batch: "PSI-20260518",
    supplier: "PSI",
    model: "ThinkPad X280",
    processor: "i5 Gen 8",
    ram: "8GB",
    ssd: "256GB SSD",
    spec: "i5 Gen 8 • 8GB • 256 SSD",
    status: "VERIFIED" as UnitStatus,
    battery: "92%",
    ssdHealth: "96%",
    lcd: "OK",
    keyboard: "OK",
    checker: "Ammar",
    qcDate: "18 Mei 2026",
    masuk: "18 Mei 2026",
    tempo: "1 Juni 2026",
    sisaTempo: "11 Hari",
    note: "Body baret halus",
  },
  {
    id: "1B",
    token: "HPB81W",
    batch: "PSI-20260518",
    supplier: "PSI",
    model: "HP Probook 440 G6",
    processor: "i5-8265U",
    ram: "8GB",
    ssd: "240GB SSD",
    spec: "i5-8265U • 8GB • 240 SSD",
    status: "RECHECK" as UnitStatus,
    battery: "78%",
    ssdHealth: "81%",
    lcd: "OK",
    keyboard: "OK",
    checker: "Yusril",
    qcDate: "18 Mei 2026",
    masuk: "18 Mei 2026",
    tempo: "1 Juni 2026",
    sisaTempo: "9 Hari",
    note: "WiFi kadang hilang, jangan ditawarkan dulu",
  },
  {
    id: "2",
    token: "LV14N5",
    batch: "PSI-20260518",
    supplier: "PSI",
    model: "Lenovo V14",
    processor: "Ryzen 5",
    ram: "8GB",
    ssd: "512GB SSD",
    spec: "Ryzen 5 • 8GB • 512 SSD",
    status: "WITH_NOTES" as UnitStatus,
    battery: "84%",
    ssdHealth: "95%",
    lcd: "OK",
    keyboard: "OK",
    checker: "Noval",
    qcDate: "18 Mei 2026",
    masuk: "18 Mei 2026",
    tempo: "1 Juni 2026",
    sisaTempo: "12 Hari",
    note: "Speaker kecil, layak jual dengan catatan",
  },
];

export function getUnit(id: string) {
  return units.find((u) => u.id.toLowerCase() === id.toLowerCase() || u.token.toLowerCase() === id.toLowerCase()) ?? units[0];
}

export function statusStyle(status: UnitStatus) {
  if (status === "VERIFIED") return "bg-emerald-500 text-black";
  if (status === "WITH_NOTES") return "bg-yellow-400 text-black";
  if (status === "RECHECK") return "bg-orange-500 text-black";
  if (status === "RETUR" || status === "HOLD") return "bg-red-500 text-white";
  return "bg-slate-500 text-white";
}
