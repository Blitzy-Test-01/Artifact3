/**
 * server.js — Express server entry point for the "artifact3" tutorial.
 *
 * A minimal Node.js + Express.js HTTP server that exposes two plain-text
 * GET endpoints:
 *   - GET /              → "Hello world"   (baseline endpoint)
 *   - GET /good-evening  → "Good evening"  (additive endpoint)
 *
 * This file is the application entry point referenced by package.json
 * ("main": "server.js", "scripts": { "start": "node server.js" }). It uses
 * CommonJS modules because package.json does not set "type": "module".
 *
 * Both endpoints are served through a single Express application instance and
 * routing layer; the native `http` module is intentionally not used.
 */

'use strict';

// Import the Express web framework (declared as a dependency in package.json,
// installed under node_modules/ via `npm install`). CommonJS require syntax.
const express = require('express');

// Create the single Express application instance that hosts every route.
const app = express();

// Port the server listens on. Defaults to 3000 but can be overridden via the
// PORT environment variable (e.g. `PORT=8080 npm start`).
const PORT = process.env.PORT || 3000;

// Baseline endpoint — preserved for backward compatibility.
// GET / responds with the exact plain-text body "Hello world".
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Additive endpoint introduced by this feature.
// GET /good-evening responds with the exact plain-text body "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and log the listening address for convenience.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
