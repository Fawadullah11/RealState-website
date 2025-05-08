import { useState } from 'react';
import Container from './Container';
import Button from './Button';
import { FaFacebook, FaTwitter, FaLinkedin, FaShare } from 'react-icons/fa';

const blogData = [
  {
    id: 1,
    title: "Real Estate Market Trends 2024",
    excerpt: "Discover the latest trends shaping the real estate market in 2024, from sustainable living to smart home technology.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
    date: "March 15, 2024",
    category: "Market Insights",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "First-Time Home Buyer's Guide",
    excerpt: "Everything you need to know about buying your first home, from saving for a down payment to closing the deal.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
    date: "March 10, 2024",
    category: "Buying Tips",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Top Neighborhoods in New Cairo",
    excerpt: "Explore the most sought-after neighborhoods in New Cairo, featuring amenities, schools, and lifestyle options.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
    date: "March 5, 2024",
    category: "Neighborhood Guide",
    readTime: "6 min read"
  }
];

function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleShare = (platform, url) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`
    };
    window.open(shareUrls[platform], '_blank');
  };

  return (
    <section className="py-20 bg-secondary text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay informed with our expert analysis, market insights, and helpful guides for your real estate journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-300 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <Button>Read More</Button>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleShare('facebook', window.location.href)}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      <FaFacebook size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('twitter', window.location.href)}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      <FaTwitter size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin', window.location.href)}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="px-8">View All Articles</Button>
        </div>
      </Container>
    </section>
  );
}

export default BlogSection; 