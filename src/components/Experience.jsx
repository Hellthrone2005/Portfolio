import { Briefcase, Terminal, Award, Code, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    { title: "Red Team Expert", org: "Cyber Sapiens", date: "2024 – Present", icon: <Terminal size={20} /> },
    { title: "Secure App Dev Intern", org: "Micronet Technologies", date: "2025", icon: <Briefcase size={20} /> }
  ];

  return (
    <section id="experience" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <Award className="text-purple-500" size={32} />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-transparent">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-purple-400">{exp.icon}</div>
                  <div>
                    <span className="text-purple-400 text-sm font-mono">{exp.date}</span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-slate-400">{exp.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
            <h3 className="text-purple-400 font-mono text-sm font-bold uppercase mb-6">Technical Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Nmap", "Metasploit", "Python", "C++", "React", "Node.js"].map((s, i) => (
                <span key={i} className="px-3 py-1 bg-black border border-zinc-800 rounded-md text-xs text-slate-300">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}