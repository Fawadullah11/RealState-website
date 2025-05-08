import HeroSection from "../components/heroSection/HeroSection";
import ProjectsComponent from "../components/Projects";
import ClientTestimonials from "../components/ClientTestimonials";

function Projects() {
  return (
    <>
      <HeroSection page={"Projects"} />
      <ProjectsComponent />
      <ClientTestimonials />
    </>
  );
}

export default Projects;
