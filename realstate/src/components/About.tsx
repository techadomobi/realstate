import { Award, Users, Building2, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Building2, value: '150+', label: 'Projects Delivered' },
  { icon: Users, value: '50K+', label: 'Happy Families' },
  { icon: Award, value: '75+', label: 'Awards Won' },
  { icon: TrendingUp, value: '25+', label: 'Years of Excellence' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Dreams, Creating Landmarks
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              RealState is a leading real estate developer committed to creating exceptional living spaces that combine luxury, comfort, and sustainability. With over 25 years of experience, we have transformed the urban landscape with our innovative designs and superior construction quality.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our portfolio includes premium residential complexes, commercial spaces, and integrated townships that set new benchmarks in quality and design. Every project reflects our commitment to excellence and customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in creating not just buildings, but complete communities where families thrive and businesses flourish. Our focus on timely delivery, transparent dealings, and world-class amenities has made us the preferred choice for discerning homebuyers.
            </p>
            <button className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern Architecture"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-8 rounded-lg shadow-xl">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Years of Trust</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Icon className="text-amber-600" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
