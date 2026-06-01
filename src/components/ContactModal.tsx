import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, FileText, Check, Copy, ExternalLink, X, Compass, Settings, Zap } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const links = [
    {
      title: 'Gmail AI Resume Screener (n8n Workflow)',
      url: 'https://drive.google.com/file/d/1F4l5HYH5uq4sley4OLrd5Hl1SOkZKUM8/view?usp=sharing',
      desc: 'Smart workspace automation candidate scoring loop.',
      icon: Zap
    },
    {
      title: 'CURO Service Platform',
      url: 'https://curo-it.netlify.app/login',
      desc: 'Seamless end-to-end booking flow and prioritized specs.',
      icon: Compass
    },
    {
      title: 'ZEPTO Optimization (Inter-IIT Top Case)',
      url: 'https://drive.google.com/file/d/1gHqiQ6OncHI2lHJ0-3n6oEG7CpJVK7XL/view?usp=drivesdk',
      desc: 'Conducted 30+ interviews to design and validate pain points.',
      icon: Settings
    },
    {
      title: 'CRED Optimization Concept',
      url: 'https://drive.google.com/file/d/1E8b5zzoODxM9zjOndi2NtDa27Cb5xsh-/view?usp=drivesdk',
      desc: 'In-depth exploration of engagement and conversion metrics.',
      icon: Compass
    },
    {
      title: 'Hello PM Case Study',
      url: 'https://drive.google.com/file/d/1N83DXdiEnA55TMwCrhwi4zKCVsTWJSJX/view?usp=drivesdk',
      desc: 'Top 51 globally in Product Spirits Case Competition.',
      icon: Zap
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0C0C0C]/95 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            className="relative bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] max-w-2xl w-full p-6 sm:p-8 md:p-10 z-10 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] font-sans"
          >
            {/* Ambient Background Gradient Glow */}
            <div
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              }}
            />

            {/* Header */}
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div>
                <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#D7E2EA]/50 block mb-1">
                  Connect & Inspect
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#D7E2EA] font-kanit tracking-tight">
                  Hitarth Baldha
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#D7E2EA] hover:bg-white/5 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-2 scrollbar relative z-10">
              
              {/* Primary Action: View Resume */}
              <div
                className="p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-white/20 transition-colors duration-200 border border-[#D7E2EA]/10"
                style={{
                  background: 'linear-gradient(120deg, rgba(24, 1, 31, 0.3) 0%, rgba(118, 33, 176, 0.1) 100%)'
                }}
              >
                <div className="flex gap-3">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-100 text-sm sm:text-base font-kanit">Professional Resume</h4>
                    <p className="text-xs text-neutral-400">View education, workflows, and intern context</p>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1F3Daihe3cFqVPUqNBkixa92i2tYoLhNn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-white text-black hover:bg-neutral-100 transition-colors uppercase font-mono tracking-wider font-semibold text-xs rounded-full flex items-center justify-center gap-2"
                >
                  View Resume <ExternalLink size={14} />
                </a>
              </div>

              {/* Directly Actionable Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Section */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#D7E2EA]/5 text-[#D7E2EA]/85 rounded-lg">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-neutral-500 uppercase font-mono block">Gmail Address</span>
                      <span className="text-xs text-stone-300 font-mono truncate block">24je0202@iitism.ac.in</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('24je0202@iitism.ac.in', 'email')}
                    className="p-2 text-neutral-500 hover:text-white rounded transition-colors cursor-pointer"
                  >
                    {copiedField === 'email' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone Section */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#D7E2EA]/5 text-[#D7E2EA]/85 rounded-lg">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase font-mono block">Direct Contact</span>
                      <span className="text-xs text-stone-300 font-mono block">+91 95860 61673</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+91 95860 61673', 'phone')}
                    className="p-2 text-neutral-500 hover:text-white rounded transition-colors cursor-pointer"
                  >
                    {copiedField === 'phone' ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Case Studies & Extra Project Links */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/45 mb-3">Case Studies & Presentation Docs</h5>
                <div className="space-y-2">
                  {links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/[0.01] hover:bg-white/[0.03] active:bg-white/[0.05] border border-white/5 hover:border-white/10 rounded-xl flex items-center justify-between transition-all duration-200 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-neutral-800 text-neutral-400 group-hover:text-[#D7E2EA] rounded-md transition-colors">
                            <Icon size={14} />
                          </div>
                          <div>
                            <p className="text-neutral-200 group-hover:text-white transition-colors text-xs font-medium font-kanit">
                              {link.title}
                            </p>
                            <p className="text-[10px] text-neutral-500 leading-none mt-0.5">{link.desc}</p>
                          </div>
                        </div>
                        <ExternalLink size={12} className="text-neutral-500 group-hover:text-white transition-colors mr-1" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
