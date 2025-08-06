# Overview

This is a French industrial equipment marketplace web application called "Solution 88" that specializes in selling agricultural, construction, and industrial machinery and parts. The application provides a comprehensive catalog of equipment with detailed specifications, images, and quote request functionality. It features a modern React frontend with a Node.js/Express backend and uses PostgreSQL with Drizzle ORM for data persistence.

## Recent Updates (2025-01-06)
- **Complete Visual Redesign**: Implemented a professional industrial color palette matching the Solution 88 logo
- **Brand Integration**: Added the official Solution 88 logo to the navigation header
- **Industrial Color Scheme**: Updated to use orange (#FF9500), dark gray (#4A4A4A), and industrial grays
- **Professional Images**: Replaced all equipment and parts images with high-quality, professional industrial machinery photos
- **Enhanced Hero Section**: Redesigned with industrial gradient backgrounds and improved typography
- **Contact Page Redesign**: Updated with industrial dark theme and improved visual hierarchy

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Routing**: Wouter for client-side routing with pages for home, equipment catalog, parts catalog, product details, and contact
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with custom color scheme supporting light/dark themes and CSS variables

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with routes for equipment, parts, and quote management
- **Development Server**: Vite middleware integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
- **Database**: PostgreSQL configured through environment variables
- **ORM**: Drizzle ORM with migrations support for type-safe database operations
- **Schema**: Shared schema definitions between client and server using Drizzle and Zod
- **Storage Strategy**: Currently uses in-memory storage with sample data for development, designed to easily transition to PostgreSQL
- **Data Models**: Users, equipment, parts, and quotes with proper relationships and constraints

## Core Features
- **Equipment Catalog**: Browsable catalog with filtering by category (agriculture, construction, industry)
- **Parts Catalog**: Comprehensive parts inventory with compatibility information
- **Product Details**: Detailed product pages with specifications, images, and contact options
- **Quote System**: Contact form integration for quote requests with validation
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts
- **Internationalization**: French language interface with language switcher component

## Authentication & Authorization
- Basic user schema defined but authentication not currently implemented
- Prepared for future authentication integration with user sessions

# External Dependencies

## Core Technologies
- **Database**: Neon serverless PostgreSQL (@neondatabase/serverless)
- **ORM**: Drizzle ORM with PostgreSQL dialect and Zod integration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## UI Components & Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for image galleries
- **Utilities**: Class-variance-authority for component variants, clsx for conditional classes

## Form Handling & Validation
- **Forms**: React Hook Form with Hookform resolvers
- **Validation**: Zod for schema validation and type inference
- **Date Handling**: date-fns for date utilities

## Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **Development**: TSX for TypeScript execution, ESBuild for production builds
- **Replit Integration**: Vite plugins for error overlay and cartographer (development environment)

## Communication Features
- **WhatsApp Integration**: Direct WhatsApp messaging functionality for customer contact
- **Query Client**: Custom API request handling with TanStack Query for data fetching