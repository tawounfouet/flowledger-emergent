import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { waitlistForm } from '../data/mock';

export const WaitlistSection = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
      setCompany('');
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 px-4"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#352694]/30 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#10B981]/20 rounded-full blur-[80px]" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
              >
                ×
              </button>

              {/* Content */}
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#10B981]/20 flex items-center justify-center"
                      >
                        <CheckCircle size={40} className="text-[#10B981]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Merci !</h3>
                      <p className="text-white/60">Vous serez informé dès le lancement.</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{waitlistForm.title}</h3>
                      <p className="text-white/60 mb-8">{waitlistForm.description}</p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={waitlistForm.fields[0].placeholder}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder={waitlistForm.fields[1].placeholder}
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary w-full flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <Loader2 size={20} className="animate-spin" />
                          ) : (
                            <>
                              {waitlistForm.submitText}
                              <ArrowRight size={18} />
                            </>
                          )}
                        </motion.button>
                      </form>

                      <p className="text-center text-white/40 text-xs mt-6">
                        En vous inscrivant, vous acceptez nos conditions d'utilisation.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
