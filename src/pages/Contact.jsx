import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import HeroSection from "../components/heroSection/HeroSection";
import commercial1 from "../Assets/commercial1.jpg";

function Contact() {
  return (
    <div className="relative bg-white dark:bg-secondary transition-colors duration-200">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${commercial1})` }}
      />
      <div className="relative z-10">
        <HeroSection page={"Contact"} />
        <div className="text-secondary dark:text-white transition-colors duration-200">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default Contact;
