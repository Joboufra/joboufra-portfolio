'use client'
import { motion } from 'framer-motion'

const SkillsSection = () => {
  const logos = [ 
    { src: '/docker-icon.svg', name: 'Docker' },
    { src: '/kubernetes-icon.svg', name: 'Kubernetes' },
    { src: '/azure-aks-icon.svg', name: 'Azure AKS' },
    { src: '/elastic-icon.svg', name: 'Elastic Stack' },
    { src: '/grafana-icon.svg', name: 'Grafana' },
    { src: '/fluentd-icon.svg', name: 'Fluentd' },
    { src: '/prometheus-icon.svg', name: 'Prometheus' },
    { src: '/bash-icon.svg', name: 'Bash' },
    { src: '/powershell-icon.svg', name: 'Powershell' },
    { src: '/githubactions-icon.svg', name: 'GitHub Actions' }
    
  ];

  return (
    <div className="bg-gradient-to-t from-slate-800 via-transparent w-full pb-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center text-2xl uppercase tracking-[5px] font-bold text-white mx-6'
      >
        Skills
      </motion.h2>
      <div
        className="flex flex-wrap justify-center mt-4 mb-6">
        {logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.25 }}
          transition={{ opacity: { duration: 0.2, delay: index * 0.2 }, y: { duration: 0.2, delay: index * 0.2 }, scale: { duration: 0.2 }, whileHover: { duration: 0.1 } }}
          className="group text-center rounded-lg p-5 flex-none"
        >      
          <img src={logo.src} alt={`Logo ${index + 1}`} className="w-24 h-24 mx-auto" />
          <p className="opacity-60 mt-2 font-semibold">{logo.name}</p>
        </motion.div>
        ))}
    </div>
  </div>
  );
};

export default SkillsSection;
