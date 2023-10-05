import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-[#121212]">
    <NavBar />
  <div className='container mt-24 mx-auto px-12 py-4'>
    <HeroSection />
  </div>
  <div className='mt-24'>
    <SkillsSection /> 
  </div>
  <div className=" h-0.5 bg-secondary-500"></div>

  <div className='container mt-14 mx-auto px-12' id="proyectos" >
    <ProjectsSection />
  </div>
  <div className=" h-0.5 bg-secondary-500 mt-20" id="contacto"></div>
  <div className='container mx-auto px-12 pb-8'>
    <EmailSection />
  </div>
   <Footer />
  </main>
  );
}