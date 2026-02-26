# Real Estate Website

A modern, responsive real estate website built with React, TypeScript, and Vite. This project showcases property listings, company information, and contact functionality with a clean, professional design.

## 🏠 Features

- **Modern Design**: Clean, responsive layout with smooth animations
- **Property Showcase**: Featured projects section highlighting key properties
- **Company Information**: About section and "Why Choose Us" features
- **Client Testimonials**: Customer reviews and feedback section
- **Contact Form**: Functional contact form with Supabase integration
- **Mobile-First**: Fully responsive design that works on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (for contact form)
- **Linting**: ESLint with TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Yashika-code/realstate_clicksmeta.git
cd realstate_clicksmeta
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
realstate/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with call-to-action
│   │   ├── FeaturedProjects.tsx  # Property showcase
│   │   ├── About.tsx        # Company information
│   │   ├── WhyChooseUs.tsx  # Features and benefits
│   │   ├── Testimonials.tsx # Client reviews
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer with links
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Components

### Header
- Responsive navigation with mobile menu
- Logo and navigation links
- Contact button for quick access

### Hero
- Eye-catching hero section with background image
- Company tagline and description
- Call-to-action buttons

### Featured Projects
- Grid layout showcasing properties
- Property images, titles, and descriptions
- View details functionality

### About
- Company overview and mission
- Professional team introduction
- Company values and commitment

### Why Choose Us
- Feature cards highlighting company strengths
- Professional expertise, quality service, competitive pricing
- Customer satisfaction guarantee

### Testimonials
- Client review cards with ratings
- Customer photos and feedback
- Trust-building social proof

### Contact
- Contact form with Supabase integration
- Company contact information
- Social media links

## 🔧 Configuration

### Environment Variables

To use the contact form with Supabase, create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a table for contact form submissions
3. Set up the necessary permissions and API keys
4. Update the environment variables

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The website is built with a mobile-first approach and includes responsive design for:
- Mobile devices (320px - 768px)
- Tablets (768px - 1024px)
- Desktop (1024px and above)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Contact

For questions, suggestions, or support, please contact us through the contact form on the website or create an issue in this repository.

---

**Real Estate Website** - Making property dreams come true! 🏡