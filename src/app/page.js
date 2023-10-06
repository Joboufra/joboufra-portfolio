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
      <section className='container mx-auto px-12 py-16'>
        <HeroSection />
      </section>
      <section className='mt-14'>
        <SkillsSection />
      </section>

      <div className=" h-0.5 bg-secondary-500"></div>

      <section className="container mx-auto px-12 py-20" id="proyectos">
        <ProjectsSection />
      </section>

      <div className=" h-0.5 bg-secondary-500"></div>

      <section id="trayectoria">
      <ExperienceSection /> 
      </section>

      <div className=" h-0.5 bg-secondary-500"></div>

      <section className='container mx-auto px-12 pb-8' id="contacto">
        <EmailSection />
      </section>
      <Footer />
    </main>
  );
}
