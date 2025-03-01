
import { Link } from 'react-router-dom';
import { BookOpen, Users, Heart, Handshake } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tutorBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <h3 className="text-xl font-bold">Friendly Tutor</h3>
            </div>
            <p className="text-tutorBlue-light">
              Empowering students with personalized learning experiences
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Avam Neupane. All rights reserved.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <h3 className="text-lg font-semibold">About Us</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-tutorBlue-light">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline text-tutorBlue-light">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline text-tutorBlue-light">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Our Partners</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openstax.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-tutorBlue-light"
                >
                  OpenStax
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline text-tutorBlue-light"
                >
                  Local Schools
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline text-tutorBlue-light"
                >
                  Educational Programs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Handshake className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Contact Us</h3>
            </div>
            <address className="not-italic text-tutorBlue-light">
              2000 Simcoe St N<br />
              Oshawa, ON L1G 0C5
            </address>
            <p className="text-tutorBlue-light">
              Email: contact@friendlytutor.com<br />
              Phone: (905) 555-1234
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
