import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className=" bg-teal-800 text-white py-6">
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-center items-center">
            <div className=" lg:mb-0">
              <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-teal-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-300">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-300">Contact</Link>
              </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className=" text-center text-sm">
            <p>&copy; 2025 yash vadrhan singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  