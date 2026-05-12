import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
      <div className="container-custom flex justify-between items-center h-[80px]">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-[40px] font-bold tracking-tighter text-primary" 
          href="#"
        >
          Jahzeel Dugaduga
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          {['Work', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors relative group"
              href={`#${item.toLowerCase()}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="btn-container text-sm inline-block"
            href="#contact"
          >
            Get in Touch
          </motion.a>
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-primary p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
