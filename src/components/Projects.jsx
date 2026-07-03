import { Shield, Activity, Box, Cpu, HardDrive, Network, Eye, ShieldAlert, Zap, Search, Terminal, Code, Bug, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const shadowSyncArchitecture = [
    { label: "Host", detail: "Python Controller", icon: <Cpu size={14} /> },
    { label: "V-Layer", detail: "VirtualBox API", icon: <Box size={14} /> },
    { label: "Detonation", detail: "Isolated Guest", icon: <Activity size={14} /> },
    { label: "Wipe", detail: "NIST 800-88", icon: <HardDrive size={14} /> }
  ];

  const specterGraphLogs = [
    "[INGEST] Parsing Active Directory directory structure (Users, Groups, Service Principals)...",
    "[GRAPH] Modeling assets into complex directed graph structure via NetworkX...",
    "[TRAVERSAL] Running Dijkstra Path Traversal Engine to map structural cycles...",
    "[ALERT] Hidden Transitive Privilege Escalation Path discovered: Shadow Admin vector.",
    "[EVALUATE] Multi-hop path verified: Domain User -> GenericAll -> Group -> WriteDacl -> Domain Controller",
    "[MITIGATE] Dynamic Mitigator Pass compiling custom architectural remediation playbook..."
  ];

  const specterFuzzerLogs = [
    "[INIT] Initializing multi-threaded worker pool (ThreadPoolExecutor)...",
    "[FUZZ] Thread-01 targeting payload: admin' OR '1'='1...",
    "[HEURISTIC] 200 OK -> Reflection detected. Potential SQLi vulnerability flagged.",
    "[FUZZ] Thread-04 targeting payload: ../../../etc/passwd...",
    "[TELEMETRY] 500 Internal Server Error -> Verbose DB error leak captured.",
    "[REPORT] Compiling Markdown threat log and Tailwind CSS dashboard summaries..."
  ];

  const specterScopeLogs = [
    "[OSINT] Querying target asset: 8.8.8.8...",
    "[VT API] Malicious Flags: 0 // Clean Asset Verified.",
    "[ABUSE_IPDB] Abuse Confidence Score: 0% (184 reports)",
    "[OTX LINK] Active Threat Pulse Linkages: 0 pulses",
    "[SUCCESS] IOC Analysis Complete. Local threat profile generated."
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Shield className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid gap-20">

          {/* PROJECT 1: SHADOWSYNC */}
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
          
          {/* PROJECT 2: SPECTERGRAPH (Identity Security & Path Analyzer) */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
            <div className="space-y-6">
              <div>
                <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">IAM Security // Graph Theory</span>
                <h3 className="text-4xl font-bold mt-2">SpecterGraph</h3>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  An advanced defensive security engineering suite designed to audit identity perimeters, parse complex active directory mappings into directed graph relationships, and uncover hidden Transitive Privilege Escalation Paths (Shadow Admins).
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "NetworkX Mappings", "Dijkstra Engine", "IAM Perimeter Auditing", "Cyberpunk Telemetry Canvas"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-black border border-zinc-800 rounded-md text-[10px] font-mono text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-full bg-black rounded-2xl border border-zinc-800 p-6 font-mono text-[11px] overflow-hidden shadow-2xl shadow-purple-500/5">
              <div className="flex items-center gap-2 mb-4 text-purple-400 border-b border-zinc-800 pb-2">
                <GitFork size={14} />
                <span>TOPOLOGICAL_TRAVERSAL_CORE</span>
              </div>
              <div className="space-y-2">
                {specterGraphLogs.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.7, repeat: Infinity, repeatDelay: 4 }}
                    className={line.includes('ALERT') || line.includes('EVALUATE') ? "text-fuchsia-400 font-bold" : "text-zinc-500"}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 3: SPECTERFUZZER */}
          <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
            <div className="space-y-6">
              <div>
                <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">Application Security // Concurrency</span>
                <h3 className="text-4xl font-bold mt-2">SpecterFuzzer</h3>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  A high-performance, host-native API penetration testing utility engineered to aggressively stress-test and validate REST API parameter inputs via asynchronous multi-threaded execution loops.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python 3.11+", "Concurrent.futures", "Threading", "Heuristic Analysis", "Tailwind UI Engine"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-black border border-zinc-800 rounded-md text-[10px] font-mono text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-full bg-black rounded-2xl border border-zinc-800 p-6 font-mono text-[11px] overflow-hidden shadow-2xl shadow-purple-500/5">
              <div className="flex items-center gap-2 mb-4 text-purple-400 border-b border-zinc-800 pb-2">
                <Bug size={14} />
                <span>FUZZER_ENGINE_POOL</span>
              </div>
              <div className="space-y-2">
                {specterFuzzerLogs.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.7, repeat: Infinity, repeatDelay: 4 }}
                    className={line.includes('HEURISTIC') || line.includes('TELEMETRY') ? "text-purple-400 font-bold" : "text-zinc-500"}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 4: SPECTERSCOPE OSINT */}
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

        </div>
      </div>
    </section>
  );
}