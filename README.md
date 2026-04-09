# Rick & Morty Explorer

A React application for browsing and exploring characters from the Rick and Morty universe, built with Vite and React Router.

## Features

- **Character list** — browse all characters with pagination
- **Search & filter** — filter characters by name, status, species, and more
- **Character detail** — view detailed info for each character (status, species, gender, origin, location, episode count)
- **Client-side routing** — multi-page navigation with React Router

## Tech Stack

- [React 19](https://react.dev/) — UI library
- [React Router 7](https://reactrouter.com/) — client-side routing
- [Vite 8](https://vite.dev/) — build tool and dev server
- [Rick and Morty API](https://rickandmortyapi.com/) — public REST API

## Project Structure

```
src/
├── apis/
│   └── character.api.js       # API calls (getAll, getById)
├── components/
│   ├── CharacterList.jsx       # Character grid with pagination
│   ├── CharacterSearch.jsx     # Search/filter form
│   ├── Navbab.jsx              # Navigation bar
│   ├── Home.jsx                # Home page component
│   └── About.jsx               # About page component
├── pages/
│   ├── CharacterListPage.jsx   # Characters listing page
│   └── CharacterDetailPage.jsx # Single character detail page
└── App.jsx                     # Routes definition
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/characters` | Character list with search & pagination |
| `/character/:id` | Character detail |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```
