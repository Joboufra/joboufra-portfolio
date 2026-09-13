import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import NavBarScroll from './components/NavBarScroll';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import TechCarousel from './components/TechCarousel';
import AmbientBackground from './components/AmbientBackground';
import PublicationsSection from './components/PublicationsSection';

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <main className="relative z-10 min-h-screen overflow-x-hidden">
      <NavBarScroll />

      <section id="inicio" className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-24 lg:pt-20">
        <HeroSection />
      </section>

      <TechCarousel />

      <section id="trayectoria" className="section-shell">
        <ExperienceSection />
      </section>

      <section id="proyectos" className="section-shell">
        <ProjectsSection />
      </section>

      <section id="publicaciones" className="section-shell">
        <PublicationsSection />
      </section>

      <section id="contacto" className="section-shell">
        <EmailSection />
      </section>

      <Footer />
      </main>
    </>
  );
}
