import { motion } from 'motion/react';

const skills = [
  { name: 'Figma', desc: 'Interface Design & Prototyping' },
  { name: 'Canva', desc: 'Rapid Content Creation' },
  { name: 'Adobe CC', desc: 'Photoshop & Illustrator' }
];

export default function Expertise() {
  return (
    <section id="about" className="py-20 md:py-[120px] border-t border-outline-variant/30 container-custom">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="md:w-1/3">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-semibold text-primary tracking-widest uppercase"
          >
            Core Skills
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[32px] font-bold text-on-surface mt-2"
          >
            Expertise
          </motion.h2>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 group cursor-default"
            >
              <p className="text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">{skill.name}</p>
              <p className="text-xs text-on-surface-variant mt-2">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
