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
    <div className="bg-gradient-to-t  from-slate-800 via-transparent w-full py-6">
      <h2 className='text-center text-3xl font-bold text-white mt-4 mb-4'>Tecnologías con las que he trabajado</h2>
      <div className="flex flex-wrap justify-center mt-10">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="group text-center rounded-lg p-5 flex-none"
          >
            <img src={logo.src} alt={`Logo ${index + 1}`} className="w-24 h-24 mx-auto" />
            <p className="opacity-60 group-hover:opacity-100 mt-2 font-semibold">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
