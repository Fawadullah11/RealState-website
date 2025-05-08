import HeroSection from "../components/home/HeroSection";
import ClientTestimonials from "../components/ClientTestimonials";
import ProjectsSection from "../components/home/ProjectsSection";
import AboutUs from "../components/AboutUs";
import RequestCallback from "../components/RequestCallback";
import BlogSection from "../components/BlogSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <ClientTestimonials />
      <ProjectsSection />
      <BlogSection />
      <AboutUs />
      <RequestCallback />
    </div>
  );
}

export default Home;
