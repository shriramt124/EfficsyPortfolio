# Overview

This is a portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. The project serves as a personal portfolio for "Efficsy Portfolio" and uses the modern Next.js App Router architecture. It's a client-side application configured to run on port 5000 with custom webpack settings and React Compiler optimizations enabled.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Next.js 16 with App Router**: Uses the modern App Router pattern with the `app/` directory structure for file-based routing and layouts
- **React 19**: Leverages the latest React features with React Compiler enabled via babel plugin for automatic optimization
- **Tailwind CSS 4**: Implements the latest Tailwind with PostCSS integration for utility-first styling

## Styling Approach
- **CSS Custom Properties**: Uses CSS variables for theming with light/dark mode support
- **Inline Theme Configuration**: Custom Tailwind theme defined inline within `globals.css` using the `@theme` directive
- **Dark Mode**: Automatic dark mode detection via `prefers-color-scheme` media query
- **Typography**: Geist and Geist Mono fonts from Google Fonts with CSS variable integration

## Build Configuration
- **Custom Server Settings**: Configured to run on port 5000 and bind to all network interfaces (0.0.0.0)
- **Webpack Mode**: Explicitly using webpack bundler instead of Turbopack
- **Path Aliases**: Uses `@/*` alias mapping to project root for cleaner imports
- **React Compiler**: Experimental React Compiler plugin enabled for automatic performance optimizations

## Component Architecture
- **App Router Layout**: Single root layout in `app/layout.js` that applies global fonts and styling
- **Font Optimization**: Next.js font optimization with Geist font family preloaded as CSS variables
- **Responsive Design**: Mobile-first responsive approach using Tailwind's responsive utilities

# External Dependencies

## Core Framework Dependencies
- **next** (16.0.0): React framework for production with App Router support
- **react** (19.2.0): Core React library
- **react-dom** (19.2.0): React DOM rendering

## Development Tools
- **tailwindcss** (^4): Utility-first CSS framework
- **@tailwindcss/postcss** (^4): PostCSS integration for Tailwind CSS 4
- **eslint** (^9): JavaScript linting
- **eslint-config-next** (16.0.0): Next.js-specific ESLint configuration
- **babel-plugin-react-compiler** (1.0.0): Experimental React Compiler for automatic optimizations

## Static Assets
- Next.js logo and Vercel logo SVGs served from `/public` directory (referenced but not shown in repository contents)

## Deployment Platform
- Optimized for deployment on Vercel platform (referenced in default content and build configuration)