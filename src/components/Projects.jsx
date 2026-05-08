import { Shield, Activity, Share2, Box, Terminal, Cpu, HardDrive, Network } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const shadowSyncArchitecture = [
    { label: "Host", detail: "Python Controller", icon: <Cpu size={14} /> },
    { label: "V-Layer", detail: "VirtualBox API", icon: <Box size={14} /> },
    { label: "Detonation", detail: "Isolated Guest", icon: <Activity size={14} /> },
    { label: "Wipe", detail: "NIST 800-88", icon: <HardDrive size={14} /> }
  ];

  const logLines = [
    "> INIT_SANDBOX_VR",
    "[INFO] Spawning isolated guest instance...",
    "[INFO] Hooking NTSetInformationFile...",
    "> ANALYZING: malware_sample_01.exe",
    "[ALERT] Suspicious registry modification.",
    "[ALERT] C2 communication attempt detected.",
    "> INITIATING_NIST_WIPE...",
    "[SUCCESS] Environment sanitized."
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Shield className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Red Team Arsenal</h2>
        </div>

        <div className="grid gap-16">
          
          {/* PROJECT 1: SHADOWSYNC */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
            <div className="space-y-6">
              <div>
                <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">Flagship // Software Analysis</span>
                <h3 className="text-4xl font-bold mt-2">ShadowSync</h3>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  A high-fidelity malware sandbox built for behavioral analysis. It automates the detonation of malicious binaries and tracks system-level changes in real-time.
                </p>
              </div>

              {/* ARCHITECTURE DEEP DIVE */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {shadowSyncArchitecture.map((item, i) => (
                  <div key={i} className="p-3 bg-black/40 border border-zinc-800/50 rounded-xl">
                    <div className="flex items-center gap-2 text-purple-400 mb-1">
                      {item.icon}
                      <span className="text-[10px] uppercase font-bold tracking-tighter">{item.label}</span>
                    </div>
                    <div className="text-xs text-slate-300 font-mono">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE DETONATION LOG */}
            <div className="relative h-64 lg:h-full bg-black rounded-2xl border border-zinc-800 p-6 font-mono text-[11px] overflow-hidden shadow-2xl shadow-purple-500/5">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-2">
                {logLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.8, repeat: Infinity, repeatDelay: 5 }}
                    className={line.includes('ALERT') ? "text-purple-400 font-bold" : "text-zinc-500"}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 2: PI-DROP V1 */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl group">
             <div className="order-2 lg:order-1 flex items-center justify-center bg-black rounded-2xl border border-zinc-800 p-12 overflow-hidden">
                <Network size={80} className="text-purple-500/20 group-hover:scale-110 group-hover:text-purple-500/40 transition-all duration-500" />
             </div>
             
             <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">Hardware // Remote Exploitation</span>
                  <h3 className="text-4xl font-bold mt-2">Pi-Drop v1</h3>
                  <p className="text-slate-400 mt-4 leading-relaxed">
                    A physical penetration testing dropbox designed for "drop-and-forget" operations. It creates a secure, encrypted C2 bridge into restricted networks.
                  </p>
                </div>
                
                <ul className="space-y-3">
                   {[
                     "Automated WireGuard (utun8) tunnel establishment.",
                     "Headless Kali Linux ARM build on Raspberry Pi 5.",
                     "Custom script for automated internal network scanning upon link-up."
                   ].map((bullet, i) => (
                     <li key={i} className="text-sm text-slate-500 flex gap-2">
                        <span className="text-purple-500 font-bold">»</span> {bullet}
                     </li>
                   ))}
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}