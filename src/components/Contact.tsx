import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:jazzdugaduga@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-[120px] border-t border-outline-variant container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[32px] font-bold text-on-surface"
          >
            Let's create something extraordinary.
          </motion.h2>
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Full Name</label>
              <input 
                required
                className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none transition-all py-2 text-base" 
                placeholder="John Doe" 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email Address</label>
              <input 
                required
                className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none transition-all py-2 text-base" 
                placeholder="john@example.com" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Tell me about your project</label>
              <textarea 
                required
                className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none transition-all py-2 text-base resize-none" 
                placeholder="Briefly describe your vision..." 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <button type="submit" className="btn-primary w-full md:w-auto uppercase tracking-widest text-xs">
              Send Inquiry
            </button>
          </form>
        </div>
        
        <div className="space-y-20 md:pl-20">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-widest">Direct Contact</h4>
            <a href="mailto:Jazzdugaduga@gmail.com" className="block text-2xl font-semibold text-on-surface hover:text-primary transition-colors">
              Jazzdugaduga@gmail.com
            </a>
            <a href="tel:09070524345" className="block text-2xl font-semibold text-on-surface hover:text-primary transition-colors">
              09070524345
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
