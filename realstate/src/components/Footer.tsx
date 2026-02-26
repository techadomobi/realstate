import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              RealState
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Building dreams and creating landmarks for over 25 years. Your trusted partner in finding the perfect home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Our Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Ongoing Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Completed Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Residential Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Commercial Spaces</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Investment Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Home Loans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Customer Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Business Avenue, Suite 500, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-amber-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-amber-500 transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-amber-500 flex-shrink-0" />
                <a href="mailto:info@realstate.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                  info@realstate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} RealState. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
