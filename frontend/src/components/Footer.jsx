import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { footerLinks } from '../data/mock';

export const Footer = ({ onWaitlistClick }) => {
  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="glass-card p-12 max-w-3xl mx-auto glow-primary">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à <span className="text-[#10B981]">transformer</span> votre comptabilité ?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Rejoignez les cabinets et PME qui font le choix de l'automatisation conforme aux normes OHADA.
            </p>
            <motion.button
              onClick={onWaitlistClick}
              className="btn-primary inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Demander une démo
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <a href="#" className="text-2xl font-bold text-white tracking-tight inline-block mb-4">
              Flow<span className="text-[#10B981]">Ledger</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              L'expertise comptable automatisée pour la zone OHADA. Conçu pour les cabinets d'expertise et les PME.
            </p>
            <div className="flex gap-4">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">contact@flowledger.cm</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">+237 6XX XXX XXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">Douala, Cameroun</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 FlowLedger. Tous droits réservés.
            </p>
            <p className="text-white/40 text-sm">
              Conçu pour les cabinets d'expertise et les PME en zone OHADA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
