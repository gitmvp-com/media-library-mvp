# Roadmap: From MVP to Full-Featured Media Library

This document outlines potential enhancements to evolve this MVP into a more complete media library application.

## Current State (MVP v0.1.0)

✅ React 17 + TypeScript frontend
✅ Basic routing (Home, Videos, Images)
✅ Grid layout with responsive cards
✅ Bootstrap UI components
✅ Mock data for demonstration
✅ Click handling on media items

## Phase 1: Backend Foundation (v0.2.0)

### Goals
- Set up a working backend API
- Connect frontend to real data
- Basic CRUD operations

### Tasks

**Option A: Node.js Backend**
```
[ ] Set up Express server
[ ] Create GraphQL server (Apollo Server)
[ ] Add SQLite database with Prisma/Sequelize
[ ] Implement basic queries (listVideos, listImages)
[ ] Connect Apollo Client in frontend
[ ] Remove mock data, use real API
```

**Option B: Go Backend** (More aligned with Stash)
```
[ ] Set up Go server with gqlgen
[ ] Implement SQLite with GORM
[ ] Create GraphQL schema
[ ] Implement resolvers
[ ] Update frontend to connect to Go API
```

### Dependencies to Add
```json
// Backend (Node.js option)
"express": "^4.18.2",
"apollo-server-express": "^3.12.0",
"@prisma/client": "^4.10.0",
"graphql": "^16.6.0"
```

## Phase 2: File System Integration (v0.3.0)

### Goals
- Scan local directories for media files
- Generate thumbnails
- Store file metadata

### Tasks

```
[ ] Implement directory scanning
[ ] Add file watcher for new files
[ ] Generate video thumbnails (FFmpeg)
[ ] Generate image thumbnails (Sharp)
[ ] Store file paths and metadata in database
[ ] Add configuration for media directories
[ ] Display real thumbnails in UI
```

### Dependencies to Add
```json
"fluent-ffmpeg": "^2.1.2",
"sharp": "^0.31.3",
"chokidar": "^3.5.3"
```

## Phase 3: Media Playback (v0.4.0)

### Goals
- Add video player
- Add image viewer with lightbox
- Improve media viewing experience

### Tasks

```
[ ] Integrate video.js player
[ ] Add video detail page
[ ] Implement image lightbox
[ ] Add keyboard navigation
[ ] Support for multiple video formats
[ ] Add playback controls (speed, quality)
[ ] Remember playback position
```

### Dependencies Already Included
- video.js is not in MVP but can be added

### New Dependencies
```json
"video.js": "^7.21.3",
"react-image-lightbox": "^5.1.4"
```

## Phase 4: Search & Filtering (v0.5.0)

### Goals
- Full-text search
- Advanced filtering
- Sorting options

### Tasks

```
[ ] Add search bar to navigation
[ ] Implement full-text search in backend
[ ] Add filter panel (file type, date, size)
[ ] Sorting options (name, date, size)
[ ] Search result highlighting
[ ] Save search queries
[ ] Advanced query syntax
```

## Phase 5: Metadata & Tagging (v0.6.0)

### Goals
- Add tagging system
- Support custom metadata
- Tag-based organization

### Tasks

```
[ ] Create tags table in database
[ ] Tag CRUD operations
[ ] Tag selector UI component
[ ] Auto-tagging based on filename
[ ] Tag hierarchy/categories
[ ] Tag statistics
[ ] Bulk tagging operations
```

## Phase 6: Advanced Features (v0.7.0)

### Goals
- Performer/actor tracking
- Studio organization
- Rating system

### Tasks

```
[ ] Performers database table
[ ] Performer profile pages
[ ] Studios database table
[ ] Studio pages
[ ] Rating system (1-5 stars)
[ ] Favorites system
[ ] View history tracking
```

## Phase 7: Scrapers & Metadata (v0.8.0)

### Goals
- Automatic metadata fetching
- Integration with metadata APIs
- Plugin system

### Tasks

```
[ ] Plugin architecture
[ ] IMDB scraper
[ ] TMDB integration
[ ] Custom scraper interface
[ ] Automatic scene identification
[ ] Metadata conflict resolution
[ ] Scraper scheduling
```

## Phase 8: User Experience (v0.9.0)

### Goals
- Authentication
- User preferences
- Themes

### Tasks

```
[ ] User authentication system
[ ] User preferences storage
[ ] Multiple theme support
[ ] Dark/light mode
[ ] Customizable layout
[ ] Keyboard shortcuts
[ ] Accessibility improvements
```

## Phase 9: Performance & Scale (v1.0.0)

### Goals
- Handle large libraries (10k+ files)
- Optimize performance
- Production ready

### Tasks

```
[ ] Implement pagination
[ ] Virtual scrolling for large lists
[ ] Database query optimization
[ ] Caching layer (Redis)
[ ] CDN for thumbnails
[ ] Background job processing
[ ] Resource monitoring
[ ] Error tracking (Sentry)
```

## Future Enhancements (v2.0+)

### Advanced Features
- [ ] Collections/playlists
- [ ] Scene detection in videos
- [ ] Duplicate file detection
- [ ] Batch operations
- [ ] Export/import library
- [ ] Mobile app (React Native)
- [ ] Sharing capabilities
- [ ] Comments/notes
- [ ] Backup/restore
- [ ] Multi-user support
- [ ] API for third-party integrations

### Technical Improvements
- [ ] Migrate to React 18
- [ ] Switch to Next.js for SSR
- [ ] WebSocket for real-time updates
- [ ] Machine learning for auto-tagging
- [ ] Video transcoding support
- [ ] Multi-language support (i18n)
- [ ] Docker containerization
- [ ] Kubernetes deployment

## Technology Evolution

### Current Stack
```
Frontend: React 17 + TypeScript + Vite
Styling: Bootstrap 4 + SCSS
Routing: React Router 5
State: React hooks (local state)
```

### Recommended Evolution
```
v0.2: + Apollo Client + GraphQL
v0.4: + Video.js + Image libraries
v0.6: + Complex state management (if needed)
v0.8: + Plugin system
v1.0: + Caching + Job queues
v2.0: Consider Next.js, React 18, Modern stack
```

## Contribution Areas

Interested in contributing? Focus areas:

1. **Backend Development**: Build the API layer
2. **UI/UX**: Improve components and design
3. **Video Processing**: FFmpeg integration
4. **Search**: Implement advanced search
5. **Documentation**: Improve docs and examples
6. **Testing**: Add unit and integration tests
7. **DevOps**: Docker, CI/CD setup

## Milestones

- **v0.2** (Backend): ~2-4 weeks
- **v0.3** (File System): ~2-3 weeks
- **v0.4** (Playback): ~1-2 weeks
- **v0.5** (Search): ~1-2 weeks
- **v0.6** (Tags): ~2 weeks
- **v0.7** (Advanced): ~3-4 weeks
- **v0.8** (Scrapers): ~4-6 weeks
- **v0.9** (UX): ~2-3 weeks
- **v1.0** (Production): ~2-4 weeks

**Total estimated time to v1.0**: 4-6 months of focused development

## References

- [Stash Repository](https://github.com/stashapp/stash) - Reference implementation
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html) - Video processing
- [Apollo GraphQL](https://www.apollographql.com/docs/) - GraphQL client/server
- [video.js](https://videojs.com/) - Video player library
- [React Documentation](https://react.dev/) - React guides

## Get Involved

This roadmap is a suggestion. Feel free to:
- Pick any feature to implement
- Suggest new features
- Improve existing code
- Report bugs
- Write documentation
- Share your use case

Happy coding! 🚀
