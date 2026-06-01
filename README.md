# Artifact3

A minimal Node.js HTTP server built with the [Express.js](https://expressjs.com/) web framework. This tutorial project exposes two plain-text `GET` endpoints.

## Overview

`Artifact3` is a small, dependency-light tutorial server. It uses Express.js to serve two plain-text HTTP responses:

- `GET /` returns `Hello world`
- `GET /good-evening` returns `Good evening`

There is no UI, database, or authentication — just two routes returning plain text.

## Prerequisites

- **Node.js `>=18`** (Node.js 22 LTS recommended). Check your version with `node --version`.
- **npm** (bundled with Node.js). Check with `npm --version`.
- An **internet connection** for the initial install, so npm can fetch Express from the npm registry.

## Installation

Install the project dependencies from the repository root:

```bash
npm install
```

This installs Express (`^5.2.1`) and its dependencies into `node_modules/` (which is git-ignored) and generates/uses `package-lock.json` for reproducible installs.

## Running the server

Start the server with:

```bash
npm start
```

This runs `node server.js`. By default the server listens on `http://localhost:3000`.

You can override the port with the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response body |
|--------|------|---------------|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |

### Examples

With the server running, call each endpoint with `curl`:

```bash
curl http://localhost:3000/
# -> Hello world

curl http://localhost:3000/good-evening
# -> Good evening
```
