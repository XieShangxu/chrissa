# Instructions for Chrissa's Portfolio Website

This document provides detailed instructions for setting up and running Chrissa's portfolio website.

## Project Overview

This project is a Next.js application built with:

- Next.js 14.1.0 with App Router architecture
- React 18.2.0
- TypeScript
- Tailwind CSS for styling

## Prerequisites

- Node.js version 20.11.0 or later
- npm (comes with Node.js)

## Installation

1. Make sure you have Node.js v20.11.0 or later installed:

```bash
node -v
```

2. Install project dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

This project uses the new App Router architecture introduced in Next.js 13+:

```
src/
├── app/                # App Router directory (new in Next.js 13+)
│   ├── components/     # React components
│   ├── layout.tsx      # Root layout (applies to all routes)
│   ├── page.tsx        # Home page
│   └── favicon.ico     # Favicon for the site
├── styles/             # Global styles
└── public/             # Static assets
```

The App Router uses a folder-based routing system. Each folder under `app/` becomes a route, and a `page.tsx` file inside a folder makes that route accessible.

## Customizing Content

You can personalize the website by:

1. Editing the content in `src/app/page.tsx`
2. Replacing placeholder images in the `public/` folder
3. Changing colors in `tailwind.config.js`

## Understanding the "use client" Directive

You'll notice that some components have a `"use client"` directive at the top. This is because Next.js App Router uses React Server Components by default. Components that:

- Use hooks like `useState` or `useEffect`
- Need browser APIs
- Need interactivity

must be marked with `"use client"` to tell Next.js they should be rendered on the client.

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deploying the Website

You can deploy this website to Vercel by following these steps:

1. Create a GitHub repository and push your code to it
2. Sign up for a [Vercel account](https://vercel.com)
3. Import your GitHub repository into Vercel
4. Vercel will automatically detect that it's a Next.js project with App Router and deploy it

## Troubleshooting

If you encounter any issues:

- Make sure you're using Node.js v20.11.0 or later
- Try deleting the `node_modules` folder and `package-lock.json` file, then run `npm install` again
- Check that all dependencies are installed correctly

## Additional Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)
