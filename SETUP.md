# Setup Instructions

## Prerequisites

- Node.js v16 or higher
- npm or yarn package manager

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/gitmvp-com/media-library-mvp.git
cd media-library-mvp
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Add Missing Dependency

The initial package.json is missing `react-router-bootstrap`. Add it manually:

```bash
npm install react-router-bootstrap@0.25.0
# or
yarn add react-router-bootstrap@0.25.0
```

### 4. Start Development Server

```bash
npm start
# or
yarn start
```

The application will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `dist/` directory.

## Project Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (when configured)
- `npm run check` - Run TypeScript type checking

## Troubleshooting

### TypeScript Errors

If you encounter TypeScript errors related to `react-router-bootstrap`, the included type declaration file (`src/react-router-bootstrap.d.ts`) should resolve them. If issues persist:

1. Install the types package:
   ```bash
   npm install --save-dev @types/react-router-bootstrap@0.24.5
   ```

2. Restart your TypeScript server in your IDE

### Port Already in Use

If port 3000 is already in use, you can change it in `vite.config.ts`:

```typescript
server: {
  port: 3001, // Change to any available port
}
```

## Development Tips

- The app uses mock data in `src/pages/Videos.tsx` and `src/pages/Images.tsx`
- To connect to a real backend, implement GraphQL queries using the included `@apollo/client` dependency
- Bootstrap styles are imported globally in `src/index.tsx`
- Custom styles are in `src/styles/main.scss`

## Next Steps

Once the app is running, you can:

1. Navigate between Videos and Images sections
2. Click on media cards to see click handlers
3. Explore the codebase to understand the structure
4. Extend with additional features like search, filtering, or backend integration
