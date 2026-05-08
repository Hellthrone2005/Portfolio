import { Award, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    { 
      name: "eJPT (Junior Penetration Tester)", 
      issuer: "INE / eLearnSecurity",
      id: "164406011", 
      status: "Verified" 
    },
    { 
      name: "Palo Alto PCCET", 
      issuer: "Palo Alto Networks",
      id: "LP-P0WPX1", 
      status: "Verified" 
    },
    { 
      name: "IBM Cybersecurity Fundamentals", 
      issuer: "IBM",
      status: "Verified" 
    },
    { 
      name: "Cisco Networking Basics", 
      issuer: "Cisco Networking Academy",
      status: "Verified" 
    },
    { 
      name: "Introduction to Cybersecurity", 
      issuer: "Cisco Networking Academy",
      status: "Verified" 
    },
    { 
      name: "eCPPT (Certified Professional Penetration Tester)", 
      issuer: "INE / eLearnSecurity",
      status: "Pursuing" 
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Award className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                {cert.status === "Verified" ? (
                  <CheckCircle size={24} className="text-purple-500" />
                ) : (
                  <Clock size={24} className="text-zinc-500" />
                )}
                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${
                  cert.status === "Verified" 
                    ? "bg-purple-500/10 text-purple-400" 
                    : "bg-zinc-500/10 text-zinc-400"
                }`}>
                  {cert.status}
                </span>
              </div>
              
              <h3 className="font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">{cert.issuer}</p>
              
              {cert.id && (
                <div className="mt-4 pt-4 border-t border-zinc-800/50">
                  <p className="text-[10px] text-zinc-500 font-mono tracking-tighter uppercase">Credential ID</p>
                  <p className="text-xs text-purple-300/80 font-mono mt-1">{cert.id}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}