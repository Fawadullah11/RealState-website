import { contactInfoData } from "../../data/data";
import Container from "../Container";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <Container>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-[10px] gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <FaMapMarkerAlt className="text-primary text-2xl" />
          <p className="text-gray sm:text-sm text-xs hover:text-primary">
            Karachi, Pakistan
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <FaPhone className="text-primary text-2xl" />
          <p className="text-gray sm:text-sm text-xs hover:text-primary">
            +923174724221
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <FaEnvelope className="text-primary text-2xl" />
              <p className="text-gray sm:text-sm text-xs hover:text-primary">
            fawadullah1996@gmail.com
              </p>
            </div>
      </div>
    </Container>
  );
}

export default ContactInfo;
