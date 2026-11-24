import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#000412] text-[#E8EEF2] selection:bg-accent selection:text-[#000412]">
      {/* Header & Navigation */}
      <Navbar />

      <main className="relative bg-[#000412]">
        {/* Hero Section */}
        <Hero />

        {/* About Me & Principles */}
        <AboutSection />

        {/* Services & Capabilities */}
        <ServicesSection />

        {/* Real-World Projects Showcase */}
        <ProjectsSection />

        {/* Career Experience & Education */}
        <ExperienceTimeline />

        {/* Contact Form & Availability */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
