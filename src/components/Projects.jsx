import { Shield, Activity, Box, Cpu, HardDrive, Network, Eye, ShieldAlert, Zap, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const shadowSyncArchitecture = [
    { label: "Host", detail: "Python Controller", icon: <Cpu size={14} /> },
    { label: "V-Layer", detail: "VirtualBox API", icon: <Box size={14} /> },
    { label: "Detonation", detail: "Isolated Guest", icon: <Activity size={14} /> },
    { label: "Wipe", detail: "NIST 800-88", icon: <HardDrive size={14} /> }
  ];

  const specterScopeLogs = [
    "[OSINT] Querying target asset: 8.8.8.8...",
    "[VT API] Malicious Flags: 0 // Clean Asset Verified.",
    "[ABUSE_IPDB] Abuse Confidence Score: 0% (184 reports)",
    "[OTX LINK] Active Threat Pulse Linkages: 0 pulses",
    "[SUCCESS] IOC Analysis Complete. Local threat profile generated."
  ];

  const idsLogs = [
    "[INFO] Monitoring interface eth0...",
    "[SCAN] Potential Nmap SYN scan detected from 192.168.1.42",
    "[ALERT] Signature Match: ET EXPLOIT Possible EternalBlue",
    "[ACTION] Flagging source IP for investigation...",
    "[INFO] Capture saved to /var/log/suricata/eve.json"
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Shield className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid gap-20">
          
          {/* PROJECT 1: SPECTERSCOPE OSINT */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
            <div className="space-y-6">
              <div>
                <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">Featured // Threat Intelligence</span>
                <h3 className="text-4xl font-bold mt-2">SpecterScope OSINT</h3>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  A high-performance, native OSINT command-line tool designed to query indicators of compromise (IOCs), correlate multi-source open-source threat intelligence, and compile reports instantly.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python 3.11+", "VirusTotal API", "AbuseIPDB API", "AlienVault OTX"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-black border border-zinc-800 rounded-md text-[10px] font-mono text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-full bg-black rounded-2xl border border-zinc-800 p-6 font-mono text-[11px] overflow-hidden shadow-2xl shadow-purple-500/5">
              <div className="flex items-center gap-2 mb-4 text-purple-400 border-b border-zinc-800 pb-2">
                <Search size={14} />
                <span>SPECTERSCOPE_LIVE_STREAM</span>
              </div>
              <div className="space-y-2">
                {specterScopeLogs.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.8, repeat: Infinity, repeatDelay: 4 }}
                    className={line.includes('API') || line.includes('OSINT') ? "text-purple-400" : "text-zinc-500"}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 2: SHADOWSYNC */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
            <div className="space-y-6">
              <div>
                <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">Flagship // Malware Analysis</span>
                <h3 className="text-4xl font-bold mt-2">ShadowSync</h3>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  A high-fidelity malware sandbox built for behavioral analysis. It automates the detonation of malicious binaries and tracks system-level changes in real-time.
                </p>
              </div>

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

            <div className="relative h-64 lg:h-full bg-black rounded-2xl border border-zinc-800 p-6 font-mono text-[11px] overflow-hidden">
              <div className="space-y-2">
                {["> INIT_SANDBOX", "[INFO] Hooking syscalls...", "[ALERT] Suspicious Registry modification", "> INITIATING_WIPE"].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.5 }} className={line.includes('ALERT') ? "text-purple-400" : "text-zinc-500"}>
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 3: SENTINEL-PI IDS */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl group">
            <div className="order-2 lg:order-1 relative h-64 lg:h-full bg-black rounded-2xl border border-zinc-800 p-6 font-mono text-[11px] overflow-hidden">
               <div className="flex items-center gap-2 mb-4 text-purple-400 border-b border-zinc-800 pb-2">
                 <ShieldAlert size={14} />
                 <span>THREAT_DETECTION_STREAM</span>
               </div>
               <div className="space-y-2">
                 {idsLogs.map((line, i) => (
                    <motion.p 
                      key={i} 
                      initial={{ opacity: 0, x: 10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ delay: i * 1, repeat: Infinity, repeatDelay: 3 }}
                      className={line.includes('ALERT') ? "text-purple-500 font-bold" : "text-zinc-600"}
                    >
                      {line}
                    </motion.p>
                 ))}
               </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">IoT // Network Defense</span>
                <h3 className="text-4xl font-bold mt-2">Sentinel-Pi IDS</h3>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  A custom-configured Intrusion Detection System running on a Raspberry Pi 5. It performs deep packet inspection (DPI) to identify and log malicious network behavior.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                 {[{icon: <Zap />, text: "Suricata Engine"}, {icon: <Eye />, text: "Real-time DPI"}, {icon: <Activity />, text: "ELK Stack Sync"}].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1 bg-black border border-zinc-800 rounded-md text-[10px] font-bold text-slate-300">
                       <span className="text-purple-500">{tag.icon}</span> {tag.text}
                    </div>
                 ))}
              </div>
            </div>
          </div>

          {/* PROJECT 4: PI-DROP V1 */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl group">
             <div className="space-y-6">
                <div>
                  <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">Hardware // Remote Exploitation</span>
                  <h3 className="text-4xl font-bold mt-2">Pi-Drop v1</h3>
                  <p className="text-slate-400 mt-4 leading-relaxed">
                    A physical penetration testing dropbox designed for stealthy network persistence. Establishes an encrypted C2 bridge using WireGuard tunnels.
                  </p>
                </div>
                <div className="space-y-2">
                   {["Encrypted C2 over utun8 interface.", "Automated Nmap scanning on link-up.", "Bypasses NAC via MAC spoofing."].map((li, i) => (
                      <div key={i} className="text-sm text-slate-500 flex gap-2">
                         <span className="text-purple-500">»</span> {li}
                      </div>
                   ))}
                </div>
             </div>
             <div className="flex items-center justify-center bg-black rounded-2xl border border-zinc-800 p-12">
                <Network size={64} className="text-purple-500/20 group-hover:text-purple-500 transition-all duration-700" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}