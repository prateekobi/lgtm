# lgtm

Personal portfolio for Prateek Obireddy. Built with Vue 3, Vite, Tailwind CSS v4, and TypeScript.

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed and running

## Getting started

Clone the repo and start the dev server:

```bash
git clone https://github.com/prateekobi/lgtm.git
cd lgtm
docker compose up --build
```

Open [http://localhost:5173](http://localhost:5173).

The `--build` flag is only needed the first time, or after changing `package.json`. For subsequent runs:

```bash
docker compose up
```

## Development

Source files are bind-mounted into the container, so edits you make locally are reflected immediately via Vite's hot module replacement. No restart needed.

To stop the server:

```bash
docker compose down
```

## Without Docker

If you prefer running locally, Node 20.19+ or 22.12+ is required:

```bash
npm install
npm run dev
```

## Other commands

```bash
npm run build       # Production build
npm run lint        # Lint and auto-fix
npm run type-check  # TypeScript check
```
