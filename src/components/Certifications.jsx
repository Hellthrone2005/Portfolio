import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { name: "eJPT (Junior Penetration Tester)", id: "164406011", status: "Verified" },
    { name: "Palo Alto PCCET", id: "LP-P0WPX1", status: "Verified" },
    { name: "eCPPT", status: "Pursuing" }
  ];

  return (
    <section id="certifications" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Award className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <CheckCircle size={24} className="text-purple-500" />
                <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-purple-500/10 text-purple-400">{cert.status}</span>
              </div>
              <h3 className="font-bold">{cert.name}</h3>
              {cert.id && <p className="text-xs text-zinc-500 mt-2 font-mono">ID: {cert.id}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}