import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="py-20 md:py-[120px] container-custom flex flex-col md:flex-row items-center gap-20 min-h-[820px]">
      <div className="flex-1 space-y-8">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-primary tracking-[0.2em] uppercase"
        >
          Lead Visual Designer
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-[64px] font-bold leading-[1.1] tracking-tight text-on-surface"
        >
          Designing<br />
          <span className="text-primary-container">With Impact</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed"
        >
          I create modern, conversion-focused visuals that help brands stand out in competitive digital spaces. From eCommerce creatives to static and Amazon ads, my work blends clean design with strategic communication to deliver impactful results.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <a href="#work" className="btn-primary text-sm uppercase tracking-wider inline-block">
            View Projects
          </a>
        </motion.div>
      </div>
      
      <div className="flex-1 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-2xl relative"
        >
          <img 
            alt="Jahzeel Dugaduga" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAqS-imikiS36s31XOWj7RO1QqLrK9fdL5WnExS2pdDNuV889VBgLYd8VkvBH7JRLQXcX5UbQ1gCAh11QJRIIHZdyqMjJFPgc9OwKFoE97RIjOD5brgT_rA90XSdKk9_N6QDGzO4leniqGOlJGUnbSbN1nvJbMphiCI2YWu9V6Uc1kTzT0PXYB0rddclt7oYwJBe_leGddnN_8k_TxHbYtWnUg6ENHreJI3wsxZue-aY6glUXf-p6h4JgYNIpS-GopnWtts9ySIllh"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.08)] hidden md:block border border-outline-variant"
        >
          <p className="text-sm font-semibold text-primary">Jahzeel</p>
        </motion.div>
      </div>
    </section>
  );
}
