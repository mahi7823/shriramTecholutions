# Shriram Tech Solutions - Portfolio Website

A modern, production-ready Next.js portfolio website showcasing AI/ML development services and WhatsApp Business API solutions.

## 🚀 Features

- **Modern Stack**: Next.js 13+ with App Router, TypeScript, Tailwind CSS
- **Interactive Demos**: Live demos for AI/ML services (Chatbot, Document Processing, Computer Vision, Predictive Analytics)
- **SEO Optimized**: Complete SEO setup with metadata, structured data, and OpenGraph
- **Production Ready**: Error boundaries, loading states, performance optimizations
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Type Safe**: Full TypeScript implementation
- **Component Architecture**: Well-organized, reusable components

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── common/            # Shared components
│   │   ├── ErrorBoundary.tsx
│   │   └── Loading.tsx
│   ├── demos/             # Interactive demo components
│   │   ├── ChatbotDemo.tsx
│   │   ├── DocumentDemo.tsx
│   │   ├── PredictionDemo.tsx
│   │   ├── VisionDemo.tsx
│   │   ├── DemoModal.tsx
│   │   └── index.ts
│   ├── case-studies/      # Case study components
│   │   ├── CaseStudyCard.tsx
│   │   └── CaseStudiesList.tsx
│   ├── contact/           # Contact section components
│   │   ├── ContactCard.tsx
│   │   ├── ContactButton.tsx
│   │   └── ContactSection.tsx
│   ├── home/              # Homepage components
│   │   └── Hero.tsx
│   ├── layout/            # Layout components
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── SEOHead.tsx
│   └── services/          # Services components
│       ├── ServiceCard.tsx
│       └── ServicesList.tsx
├── data/                  # Static data
│   ├── services.ts
│   └── case-studies.ts
├── styles/                # Global styles
│   └── globals.css
└── types/                 # TypeScript type definitions
    └── index.ts
```

## 🛠️ Technologies Used

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Linting**: ESLint + Prettier
- **Build Tool**: SWC (Speedy Web Compiler)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run lint:check` - Check linting without fixing
- `npm run type-check` - Run TypeScript compiler check
- `npm run build:analyze` - Build with bundle analysis
- `npm run clean` - Clean build directories
- `npm run export` - Export static site

## 🚀 Production Deployment

This project is optimized for production deployment on platforms like:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

### Build Optimizations

- Tree shaking and code splitting
- Image optimization with Next.js Image component
- CSS optimization and minification
- Console log removal in production
- Automatic static optimization
- SEO and performance optimizations

## 🎨 Customization

### Adding New Services

1. Update `src/data/services.ts`:
```typescript
{
  icon: YourIcon,
  title: "Your Service Title",
  tech: "Your Tech Stack",
  description: "Service description",
  demo: "your-demo-type"
}
```

2. Create demo component in `src/components/demos/`
3. Add demo to the modal in `src/app/page.tsx`

### Updating Contact Information

- Update phone numbers and links in:
  - `src/components/contact/ContactSection.tsx`
  - `src/components/layout/Navigation.tsx`
  - `src/components/layout/Footer.tsx`

### SEO Customization

- Update metadata in `src/app/layout.tsx`
- Modify SEO defaults in `src/components/layout/SEOHead.tsx`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with code splitting
- **Loading Speed**: Fast with Next.js optimizations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **WhatsApp**: [+91 7433000131](https://wa.me/917433000131)
- **Email**: contact@shriramtech.com
- **Website**: [shriramtech.com](https://shriramtech.com)

---

**Built with ❤️ by Shriram Tech Solutions**
