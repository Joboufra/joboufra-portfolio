import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import NavBarScroll from './components/NavBarScroll';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" >
      <NavBarScroll /> 
      <div className='container mx-auto px-12 py-20' >
        <HeroSection />
      </div>
        <div className='mt-14'>
        <SkillsSection />
        <div className=" h-0.5 bg-secondary-500" id="experiencia"></div>
        <ExperienceSection />
        </div>
      <div className=" h-0.5 bg-secondary-500" ></div>
      <div className='container mx-auto px-12 py-20' id="proyectos">
        <ProjectsSection />
      </div>
      <div className=" h-0.5 bg-secondary-500 mt-20"></div>
      <div className='container mx-auto px-12 pb-8' id="contacto">
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
