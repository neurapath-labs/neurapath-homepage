# Cloudflare Deployment Guide

This guide walks you through deploying the Neurapath homepage to Cloudflare Workers step by step.

## 🚀 Quick Start

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare:**
   ```bash
   npm run cf:deploy
   ```

That's it! Your site will be live on a `*.workers.dev` subdomain.

## 📋 Prerequisites

Before deploying, ensure you have:

- [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier works)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed globally or as dev dependency
- Domain registered with Cloudflare (optional, for custom domain)

## 🔧 Initial Setup

### 1. Install Wrangler (if not already installed)

```bash
npm install -g wrangler
# or use the project-local version
npx wrangler --version
```

### 2. Authenticate with Cloudflare

```bash
wrangler login
```

This opens your browser to authenticate with your Cloudflare account.

### 3. Verify Authentication

```bash
wrangler whoami
```

Should display your Cloudflare email and account information.

## 🏗️ Configuration

### Wrangler Configuration

The `wrangler.toml` file is already configured for the homepage. Key settings:

```toml
name = "neurapath-homepage"
main = ".svelte-kit/cloudflare/_worker.js"
compatibility_date = "2024-01-15"
compatibility_flags = ["nodejs_compat"]

[build]
command = "npm run build"
```

### Environment-Specific Configuration

#### Development Environment

```bash
npm run cf:deploy  # Deploys to staging environment
```

#### Production Environment

```bash
npm run cf:deploy:prod  # Deploys to production
```

## 🌐 Custom Domain Setup

### 1. Add Domain to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click "Add site"
3. Enter your domain (e.g., `neurapath.com`)
4. Follow the DNS setup instructions

### 2. Update Wrangler Configuration

Edit `wrangler.toml`:

```toml
[env.production]
name = "neurapath-homepage"
routes = [
  { pattern = "neurapath.com/*", zone_name = "neurapath.com" },
  { pattern = "www.neurapath.com/*", zone_name = "neurapath.com" }
]
```

### 3. Deploy with Custom Domain

```bash
npm run cf:deploy:prod
```

## 🔒 Environment Variables

### Setting Environment Variables

#### For Development:

```bash
wrangler secret put ENVIRONMENT --env development
# Enter value: development
```

#### For Production:

```bash
wrangler secret put ENVIRONMENT --env production
# Enter value: production
```

### Managing Secrets

```bash
# List all secrets
wrangler secret list

# Update a secret
wrangler secret put SECRET_NAME

# Delete a secret
wrangler secret delete SECRET_NAME
```

## 📊 Monitoring and Analytics

### Built-in Analytics

Cloudflare provides built-in analytics:
1. Go to Cloudflare Dashboard
2. Navigate to Workers & Pages
3. Click on your worker
4. View analytics and logs

### Custom Analytics

Add analytics to your site by updating environment variables:

```bash
wrangler secret put PUBLIC_GOOGLE_ANALYTICS_ID --env production
```

## 🔄 Development Workflow

### 1. Local Development

```bash
npm run dev
```

### 2. Test Production Build Locally

```bash
npm run build
npm run preview
```

### 3. Test with Wrangler Dev (Local Workers Environment)

```bash
npm run build
npx wrangler dev .svelte-kit/cloudflare/_worker.js
```

### 4. Deploy to Staging

```bash
npm run cf:deploy
```

### 5. Deploy to Production

```bash
npm run cf:deploy:prod
```

## 🚦 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to Cloudflare Workers
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          environment: ${{ github.ref == 'refs/heads/main' && 'production' || 'development' }}
```

### Required Secrets

Add these to your GitHub repository secrets:
- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Workers and Zone permissions

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Fails

```bash
# Clear build artifacts
rm -rf .svelte-kit node_modules
npm install
npm run build
```

#### 2. Deployment Authentication Issues

```bash
# Re-authenticate
wrangler logout
wrangler login
```

#### 3. Domain Not Working

Check DNS settings:
```bash
# Verify DNS propagation
nslookup your-domain.com
dig your-domain.com
```

#### 4. Worker Script Too Large

The built worker script must be under 1MB. If it's too large:

1. Check for unnecessary dependencies
2. Use dynamic imports where possible
3. Optimize images and assets

```bash
# Check worker size
ls -lh .svelte-kit/cloudflare/_worker.js
```

#### 5. 502/503 Errors

Usually indicates a runtime error:

1. Check Cloudflare Dashboard logs
2. Test locally with `wrangler dev`
3. Check for unhandled promises or runtime errors

### Debug Mode

Enable debug logging:

```bash
wrangler dev --local --log-level debug
```

### Viewing Logs

```bash
# Tail logs in real-time
wrangler tail

# Filter logs by status
wrangler tail --status error
```

## 📈 Performance Optimization

### 1. Asset Optimization

- Images are served from Cloudflare's global CDN
- CSS and JS are automatically minified
- Brotli compression is applied

### 2. Caching

Configure caching headers in your SvelteKit app:

```javascript
// src/hooks.server.js
export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (event.url.pathname.startsWith('/images/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return response;
}
```

### 3. Edge Locations

Your site is automatically deployed to 300+ Cloudflare edge locations worldwide.

## 🔐 Security

### Headers

Cloudflare automatically adds security headers:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

### SSL/TLS

- Automatic HTTPS redirects
- TLS 1.3 support
- HSTS headers

### Rate Limiting

Configure rate limiting in Cloudflare Dashboard if needed.

## 🎯 Best Practices

1. **Always test locally first**: `npm run build && npm run preview`
2. **Use staging environment**: Deploy to development before production
3. **Monitor performance**: Check Core Web Vitals regularly
4. **Keep dependencies updated**: Regular security updates
5. **Use environment variables**: Never hardcode secrets
6. **Monitor error rates**: Set up alerts for 5xx errors
7. **Regular backups**: Keep your code in version control

## 📞 Support

If you encounter issues:

1. Check [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
2. Review [SvelteKit adapter-cloudflare docs](https://kit.svelte.dev/docs/adapter-cloudflare)
3. Search [Cloudflare Community](https://community.cloudflare.com/)
4. Contact support at hello@neurapath.com

## 📝 Deployment Checklist

Before going live:

- [ ] Build completes successfully
- [ ] All assets load correctly
- [ ] Custom domain configured (if applicable)
- [ ] Environment variables set
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Error monitoring set up
- [ ] Performance tested
- [ ] SEO meta tags verified
- [ ] Mobile responsiveness checked

---

🎉 **You're all set!** Your Neurapath homepage is now running on Cloudflare's global edge network.
