'use client'
import { motion } from 'framer-motion'

const SkillsSection = () => {
  const logos = [ 
    { src: '/docker-icon.svg', name: 'Docker' },
    { src: '/kubernetes-icon.svg', name: 'Kubernetes' },
    { src: '/bash-icon.svg', name: 'Bash' },
    { src: '/powershell-icon.svg', name: 'Powershell' },
    { src: '/elastic-icon.svg', name: 'Elastic Stack' },
    { src: '/grafana-icon.svg', name: 'Grafana' },
    { src: '/azure-aks-icon.svg', name: 'Azure AKS' }
  ];

  return (
    <div className="bg-gradient-to-t from-slate-800 via-transparent w-full pb-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center text-3xl font-bold text-white mx-6 mb-4'
      >
        Tecnologías con las que he trabajado
      </motion.h2>
      <div
        className="flex flex-wrap justify-center mt-10">
        {logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ opacity: { duration: 0.2, delay: index * 0.3 }, y: { duration: 0.2, delay: index * 0.3 }, scale: { duration: 0.2 }, whileHover: { duration: 0.1 } }}
          className="group text-center rounded-lg p-5 flex-none"
        >      
          <img src={logo.src} alt={`Logo ${index + 1}`} className="w-24 h-24 mx-auto" />
          <p className="opacity-60 group-hover:opacity-100 mt-2 font-semibold">{logo.name}</p>
        </motion.div>
        ))}
    </div>
  </div>
  );
};

export default SkillsSection;
