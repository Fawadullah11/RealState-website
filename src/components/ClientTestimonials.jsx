import Container from './Container';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    rating: 5,
    review: "The team at Real Estate made my home buying experience seamless. Their expertise in the market and attention to detail helped me find my dream home.",
    location: "New Cairo"
  },
  {
    id: 2,
    name: "Sarah Hassan",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    rating: 5,
    review: "I've invested in multiple properties through Real Estate, and their market insights have been invaluable. Their professionalism and knowledge are unmatched.",
    location: "Cairo"
  },
  {
    id: 3,
    name: "Mohammed Ali",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    rating: 5,
    review: "As a first-time buyer, I was nervous about the process. The team guided me through every step and made it stress-free. Highly recommended!",
    location: "Giza"
  }
];

function ClientTestimonials() {
  return (
    <section className="py-20 bg-secondary text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
              <div
              key={testimonial.id}
              className="bg-gray-800 p-8 rounded-lg relative shadow-lg"
            >
              <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full p-3">
                <FaQuoteLeft size={24} />
              </div>

              <div className="flex items-start mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1.5">
                    <FaStar className="text-xs" />
                  </div>
                </div>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-300">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
                </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 relative z-10">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ClientTestimonials;
