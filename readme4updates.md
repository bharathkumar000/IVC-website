# Project Update Log

This file tracks all changes made to the codebase, including configuration updates, bug fixes, and feature implementations.

## [2026-01-21]

### 10:29 AM - Initial Setup
- **Dependencies**: Installed `npm` dependencies for root, `client`, and `server` directories.
- **Development Server**: Started concurrent development servers for frontend (port 5173) and backend (port 5000).

### 10:32 AM - Frontend & Backend Integration
- **Frontend Refactoring**: 
  - File: `client/src/pages/Events.jsx`
  - File: `client/src/pages/Projects.jsx`
  - File: `client/src/pages/Join.jsx`
  - Action: Replaced hardcoded `http://localhost:5000` with relative paths (e.g., `/api/events`) to support integrated serving.
- **Backend Configuration**:
  - File: `server/index.js`
  - Action: Added `express.static` to serve the React frontend from `../client/dist`.
  - Action: Implemented a catch-all route `app.get(/.*/, ...)` to handle client-side routing (SPA support).
  - Fix: Updated wildcard matcher from `*` to `/.*/` to resolve Express 5 compatibility issue (`PathError`).
- **Build**:
  - Action: Executed `npm run build` in `client` to generate production assets in `client/dist`.

### 10:34 AM - Documentation Update
- **File**: `README.md`
- Action: Added initial "Change Log" section ensuring all modifications are tracked.

### 10:35 AM - Port Reconfiguration
- **Backend**:
  - File: `server/index.js`
  - Action: Changed default server port from `5000` to `3030`.
  - Code: `const PORT = process.env.PORT || 3030;`
- **Documentation**:
  - File: `README.md`
  - Action: Updated "Running Locally" instructions to reflect port `3030`.
- **Deployment**:
  - Action: Restarted server on port `3030`.

### 10:38 AM - Content Update
- **Frontend**:
  - File: `client/src/pages/Home.jsx`
  - Action: Updated hero section main heading text.
  - From: `'Innovate. Create.'`
  - To: `'IDEATE - VISUALIZE - CREATE'`
  - Width: Enforced separate lines.
  - Spacing: Added significant vertical spacing (`mt-8`) between main heading and subheading.
  - Subheading: Separated "Transform Ideas into Impact" into an `<h2>` element and set it to approximately half the size of the main heading (`text-xl sm:text-3xl`).
- **Deployment**:
  - Action: Rebuilt the frontend with `npm run build` to apply changes.
  - Action: Restarted server.
