import { Briefcase, Calendar, MapPin, ShieldAlert, Code2, ShieldCheck, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Cyber Forensics & Malware Analysis Intern",
      company: "Delhi Police Cyber Crime Unit",
      location: "New Delhi, India",
      duration: "June 2026 -- July 2026",
      icon: <ShieldCheck className="text-purple-500" size={20} />,
      points: [
        "Assisted in static and dynamic malware analysis operations targeting malicious Android applications and portable executables.",
        "Utilized industry-standard digital forensics suites including Cellebrite and Oxygen Forensics to extract and analyze host device data artifacts.",
        "Conducted mobile device vulnerability assessments and parsed system infrastructure logs to map indicator pathways for investigations.",
        "Maintained strict chain of custody protocols and absolute confidentiality baselines required in law enforcement environments."
      ]
    },
    {
      role: "Secure Application Development Intern",
      company: "Micronet Technologies Systems",
      location: "New Delhi, India",
      duration: "June 2025 -- July 2025",
      icon: <Code2 className="text-purple-400" size={20} />,
      points: [
        "Architected a secure authentication module using bcrypt for salting/hashing and JWT for session integrity.",
        "Engineered MFA (Email OTP) and RBAC middleware to enforce the Principle of Least Privilege.",
        "Hardened API endpoints against OWASP Top 10 vectors, including XSS, CSRF, and IDOR vulnerabilities.",
        "Conducted security audits via Postman to verify robust handling of malformed requests and data privacy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Professional Timeline</h2>
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[11px] top-1 bg-black border border-zinc-800 group-hover:border-purple-500 rounded-full p-1.5 transition-colors duration-300 z-10 bg-zinc-950">
                {exp.icon}
              </div>

              {/* Experience Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-zinc-400 mt-0.5">{exp.company}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-purple-500/70" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-zinc-600" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-sm text-slate-400 leading-relaxed list-none pl-0">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold mt-1 select-none">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}