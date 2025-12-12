import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import NavBarScroll from './components/NavBarScroll';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col overflow-y-scroll bg-transparent scrollbar-thin scrollbar-track-primary/10 scrollbar-thumb-secondary-500/70">
      <NavBarScroll />

      <section className="container mx-auto px-6 pb-20 pt-12 sm:px-10 lg:px-16" id="inicio">
        <HeroSection />
      </section>

      <section className="bg-white/5" aria-label="Skills y stack">
        <div className="container mx-auto px-6 py-16 sm:px-10 lg:px-16">
          <SkillsSection />
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 sm:px-10 lg:px-16" id="proyectos">
        <ProjectsSection />
      </section>

      <section className="bg-white/5" id="trayectoria">
        <ExperienceSection />
      </section>

      <section className="container mx-auto px-6 pb-16 pt-12 sm:px-10 lg:px-16" id="contacto">
        <EmailSection />
      </section>
      <Footer />
    </main>
  );
}
