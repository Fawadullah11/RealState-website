import { Link } from "react-router-dom";
import { footerIcons, headerData } from "../data/data";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import Container from "./Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Real Estate</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property. We specialize in residential, commercial, and investment properties.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/kfawad2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray hover:text-primary transition-colors duration-200"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/fawad-ullah-433064244/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/fawadkhan7395/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Karachi, Pakistan</li>
              <li>Phone: <a href="tel:+923174724221" className="text-gray-400 hover:text-primary transition-colors">+923174724221</a></li>
              <li>Email: <a href="mailto:fawadullah1996@gmail.com" className="text-gray-400 hover:text-primary transition-colors">fawadullah1996@gmail.com</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and property listings.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
