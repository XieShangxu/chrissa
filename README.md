# Chrissa's Portfolio Website

A colorful, fun, and interactive portfolio website for a kid to showcase their projects, growth, and interests.

> **App Router Migration Complete!** This project has been migrated from Pages Router to App Router, the recommended way to build Next.js applications.

## Features

- Modern, kid-friendly design with vibrant colors
- Interactive navigation to explore different sections
- Project showcase with images and descriptions
- Growth timeline to show progress over time
- Fun section to share favorite things

## Technologies Used

- Next.js 14 with App Router (latest architecture)
- React 18 for UI components
- TypeScript for type safety
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v20.11.0 or newer)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Change to the project directory

```bash
cd chrissa-portfolio
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Project Structure

This project uses the Next.js App Router architecture, which is folder-based:

```
src/
├── app/                # App Router directory
│   ├── components/     # React components
│   ├── layout.tsx      # Root layout (applies to all routes)
│   ├── page.tsx        # Home page
│   └── favicon.ico     # Favicon for the site
├── styles/             # Global styles
└── public/             # Static assets
```

## Customization

- Update the content in the `src/app/page.tsx` file
- Replace placeholder images in the `public/` folder
- Change colors in the `tailwind.config.js` file

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The easiest way to deploy this website is using [Vercel](https://vercel.com), the platform created by the creators of Next.js.

## License

This project is open source and available under the [MIT License](LICENSE).
