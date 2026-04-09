# ios Tech Club Website

A multi-page technical community website built for the Tech Clubs. The project focuses on a high-performance, responsive user experience with a modern dark aesthetic.


## Tech Stack

- **Core:** HTML5, Vanilla CSS, JavaScript (ES6+).
- **Build Tool:** Vite.
- **Integration:** Google Apps Script (Backend for Sheet logging).
- **Deployment:** Optimized for Vercel and GitHub Pages.

## Configuration

Create a `.env` file in the root directory and add the following variable:

```text
VITE_GOOGLE_SHEET_URL=your_google_apps_script_url
```

All environment variables used in the frontend must be prefixed with `VITE_` as per Vite requirements.

## Project Structure

- `/public`: Static assets including downloadable resources (e.g., thanks.pdf).
- `index.html`: Entry point for the Home page.
- `about.html`, `events.html`, `projects.html`: Functional sub-pages.
- `script.js`: Core application logic and API integrations.
- `style.css`: Centralized design system and responsive layouts.
- `pattern.js`: Animated background logic.

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended).
- npm or yarn.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server:
```bash
npm run dev
```

### Production Build

Generate optimized production files in the `dist/` directory:
```bash
npm run build
```

The output in `dist/` is ready for deployment on any static hosting provider.
