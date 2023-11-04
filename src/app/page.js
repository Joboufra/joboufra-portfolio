import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import NavBarScroll from './components/NavBarScroll';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="flex min-h-screen h-screen z-10 flex-col bg-[#121212] overflow-y-scroll 
    scrollbar-thin scrollbar-track-primary/20 scrollbar-thumb-secondary-500/80 " >
      <NavBarScroll /> 
      <section className='container mx-auto px-12 py-16' id="inicio">
        <HeroSection />
      </section>
      <section className='mt-14'>
        <SkillsSection />
      </section>

      <section>
        <div className=" h-0.5 bg-secondary-500"></div>
      </section>

      <section className="container mx-auto px-12 py-20" id="proyectos">
        <ProjectsSection />
      </section>
      
      <section>
        <div className=" h-0.5 bg-secondary-500"></div>
      </section>     

      <section id="trayectoria">
        <ExperienceSection /> 
      </section>

      <section>
        <div className=" h-0.5 bg-secondary-500"></div>
      </section>
      
      <section className='container mx-auto px-12 pb-8' id="contacto">
        <EmailSection />
      </section>
      <Footer />
    </main>
  );
}
