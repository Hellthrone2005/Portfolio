import { Shield, Activity, Share2, Box } from 'lucide-react';

export default function Projects() {
  const features = [
    { icon: <Box size={20} />, title: "Isolated Environment", desc: "Secure virtual space to analyze PE files without host risk." },
    { icon: <Activity size={20} />, title: "System Call Capture", desc: "Real-time tracking of interactions with the OS kernel." },
    { icon: <Share2 size={20} />, title: "Network Monitoring", desc: "Identify C2 communication attempts in a controlled lab." }
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Shield className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl">
          <div className="space-y-6">
            <div>
              <span className="text-purple-400 text-sm font-mono font-bold uppercase tracking-widest">2026 // Python & Virtualization</span>
              <h3 className="text-4xl font-bold mt-2">ShadowSync</h3>
              <p className="text-slate-400 mt-4 leading-relaxed">Advanced malware testing sandbox designed for secure behavioral analysis.</p>
            </div>
            <div className="grid gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 bg-black border border-zinc-800/50 rounded-xl">
                  <div className="text-purple-500 mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-200">{f.title}</h4>
                    <p className="text-sm text-slate-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center bg-black border border-zinc-800 rounded-xl p-6 font-mono text-sm text-purple-400/80">
            <div className="space-y-2">
              <p>{`> INIT_SANDBOX_VR`}</p>
              <p className="text-zinc-600">{`[INFO] Hooking system calls...`}</p>
              <p className="text-purple-300">{`[ALERT] Suspicious network activity detected.`}</p>
              <p className="animate-pulse">{`> MONITORING_ACTIVE...`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}