import { Shield, Clock, Leaf, Star, Wallet, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Brand',
    description: 'Over 25 years of delivering quality homes with transparent dealings and ethical business practices.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Commitment to on-time project completion with a track record of delivering before scheduled dates.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Living',
    description: 'Eco-friendly designs with green spaces, rainwater harvesting, and energy-efficient systems.',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Superior construction quality using best-in-class materials and international standards.',
  },
  {
    icon: Wallet,
    title: 'Best Value',
    description: 'Competitive pricing with flexible payment plans and transparent cost structure.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer support team to assist you at every step of your home buying journey.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose RealState
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-amber-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h3>
          <p className="text-xl mb-8 text-amber-50">
            Join thousands of happy families who chose RealState for their dream homes
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Schedule a Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}
