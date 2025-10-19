# Media Library MVP

A simplified MVP version of [Stash](https://github.com/stashapp/stash) - A self-hosted media library manager.

## About

This is a minimal viable product that demonstrates the core concept of Stash: organizing and browsing media files. This MVP focuses on:

- **Video browsing**: View your video collection in a grid layout
- **Image browsing**: Browse images in a responsive grid
- **Clean UI**: Bootstrap-based responsive interface
- **Simple navigation**: Easy-to-use routing between sections

## Tech Stack

This MVP uses the same dependency versions and patterns as the parent Stash repository:

- **React 17.0.2** - UI framework
- **TypeScript 4.8.4** - Type safety
- **Vite 4.1.5** - Build tool and dev server
- **React Router 5.3.4** - Client-side routing
- **Bootstrap 4.6.2** - UI components and styling
- **React Bootstrap 1.6.6** - Bootstrap components for React
- **FontAwesome 6.3.0** - Icons
- **Sass 1.58.1** - CSS preprocessing

## What's Different from Stash?

Stash is a full-featured media organizer with:
- Go backend with GraphQL API
- SQLite database
- Advanced features (tagging, performers, studios, scrapers, etc.)
- Video player integration
- Image gallery features
- Authentication system

This MVP simplifies to:
- Frontend-only React application
- Mock data instead of real backend
- Basic browsing functionality
- No authentication
- No database requirements

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
media-library-mvp/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── LoadingIndicator.tsx
│   │   ├── MediaCard.tsx
│   │   ├── MediaGrid.tsx
│   │   ├── Navbar.tsx
│   │   └── PageNotFound.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Images.tsx
│   │   └── Videos.tsx
│   ├── styles/          # SCSS styles
│   │   └── main.scss
│   ├── App.tsx          # Main app component
│   └── index.tsx        # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Features

### Current

- ✅ Home page with navigation
- ✅ Video grid view
- ✅ Image grid view
- ✅ Responsive design
- ✅ Click handling for media items

### Future Enhancements

To make this closer to Stash, you could add:

- Backend API (Node.js/Express or Go)
- GraphQL integration with Apollo Client (already in dependencies)
- File system scanning
- Video player integration
- Image lightbox viewer
- Tagging system
- Search and filtering
- SQLite database

## Contributing

This is an educational MVP. Feel free to fork and extend it!

## License

MIT License - feel free to use this for learning and experimentation.

## Acknowledgments

- Inspired by [Stash](https://github.com/stashapp/stash)
- Built as a simplified learning version to understand the core concepts
