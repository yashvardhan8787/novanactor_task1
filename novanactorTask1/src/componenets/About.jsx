const About = () => {
    return (
      <div className="bg-teal-700 text-white">
        {/* Hero Section */}
        <div className="bg-teal-700 py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1> {/* Increased font size */}
            <p className="text-xl text-gray-300"> {/* Slightly larger text */}
              Discover our journey, mission, and what we stand for.
            </p>
          </div>
        </div>
  
        {/* About Content Section */}
        <div className="bg-teal-700 container mx-auto py-4">
          <div className="items-center">
            {/* Text Section */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2> {/* Larger subheading */}
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                We are passionate individuals dedicated to delivering the best
                solutions for our clients. Our commitment to innovation and
                excellence drives everything we do.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Over the years, we have worked with diverse industries, gaining
                valuable insights and expertise that empower us to meet the
                challenges of today and tomorrow.
              </p>
            </div>
          </div>
        </div>
  
        {/* Mission Section */}
        <div className="bg-teal-700 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2> {/* Increased font size */}
            <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our mission is to create impactful solutions that empower businesses
              and individuals to achieve their goals. We strive to deliver value
              through collaboration, creativity, and cutting-edge technologies.
            </p>
          </div>
        </div>
  
        {/* Call to Action Section */}
        <div className="bg-teal-700 py-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2> {/* Larger call-to-action */}
            <p className="text-lg text-gray-300 mb-6">
              Contact us today to learn how we can help you achieve your goals.
            </p>
            <a
              href="/contact"
              className="bg-teal-500 hover:bg-teal-400 text-white py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  