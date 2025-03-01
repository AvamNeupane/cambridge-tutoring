
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubjects = () => setIsSubjectsOpen(!isSubjectsOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-tutorBlue" />
              <span className="text-xl font-bold text-tutorBlue">Friendly Tutor</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-tutorBlue transition-colors duration-200">
              Home
            </Link>
            <div className="relative">
              <button 
                onClick={toggleSubjects}
                className="flex items-center text-gray-700 hover:text-tutorBlue transition-colors duration-200"
              >
                Subjects
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isSubjectsOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fade-in">
                  <div className="py-1">
                    <Link 
                      to="/math" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-tutorBlue hover:text-white"
                      onClick={() => setIsSubjectsOpen(false)}
                    >
                      Mathematics
                    </Link>
                    <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                      Science
                    </span>
                    <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                      Social Studies
                    </span>
                    <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                      English
                    </span>
                  </div>
                </div>
              )}
            </div>
            <Link to="/chatbot" className="text-gray-700 hover:text-tutorBlue transition-colors duration-200">
              Chatbot
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-tutorBlue focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link 
              to="/" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-tutorBlue"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <button 
              onClick={toggleSubjects}
              className="flex items-center w-full py-2 text-base font-medium text-gray-700 hover:text-tutorBlue"
            >
              Subjects
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isSubjectsOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSubjectsOpen && (
              <div className="pl-4 space-y-2 animate-slide-in">
                <Link 
                  to="/math" 
                  className="block py-2 text-base font-medium text-gray-700 hover:text-tutorBlue"
                  onClick={toggleMenu}
                >
                  Mathematics
                </Link>
                <span className="block py-2 text-base font-medium text-gray-400 cursor-not-allowed">
                  Science
                </span>
                <span className="block py-2 text-base font-medium text-gray-400 cursor-not-allowed">
                  Social Studies
                </span>
                <span className="block py-2 text-base font-medium text-gray-400 cursor-not-allowed">
                  English
                </span>
              </div>
            )}
            <Link 
              to="/chatbot" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-tutorBlue"
              onClick={toggleMenu}
            >
              Chatbot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
