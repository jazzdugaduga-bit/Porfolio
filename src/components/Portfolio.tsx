import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Church Graphics',
    category: 'Visual Church Media',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiA38R_bHuFLwFocLpIXMrLCiWsfYo-qgcngUTcDnCHOA48FAZDEDCnC3zuhpr8ogEZD55_qCsoujtnm_4hHZkxS0w2-KJQ2LpbJruJWdRAGs6N58GQ8mLfWUJP9EvvWmx_c3zGgwHULq4s2t6KeXV44Jnl0S92TPlAOSMedx4DwLIkFymn_Nl6f_UJpFJHTzIIQb2PNwHP7HiPhrd_PQsq70NBB6YPrfD-AwUacvEi4Phi8XeFpRUXiWWKUyBcYHsU1EHIqlXSowY',
    link: 'https://drive.google.com/drive/folders/1kgmW_Xrl1XDnX9XBQ1vorxhpRfo4Ix4g?usp=sharing'
  },
  {
    title: 'Static Ads Design',
    category: 'Promotional Ad',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugEEMjJYYObdZpb6hEqte2i2oA3A1arHB8C4qLZpYb5dlu0MsWQhv4ytfR2thm_RmtowvhG9dgWO8h5Mz60veL6ElzXl_dle084iwtMsHXwBSBYbi_s1JLUksUPN4YCE0KlrSuFRYyUIfRswZg1gSzJ9LgRcYOVakm3x0NtGDqw-orBzfnYSMGz-xeOyX7t_ixsJllgpESwSSc0yuN8yNgP5JT-KGU3W4XjqQAgM-9mKejjs1Sw8lEFa8ShVRlAeerYq5tQk1jYtLQ',
    link: 'https://drive.google.com/drive/folders/1zjUMygqA-rg7zBqArTxm-6KCpaU0cVND?usp=sharing'
  },
  {
    title: 'Amazon Product Ad',
    category: 'Amazon Listing Images',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJBkSkrUzLHi6TBZu7LGGI316ErZhkAnge7PACn-wwfUJSDLynxYsguGaqSpMDLbTIzp4dNpkCEkecYsQjYqdiATTXy3pW1Sa_GPnIUCSdlKUMMJKSe_EAfgNL7HQRdVuRKrmfmGHLeG5wuOOdUAQjBvyaf1nV49GIoVnd9X5tpoCdp6vBEGSwOyp-r4KxxjntRxalK1V3IlZU6YqfWRCYzW1OTi1DVcqFrTvad17JilTGAQlOEMUOitVFkO8EIL3AP6odLdYH4Qyx',
    link: 'https://drive.google.com/drive/folders/1pbm2ZsxpS_tLsNcC8PcYHqntrFMDrJTM?usp=sharing'
  },
  {
    title: 'E-Commerce Ads Design',
    category: 'Life Style Ads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjOuzY844b2cGj27LBZKmR1Var9_9af5YcTyQwVIQ47E0b-cFA7_61nbCdWI_gQu_G-0PwRKLEPAhq3xgpOYg3GfYTHTlK5a3YakYbgcCKUG1IKZFcN5A52gSGwmIL2Fezu-C4oC2sLaqRAadQPGjLT2RfsSBdCOnlrQh236jW-_L5LqGdjmcqM2goPpc11Pj8qlRpJejcfiEUhTdiSkKLoZ2XSmYuYmD9vTcBe534fLd5M1c0DPfLyq5eDaqe8-81j3xcw7LJDSBw',
    link: 'https://drive.google.com/drive/folders/171CfdfBUXyUcG-HCmCz9JrgGfocVFK8r?usp=sharing'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-[120px] container-custom">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-semibold text-primary uppercase tracking-wider"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[32px] font-bold text-on-surface mt-2"
          >
            Selected Works
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base text-on-surface-variant max-w-sm text-right md:text-left"
        >
          A curated selection of cross-disciplinary projects focusing on brand clarity and user delight.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {projects.map((project, i) => (
          <motion.a 
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer block"
          >
            <div className="bg-surface-container-low rounded-xl overflow-hidden mb-6 aspect-video shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={project.image}
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-base text-on-surface-variant">{project.category}</p>
              </div>
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <ArrowUpRight className="text-primary group-hover:translate-x-1 transition-transform" size={24} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
