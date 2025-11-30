# Neurapath Homepage

> Beautiful and powerful learning based on scientific methods

A modern, responsive homepage for Neurapath - an innovative learning platform that leverages scientific methods like spaced repetition and active recall to enhance educational outcomes.

## 🚀 Features

- **Scientific Learning Methods**: Built on proven educational research including spaced repetition and active recall
- **Flashcards & Cloze Deletions**: Advanced learning tools for knowledge retention
- **Modern UI/UX**: Clean, responsive design built with SvelteKit and TailwindCSS
- **Fast Performance**: Optimized for speed with Vite and deployed on Cloudflare Pages
- **Mobile-First**: Fully responsive design that works on all devices
- **TypeScript**: Type-safe development experience

## 🛠️ Tech Stack

- **Framework**: [SvelteKit 2.26+](https://kit.svelte.dev/) with [Svelte 5.36+](https://svelte.dev/)
- **Styling**: [TailwindCSS 4.1+](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (rolldown-vite)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Icons**: [Lucide Svelte](https://lucide.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)
- **Git**

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/neurapath-labs/neurapath-homepage.git
   cd neurapath-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

> **Note**: You may see a warning about experimental rolldown-vite support. This is expected and doesn't affect functionality.

## 🔧 Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run check` | Run Svelte type checking |
| `npm run check:watch` | Run type checking in watch mode |
| `npm run cf:dev` | Start Cloudflare Pages local development |
| `npm run cf:deploy` | Deploy to Cloudflare Pages (staging) |
| `npm run cf:deploy:prod` | Deploy to Cloudflare Pages (production) |

### Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable Svelte components
│   │   ├── ui/             # UI component library
│   │   └── Header.svelte   # Site header component
│   ├── index.ts            # Library exports
│   └── utils.ts            # Utility functions
├── routes/
│   ├── +layout.svelte      # Root layout
│   └── +page.svelte        # Homepage
├── app.css                 # Global styles
├── app.d.ts                # TypeScript declarations
└── app.html                # HTML template
```

### Component Development

The project uses a component-based architecture with:

- **Reusable UI Components**: Located in `src/lib/components/ui/`
- **Page Components**: Located in `src/routes/`
- **Shared Components**: Located in `src/lib/components/`

### Styling Guidelines

- Use TailwindCSS utility classes for styling
- Follow mobile-first responsive design principles
- Maintain consistency with the existing design system
- Use CSS custom properties for theme variables when needed

## 🌍 Environment Configuration

Copy `.env.example` to `.env` and configure the following variables:

### Required Variables
```bash
NODE_ENV=development
ENVIRONMENT=development
PUBLIC_SITE_URL=http://localhost:5173
PUBLIC_SITE_NAME=Neurapath
PUBLIC_CONTACT_EMAIL=hello@neurapath.shop
```

### Optional Variables
- **Analytics**: Google Analytics, Plausible, Mixpanel
- **Social Media**: Twitter, LinkedIn, GitHub URLs
- **Marketing**: HubSpot, Mailchimp, ConvertKit integration
- **Monitoring**: Sentry, Vercel Analytics

See `.env.example` for the complete list of available configuration options.

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to staging**
   ```bash
   npm run cf:deploy
   ```

3. **Deploy to production**
   ```bash
   npm run cf:deploy:prod
   ```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.svelte-kit/cloudflare` directory to your hosting provider
3. Configure your server to serve the files with proper headers

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   npm run check
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Svelte conventions and best practices
- Maintain responsive design principles
- Write clear, descriptive commit messages
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Author**: Martin Jakobsson ([@neurapath](https://github.com/neurapath))  
**Email**: hello@neurapath.shop

## 🔗 Links

- [Neurapath Website](https://neurapath.shop)
- [Documentation](https://docs.neurapath.shop)
- [Support](mailto:support@neurapath.shop)

## 📸 Screenshots

The project includes various screenshots in the `Screenshots/` directory showcasing the application's UI and features.

---

<div align="center">

**[Website](https://neurapath.shop)** • **[Documentation](https://docs.neurapath.shop)** • **[Support](mailto:support@neurapath.shop)**

Made with ❤️ by the Neurapath team

</div>