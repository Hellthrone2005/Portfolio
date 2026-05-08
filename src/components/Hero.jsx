import { ShieldCheck, GraduationCap, MapPin, ExternalLink, Terminal, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-white text-center bg-black">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl"
      >
        <div className="space-y-3">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            DAKSH <span className="text-purple-500">SHARMA</span>
          </h1>
          <p className="text-xl md:text-2xl font-mono text-slate-400 flex items-center justify-center gap-3">
            <Terminal size={24} className="text-purple-400" />
            Red Team Expert // eJPT Certified
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: <ShieldCheck size={18} />, text: "eJPT ID: 164406011" },
            { icon: <GraduationCap size={18} />, text: "B.Tech CSE (6th Sem) - 6.5 GPA" },
            { icon: <MapPin size={18} />, text: "New Delhi, India" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm font-medium hover:border-purple-500/50 transition-colors">
              <span className="text-purple-400">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
          Specializing in offensive security and penetration testing. 
          Lead Red Team Expert at Cyber Sapiens. 
          Currently developing ShadowSync, an advanced malware testing sandbox.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <a href="#projects" className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20">
            <Terminal size={20} /> View ShadowSync
          </a>
          <a href="#experience" className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-purple-400 text-white font-bold rounded-xl transition-all">
            <Briefcase size={20} className="text-purple-400" /> Experience
          </a>
          <a href="#certifications" className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-purple-400 text-white font-bold rounded-xl transition-all">
            <Award size={20} className="text-purple-400" /> Certifications
          </a>
        </div>
      </motion.div>
    </section>
  );
}