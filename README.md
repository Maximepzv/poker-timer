# Poker Timer

A responsive timer application for poker games, with round management, blinds, and sounds. Optimized for mobile, tablet, and desktop devices.

## Features

- 📱 Responsive design
- ⏱️ Automatic timer for each poker round
- 💰 Blind management (small blind / big blind)
- 🎮 Controls: start, pause, reset, next/previous round
- 🔊 Integrated sounds (French voice)
- 🔇 Sound control (enable/disable)

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd poker-timer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application in development mode:
   ```bash
   npm run dev
   ```

## Usage

- Open the application in your browser.
- Configure rounds if necessary in the "Settings" view.
- Start the timer to begin the game.
- Use the buttons to control the timer and navigate between rounds.
- Enable/disable sound with the 🔊/🔇 button.

## Project Structure

- `src/App.jsx`: Main component
- `src/components/`: UI components
- `src/views/`: Main views (Game, Settings)
- `public/sounds/`: Audio files

## Responsive Breakpoints

- **Mobile**: ≤ 480px
- **Tablet**: 481px - 768px
- **Laptop**: 769px - 1024px
- **Desktop**: ≥ 1025px

## Technologies Used

- React
- Vite
- CSS Modules
