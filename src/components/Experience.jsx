import { Briefcase, Terminal, Award, Code, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Red Team Expert",
      org: "Cyber Sapiens (College Cyber Club)",
      date: "2024 – Present",
      desc: [
        "Leading technical workshops on offensive security and ethical hacking methodologies.",
        "Designing CTF challenges and network environments for simulated cyber maneuvers."
      ],
      icon: <Terminal size={20} />
    },
    {
      title: "Secure App Dev Intern",
      org: "Micronet Technologies Systems",
      date: "June 2025 – July 2025",
      desc: [
        "Hardened API endpoints against OWASP Top 10 (XSS, CSRF, IDOR).",
        "Implemented secure authentication using bcrypt, JWT, and MFA (Email OTP)."
      ],
      icon: <Briefcase size={20} />
    }
  ];

  const skillGroups = [
    {
      category: "Offensive Security",
      skills: ["Penetration Testing", "Red Teaming", "Vulnerability Assessment", "Ethical Hacking", "Social Engineering"]
    },
    {
      category: "Security Tools",
      skills: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "Nessus", "Aircrack-ng", "VirusTotal", "FLOSS"]
    },
    {
      category: "Analysis & Defense",
      skills: ["Malware Traffic Analysis", "OWASP Top 10", "Network Security", "NIST SP 800-88", "Data Wiping"]
    },
    {
      category: "Development & Systems",
      skills: ["Python", "C++", "C", "SQL", "React", "Node.js", "Express", "MongoDB", "Kali Linux", "Arch Linux", "VirtualBox"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Experience Timeline */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <Award className="text-purple-500" size={32} />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-transparent">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-purple-400">
                    {exp.icon}
                  </div>
                  <div>
                    <span className="text-purple-400 text-sm font-mono">{exp.date}</span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-slate-400 mb-4">{exp.org}</p>
                    <ul className="space-y-2">
                      {exp.desc.map((item, j) => (
                        <li key={j} className="text-sm text-slate-500 flex gap-2">
                          <CheckCircle2 size={14} className="text-purple-500 mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Expanded Technical Stack */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <Code className="text-purple-500" size={32} />
              <h2 className="text-3xl font-bold tracking-tight">Technical Stack</h2>
            </div>

            <div className="grid gap-6">
              {skillGroups.map((group, i) => (
                <div key={i} className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
                  <h3 className="text-purple-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <span key={j} className="px-3 py-1 bg-black border border-zinc-800 rounded-md text-[11px] font-medium text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 