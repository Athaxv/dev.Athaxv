# Portfolio · [![GitHub License](https://img.shields.io/github/license/Athaxv/dev.profile?label=License)](https://github.com/Athaxv/dev.profile/blob/main/LICENSE)

A minimal, pixel-perfect dev portfolio showcasing my work as a Fullstack Developer.

→ Check out the live site: [athaxv.me](https://athaxv.me)

## Overview

### Stack

- **Next.js 16** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D snowfall animation background

### Featured

- ✨ **Clean & Modern Design** - Minimalist UI with attention to detail
- 🌓 **Light/Dark Themes** - Seamless theme switching with system preference detection
- ❄️ **Interactive Snowfall Animation** - Beautiful 3D pixelated snowfall effect using Three.js
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🔍 **SEO Optimized** - JSON-LD schema, sitemap, robots.txt, and meta tags
- 📄 **vCard Integration** - Download contact information as vCard
- 🎯 **Command Menu** - Quick navigation with keyboard shortcuts (⌘K)
- 📊 **GitHub Integration** - Live star count and contribution tracking
- 🎨 **Component Registry** - Reusable components powered by shadcn CLI
- 📈 **Analytics Ready** - PostHog integration with consent management

### Portfolio Sections

- **About** - Personal introduction and bio
- **Experience** - Work history and professional journey
- **Projects** - Showcase of notable projects and contributions
- **Certifications** - Professional certifications and achievements
- **GitHub Activity** - Recent contributions and activity
- **Recent PRs** - Latest pull requests and open source work
- **Social Links** - Connect on GitHub, Twitter, LinkedIn, and more

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm >= 9

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Athaxv/dev.profile.git
cd dev.profile
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

Copy `.env.example` to `.env` and fill in the required values:

```bash
cp .env.example .env
```

Required environment variables:

```env
# Application
APP_URL=https://safeedaadmi.dev

# Registry Configuration
REGISTRY_NAMESPACE=@athaxv
REGISTRY_NAMESPACE_URL=https://safeedaadmi.dev/r/{name}.json

# GitHub API (for star count and contributions)
GITHUB_API_TOKEN=your_github_token_here

# Analytics (Optional)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://ph.yourdomain.com
NEXT_PUBLIC_POSTHOG_UI_HOST=https://us.i.posthog.com
```

4. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:1408](http://localhost:1408) in your browser.

## Development

### Available Scripts

- `pnpm dev` - Start development server on port 1408
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm preview` - Build and preview locally
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm check-types` - Type check with TypeScript
- `pnpm format:check` - Check code formatting
- `pnpm format:write` - Format code with Prettier
- `pnpm registry:build` - Build component registry

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (app)/             # Main application routes
│   ├── (llms)/            # LLM-friendly endpoints
│   └── layout.tsx         # Root layout
├── components/            # Shared UI components
│   ├── ui/                # shadcn/ui components
│   └── ...
├── features/              # Feature-based modules
│   ├── portfolio/         # Portfolio-specific components
│   └── blog/              # Blog functionality
├── config/                # Configuration files
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── registry/              # Component registry
└── styles/                # Global styles
```

### Customization

#### Update Personal Information

Edit the following files to customize your portfolio:

- `src/features/portfolio/data/user.ts` - Personal info, bio, contact details
- `src/features/portfolio/data/experiences.ts` - Work experience
- `src/features/portfolio/data/projects.ts` - Portfolio projects
- `src/features/portfolio/data/certifications.ts` - Certifications
- `src/features/portfolio/data/social-links.ts` - Social media links
- `src/config/site.ts` - Site configuration and URLs

#### Update Logo

Replace `public/images/ipsum.svg` with your logo. The logo component is located at `src/components/site-header-mark.tsx`.

#### Customize Theme

Theme colors can be customized in `src/config/site.ts`:

```typescript
export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
```

## Features in Detail

### Snowfall Animation

The portfolio features a beautiful 3D snowfall animation built with Three.js. The animation:

- Adapts to light/dark themes
- Configurable density, speed, and appearance
- Optimized for performance with WebGL
- Gracefully degrades if WebGL is unavailable

Configuration can be adjusted in `src/components/snowfall-background.tsx`.

### Command Menu

Press `⌘K` (or `Ctrl+K`) to open the command menu for quick navigation. The menu includes:

- Portfolio sections
- Social links
- Keyboard shortcuts

### Component Registry

The project includes a component registry system powered by shadcn CLI, allowing you to:

- Build reusable components
- Distribute components via JSON endpoints
- Include live previews and code snippets

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

The project is optimized for Vercel with automatic deployments on push.

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Render
- Self-hosted with Node.js

## License

Licensed under the [MIT license](./LICENSE).

You're free to use this code! Just make sure to **remove all personal information** before publishing your website.

## Technologies Used

- [React](https://react.dev) - UI library
- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Radix UI](https://www.radix-ui.com) - Unstyled UI primitives
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Framer Motion](https://motion.dev) - Animation library
- [Three.js](https://threejs.org) - 3D graphics library
- [Lucide](https://lucide.dev) - Icon library
- [PostHog](https://posthog.com) - Analytics platform
- And many other open-source libraries

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- **Website**: [athaxv.me](https://athaxv.me)
- **GitHub**: [@Athaxv](https://github.com/Athaxv)
- **Twitter**: [@Athaxv05](https://x.com/Athaxv05)
- **LinkedIn**: [Atharv Gaur](https://www.linkedin.com/in/athaxv/)

---

Made with ❤️ by [Atharv Gaur](https://github.com/Athaxv)
