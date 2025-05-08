import AboutUs from "../components/AboutUs";
import ClientTestimonials from "../components/ClientTestimonials";
import WhoWeAre from "../components/about/WhoWeAre";
import HeroSection from "../components/heroSection/HeroSection";

function About() {
  return (
    <div className="bg-white dark:bg-secondary transition-colors duration-200">
      <HeroSection page={"About"} />
      <WhoWeAre />
      <ClientTestimonials />
      <AboutUs />
    </div>
  );
}

export default About;
