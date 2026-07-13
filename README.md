# PomodorTimer

A pixel-art Pomodoro timer desktop app built with React, TypeScript, and Electron. Work in focused 25-minute sessions, take 5-minute breaks, and get rotating encouragement messages along the way.

## Features

- **Work & Break modes** — 25-minute focus sessions and 5-minute breaks
- **Start / Reset controls** — start the countdown or reset to the current mode’s full duration
- **Encouragement messages** — rotating tips every 8 seconds while the timer is running
- **Pixel-art UI** — custom Retrograde font, illustrated buttons, and background art
- **Desktop window** — frameless Electron window with custom minimize and close controls

## Tech Stack

- [React](https://react.dev/) 19 + TypeScript
- [Create React App](https://create-react-app.dev/)
- [Electron](https://www.electronjs.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)

### Install

```bash
npm install
```

### Run in the browser (development)

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000). Hot reload is enabled while you edit.

> Note: Minimize and Close rely on Electron IPC, so those buttons only work in the desktop app.

### Run as a desktop app

1. Build the React app:

```bash
npm run build
```

2. Launch Electron:

```bash
npm run electron
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the React dev server |
| `npm run build` | Create a production build in `build/` |
| `npm run electron` | Open the built app in an Electron window |
| `npm test` | Run tests in watch mode |

## Project Structure

```
pomodoro-app/
├── public/
│   ├── electron.js      # Electron main process & window controls
│   └── index.html
├── src/
│   ├── App.tsx          # Timer logic & UI
│   ├── App.css          # Pixel-art styling
│   ├── assets/          # Background, buttons, font
│   └── index.tsx
└── package.json
```

## How It Works

1. Choose **Work** (25:00) or **Break** (05:00).
2. Press **Start** to begin the countdown.
3. While running, encouragement messages cycle every 8 seconds.
4. Press **Start** again while running to stop and reset the timer, or use **Reset** to restore the full duration without switching modes.
5. Use **Minimize** / **Close** in the Electron window to manage the app.

## License

Private project — not licensed for public redistribution.
