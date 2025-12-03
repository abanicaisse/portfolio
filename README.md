# Web Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI components.

## Features

- ✨ **Modern Stack**: Built with Next.js 15 App Router, TypeScript, and Tailwind CSS
- 🎨 **Beautiful UI**: Dark theme with neon accents and smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Server-side rendering and automatic code splitting
- 🎯 **Interactive Components**: Carousels, filters, forms, and smooth scrolling
- 🖼️ **Optimized Images**: Automatic image optimization with Next.js Image component
- ♿ **Accessible**: Built with accessibility best practices
- 🔧 **Type-Safe**: Full TypeScript support for better developer experience

## Sections

1. **Hero** - Eye-catching introduction with stats and social links
2. **About** - Overview of skills and work process
3. **Skills** - Interactive showcase of technical expertise
4. **Projects** - Filterable portfolio of completed work
5. **Blog** - Featured articles and latest posts
6. **Contact** - Contact form and information

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Ready for [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server with hot-reload at http://localhost:3000

### Build

```bash
npm run build
```

Creates an optimized production build

### Start

```bash
npm run start
```

Runs the production build locally

### Lint

```bash
npm run lint
```

Runs ESLint to check for code quality issues

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Projects portfolio
│   ├── Blog.tsx          # Blog section
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer
│   ├── ui/               # ShadCN UI components
│   └── figma/            # Custom components
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Colors

The color scheme can be customized in `app/globals.css` by modifying the CSS custom properties.

### Content

- Update component files in `/components` to change section content
- Modify metadata in `app/layout.tsx` for SEO
- Replace images with your own assets

### Components

ShadCN UI components are located in `components/ui/`. You can add more components using:

```bash
npx shadcn-ui@latest add [component-name]
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Google Cloud Run
- Self-hosted with Docker

## Performance

- **Server-Side Rendering**: Initial page load is server-rendered for fast first contentful paint
- **Automatic Code Splitting**: Next.js splits code by route automatically
- **Image Optimization**: Images are automatically optimized and served in modern formats
- **Static Generation**: Pages are statically generated at build time

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Migration

This project was migrated from Vite to Next.js. See [MIGRATION.md](./MIGRATION.md) for details.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspiration from modern portfolio trends
- UI components from [ShadCN UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

## Contact

For questions or feedback, feel free to reach out through the contact form on the website.
