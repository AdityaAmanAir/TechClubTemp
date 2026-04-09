# ios Tech Club Website

A professional, multi-page technical community platform designed with an Apple-inspired dark aesthetic. This project serves as a digital hub for student developers to collaborate, learn, and showcase their innovative projects.

## Features

- **Apple-Inspired Design:** A modern, premium dark aesthetic with smooth transitions and glassmorphism.
- **Multi-Page Architecture:** Includes dedicated sections for Home, About & Team, Events & Gallery, and Projects & Resources.
- **Animated Geometric Background:** A dynamic and interactive background pattern implemented via `pattern.js`.
- **Integrated Form Management:** Secure newsletter and application form submissions integrated with Google Sheets via Google Apps Script.
- **Resource Repository:** A dedicated section for sharing learning paths and downloadable project resources.
- **Responsive Layout:** Fully optimized for a seamless experience across desktop, tablet, and mobile devices.

## Tech Stack

- **Frontend:** HTML5, Vanilla CSS, JavaScript (ES6+).
- **Build Tool:** [Vite](https://vitejs.dev/) for fast development and optimized production builds.
- **Animations:** Custom CSS animations and Canvas API (`pattern.js`).
- **Backend Integration:** Google Apps Script for handling form data and logging to Google Sheets.
- **Deployment:** Optimized for hosting on Vercel and GitHub Pages.

## Getting Started

### Prerequisites

- **Node.js:** Latest LTS version highly recommended.
- **npm** or **yarn** package manager.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd TechClubTemp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add your Google Apps Script URL:

```text
VITE_GOOGLE_SHEET_URL=your_google_apps_script_url
```

*Note: Environment variables in Vite must be prefixed with `VITE_` to be accessible in the frontend.*

### Development

Start the local development server:
```bash
npm run dev
```

### Production

Build the project for production:
```bash
npm run build
```
The optimized files will be generated in the `dist/` directory, ready for deployment.

## Project Structure

- `/public`: Static assets (images, PDFs, icons).
- `index.html`: Home page entry point.
- `about.html`: Team details and mission statement.
- `events.html`: Timeline of past and upcoming club events.
- `projects.html`: Showcase of club projects and learning resources.
- `style.css`: Centralized design system using CSS variables.
- `script.js`: Core application logic, form handling, and API integration.
- `pattern.js`: Logic for the animated geometric background.
- `vite.config.js`: Configuration for the Vite build tool.

