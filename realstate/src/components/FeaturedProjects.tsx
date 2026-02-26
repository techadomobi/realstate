import { MapPin, Home, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'RealState Heights',
    location: 'Downtown Manhattan, NY',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: '3 & 4 BHK Apartments',
    status: 'Ready to Move',
    price: 'Starting Rs. 7.5 Cr',
  },
  {
    id: 2,
    name: 'RealState Garden City',
    location: 'Beverly Hills, CA',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: '2 & 3 BHK Apartments',
    status: 'Under Construction',
    price: 'Starting Rs. 5.2 Cr',
  },
  {
    id: 3,
    name: 'RealState Elite',
    location: 'Miami Beach, FL',
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: '4 & 5 BHK Villas',
    status: 'New Launch',
    price: 'Starting Rs. 10.8 Cr',
  },
  {
    id: 4,
    name: 'RealState Skyline',
    location: 'Chicago, IL',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: '2, 3 & 4 BHK',
    status: 'Ready to Move',
    price: 'Starting Rs. 4.6 Cr',
  },
  {
    id: 5,
    name: 'RealState Oasis',
    location: 'Scottsdale, AZ',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: '3 & 4 BHK Apartments',
    status: 'Under Construction',
    price: 'Starting Rs. 3.9 Cr',
  },
  {
    id: 6,
    name: 'RealState Waterfront',
    location: 'Seattle, WA',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: '2 & 3 BHK Apartments',
    status: 'New Launch',
    price: 'Starting Rs. 5.8 Cr',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of premium residential and commercial developments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-2 text-amber-600" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <Home size={16} className="mr-2 text-amber-600" />
                  <span>{project.type}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={16} className="mr-2 text-amber-600" />
                  <span className="text-xl font-bold text-amber-600">{project.price}</span>
                </div>
                <button className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition-colors font-semibold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
