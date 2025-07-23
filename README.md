# Neurapath Homepage

A beautiful and modern homepage for Neurapath, built with SvelteKit and optimized for deployment on Cloudflare Workers.

## 🚀 Features

- **SvelteKit Framework**: Modern, fast, and developer-friendly
- **Cloudflare Workers**: Edge-deployed for global performance
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **TypeScript Support**: Type-safe development
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance Focused**: Optimized for Core Web Vitals

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) for Cloudflare deployment

```bash
npm install -g wrangler
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neurapath-homepage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
```bash
cp .env.example .env
# Edit .env with your configuration
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript checks
- `npm run check:watch` - Run TypeScript checks in watch mode

## 🚀 Deployment

### Cloudflare Workers Deployment

1. **Login to Cloudflare:**
```bash
wrangler login
```

2. **Configure your domain (optional):**
Edit `wrangler.toml` to set up your custom domain:
```toml
[env.production]
name = "neurapath-homepage"
routes = [
  { pattern = "your-domain.com/*", zone_name = "your-domain.com" },
  { pattern = "www.your-domain.com/*", zone_name = "your-domain.com" }
]
```

3. **Deploy to development:**
```bash
npm run cf:deploy
```

4. **Deploy to production:**
```bash
npm run cf:deploy:prod
```

### Cloudflare Pages (Alternative)

You can also deploy using Cloudflare Pages:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `.svelte-kit/cloudflare`
4. Deploy

## 📁 Project Structure

```
neurapath-homepage/
├── src/
│   ├── app.html              # Main HTML template
│   ├── routes/
│   │   └── +page.svelte      # Homepage component
│   └── lib/
│       └── components/       # Reusable components
├── static/
│   ├── images/               # SVG icons and images
├── wrangler.toml            # Cloudflare Workers configuration
├── svelte.config.js         # SvelteKit configuration
└── package.json             # Dependencies and scripts
```

## ⚙️ Configuration

### Cloudflare Workers Configuration

The `wrangler.toml` file contains the configuration for Cloudflare Workers deployment:

- **Compatibility Date**: Set to ensure consistent behavior
- **Build Command**: Automatically builds the project before deployment
- **Environment Variables**: Configure production and development environments

### SvelteKit Configuration

The `svelte.config.js` uses the Cloudflare adapter:

```javascript
import adapter from "@sveltejs/adapter-cloudflare";

const config = {
  kit: {
    adapter: adapter({
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
  },
};
```

## 🎨 Customization

### Styling

The application uses component-scoped CSS. Global styles can be added to `src/app.html` or using `:global()` selectors in Svelte components.

### Content

Update the content in `src/routes/+page.svelte`:

- Hero section text
- Feature descriptions
- Testimonials
- Footer links and information

### Assets

Replace assets in the `static/` directory:

- `static/images/logotype.svg` - Main logo
- `static/images/` - Feature icons
- Add favicon and other static assets as needed

## 🔍 SEO and Meta Tags

Meta tags are configured in:

1. `src/app.html` - Global meta tags
2. `src/routes/+page.svelte` - Page-specific meta tags using `<svelte:head>`

Update these with your actual content and URLs.

## 🐛 Troubleshooting

### Build Issues

1. **TypeScript errors**: Run `npm run check` to see detailed TypeScript errors
2. **Missing dependencies**: Delete `node_modules` and `package-lock.json`, then run `npm install`

### Deployment Issues

1. **Wrangler authentication**: Make sure you're logged in with `wrangler login`
2. **Build output**: Ensure `.svelte-kit/cloudflare` directory exists after build
3. **Environment variables**: Check that all required environment variables are set

### Performance

1. **Image optimization**: Consider using WebP format for images
2. **Bundle analysis**: Use `npm run build` and check the output size
3. **Core Web Vitals**: Test with Lighthouse or PageSpeed Insights

## 📚 Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 👨‍💻 Author

**Martin Jakobsson**
- Email: hello@neurapath.com
- Website: [www.neurapath.com](https://www.neurapath.com)

---

Made with ♥ in Sweden
