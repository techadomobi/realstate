import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const navLinks = ['Home', 'Projects', 'About', 'Why Us', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+1 234 567 890</span>
            </a>
            <a href="mailto:info@realstate.com" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">info@realstate.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">Premium Residential & Commercial Spaces</div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                RealState
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                >
                  {link}
                </button>
              ))}
              <button className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-all transform hover:scale-105">
                Schedule Visit
              </button>
            </nav>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors text-left py-2"
                >
                  {link}
                </button>
              ))}
              <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-all w-full">
                Schedule Visit
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
