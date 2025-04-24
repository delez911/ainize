# CSi.DAO Static Site

A static site for CSi.DAO built with Vite and Express.

## Project Structure

```
static-site/
├── src/                # Source files
│   ├── styles/        # CSS styles
│   ├── scripts/       # JavaScript files
│   └── views/         # HTML templates
├── public/            # Static assets
├── dist/              # Build output
├── app.js            # Express server
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

5. Start production server:
```bash
npm start
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run style` - Process CSS with PostCSS
- `npm run clean` - Clean build directory

## Dependencies

- Express - Web server
- Vite - Build tool
- vite-plugin-html - HTML template processing
- PostCSS - CSS processing
- ESLint - Code linting 