# Comparison: Stash vs Media Library MVP

## Overview

**Stash** is a full-featured, production-ready media organizer with extensive capabilities.
**Media Library MVP** is a simplified educational version focusing on core browsing functionality.

## Architecture Comparison

### Stash (Original)

```
Stash/
├── Backend (Go)
│   ├── GraphQL API (gqlgen)
│   ├── SQLite Database
│   ├── File Scanner
│   ├── Video Processing (FFmpeg)
│   ├── Scrapers/Plugins
│   └── Authentication
├── Frontend (React + TypeScript)
│   ├── Complex routing
│   ├── Apollo Client
│   ├── Video player integration
│   ├── Advanced UI components
│   └── Internationalization
└── Features
    ├── Scene management
    ├── Performer tracking
    ├── Studio organization
    ├── Tag system
    ├── Metadata scraping
    ├── Image galleries
    └── Statistics
```

### Media Library MVP

```
Media Library MVP/
└── Frontend Only (React + TypeScript)
    ├── Simple routing
    ├── Mock data
    ├── Basic grid layout
    └── No backend required
```

## Feature Comparison

| Feature | Stash | Media Library MVP |
|---------|-------|-------------------|
| **Backend** | Go + GraphQL | None (Frontend only) |
| **Database** | SQLite | None (Mock data) |
| **Authentication** | ✅ Yes | ❌ No |
| **File Scanning** | ✅ Automatic | ❌ No |
| **Video Player** | ✅ video.js integration | ❌ No |
| **Image Viewer** | ✅ Gallery with lightbox | ❌ Basic grid only |
| **Metadata** | ✅ Extensive | ❌ Basic title only |
| **Tagging** | ✅ Advanced system | ❌ No |
| **Search** | ✅ Full-text search | ❌ No |
| **Filtering** | ✅ Multi-criteria | ❌ No |
| **Performers** | ✅ Full CRUD | ❌ No |
| **Studios** | ✅ Full CRUD | ❌ No |
| **Scrapers** | ✅ Plugin system | ❌ No |
| **Statistics** | ✅ Analytics dashboard | ❌ No |
| **Internationalization** | ✅ 25+ languages | ❌ English only |
| **Responsive Design** | ✅ Yes | ✅ Yes |
| **Grid Layout** | ✅ Yes | ✅ Yes |
| **Navigation** | ✅ Yes | ✅ Simplified |

## Technology Stack Comparison

### Shared Technologies (Same Versions)

| Technology | Version | Used In |
|------------|---------|----------|
| React | 17.0.2 | Both |
| TypeScript | ~4.8.4 | Both |
| Bootstrap | 4.6.2 | Both |
| React Bootstrap | 1.6.6 | Both |
| React Router | 5.3.4 | Both |
| FontAwesome | 6.3.0 | Both |
| Vite | 4.1.5 | Both |
| Sass | 1.58.1 | Both |
| Apollo Client | 3.7.17 | Both (MVP unused) |
| GraphQL | 16.6.0 | Both (MVP unused) |

### Stash-Only Technologies

- **Backend**: Go 1.19
- **GraphQL Server**: gqlgen 0.17.2
- **Database**: SQLite (mattn/go-sqlite3 1.14.7)
- **Video Processing**: FFmpeg, video.js 7.21.3
- **Advanced Features**: chromedp, image hashing, subtitle processing
- **Build Tools**: Extensive Go toolchain

### MVP-Specific Decisions

- **No Backend**: Simplified to pure frontend
- **Mock Data**: Hardcoded sample data
- **Unused Dependencies**: Apollo Client & GraphQL included but not implemented (for future extension)

## Code Comparison

### Complexity

- **Stash**: ~4,621 files/directories
- **Media Library MVP**: ~20 files

### Lines of Code (Approximate)

- **Stash**: 100,000+ lines (Go + TypeScript)
- **Media Library MVP**: ~800 lines (TypeScript only)

### Component Structure

**Stash** has dozens of components including:
- SceneCard, SceneDetails, ScenePlayer
- PerformerCard, PerformerDetails
- TagCard, StudioCard
- Advanced forms, filters, modals
- Settings panels, setup wizards

**Media Library MVP** has minimal components:
- MediaCard
- MediaGrid
- Navbar
- LoadingIndicator
- Page components (Home, Videos, Images)

## Use Cases

### When to Use Stash

- Production media library management
- Need metadata scraping
- Want performer/studio tracking
- Require advanced search/filtering
- Need authentication/multi-user
- Want plugin/scraper ecosystem

### When to Use Media Library MVP

- Learning React + TypeScript
- Understanding media library concepts
- Building a proof of concept
- Starting point for custom solution
- Educational purposes
- Minimal setup required

## Migration Path: MVP → Full Stash-like App

To evolve this MVP into a fuller application:

### Phase 1: Backend Setup
1. Create Node.js/Express or Go backend
2. Set up GraphQL server
3. Add SQLite database
4. Implement file system scanning

### Phase 2: Core Features
1. Connect Apollo Client to real API
2. Add video player (video.js)
3. Implement image lightbox
4. Add basic search

### Phase 3: Advanced Features
1. User authentication
2. Tagging system
3. Metadata management
4. Performer/studio tracking

### Phase 4: Polish
1. Add scraping capabilities
2. Implement statistics
3. Add internationalization
4. Performance optimization

## Learning Outcomes

### What You Learn from Stash
- Full-stack architecture
- GraphQL implementation
- File system management
- Video processing
- Complex React patterns
- Plugin systems

### What You Learn from This MVP
- React fundamentals
- TypeScript basics
- Component composition
- React Router usage
- Bootstrap integration
- Project structure
- Vite configuration

## Performance

- **Stash**: Handles thousands of media files, optimized database queries, lazy loading
- **MVP**: Lightweight, instant loading (no backend), suitable for demo purposes

## Conclusion

The Media Library MVP captures the **core concept** of Stash (organizing and browsing media) while removing 99% of the complexity. It's perfect for:

- Understanding how media library UIs work
- Learning the React/TypeScript stack
- Building a foundation for custom media solutions
- Educational demonstrations

For production use, the full **Stash** application provides enterprise-grade features, performance, and extensibility.
