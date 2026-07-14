import { Award, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    { 
      name: "Google Cybersecurity Professional Certificate", 
      issuer: "Google via Coursera",
      id: "KQKY0YIL50NZ", 
      status: "Verified",
      link: "https://coursera.org/verify/professional-cert/KQKY0YIL50NZ"
    },
    { 
      name: "eJPT (Junior Penetration Tester)", 
      issuer: "INE / eLearnSecurity",
      id: "164406011", 
      status: "Verified",
      link: "https://certs.ine.com/29078a60-d0bc-466a-a615-7d702f3795ca#acc.9LVxSsaI"
    },
    { 
      name: "Certified Cybersecurity Practitioner", 
      issuer: "Palo Alto Networks",
      id: "LP-P0WPX1", 
      status: "Verified",
      link: "https://learn.paloaltonetworks.com/learn/learning-plans/339/palo-alto-networks-certified-cybersecurity-practitioner"
    },
    { 
      name: "IBM Cybersecurity Fundamentals", 
      issuer: "IBM",
      status: "Verified",
      link: "https://www.credly.com/badges/09297216-b100-4e01-a81f-0da6b14ffe1c/linked_in_profile" 
    },
    { 
      name: "Cisco Networking Basics", 
      issuer: "Cisco Networking Academy",
      status: "Verified",
      link: "https://www.credly.com/badges/ad4aa024-2bfc-4ca7-bf91-02b47b91a82c/linked_in_profile" 
    },
    { 
      name: "Introduction to Cybersecurity", 
      issuer: "Cisco Networking Academy",
      status: "Verified",
      link: "https://www.credly.com/badges/ade56526-e7ca-4e96-a51c-02f39b4033b3/linked_in_profile" 
    },
    { 
      name: "CompTIA Security+", 
      issuer: "CompTIA",
      status: "Pursuing",
      link: "https://www.comptia.org/certifications/security" 
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
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-purple-500/50 hover:bg-zinc-900/50 transition-all group relative block cursor-pointer z-30"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">
                <ExternalLink size={14} />
              </div>

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
              
              <h3 className="font-bold text-slate-100 group-hover:text-purple-400 transition-colors pr-6">
                {cert.name}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">{cert.issuer}</p>
              
              {cert.id && (
                <div className="mt-4 pt-4 border-t border-zinc-800/50">
                  <p className="text-[10px] text-zinc-500 font-mono tracking-tighter uppercase">Credential ID</p>
                  <p className="text-xs text-purple-300/80 font-mono mt-1">{cert.id}</p>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}