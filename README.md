# Poker Timer

🎯 **Live Demo**: [poker.maximepzv.dev](https://poker.maximepzv.dev)

A responsive timer application for poker games, with round management, blinds, and sounds. Optimized for mobile, tablet, and desktop devices.

## Features

- 📱 **Responsive design** - Optimized for mobile, tablet, and desktop
- ⏱️ **Automatic timer** for each poker round with customizable durations
- 💰 **Blind management** with configurable small/big blind values
- 🎮 **Game controls**: start, pause, reset, next/previous round
- 🔊 **Voice control** - Separate toggle for voice-over sounds (French voice only)
- 🔇 **Sound management** - Global sound control
- 🔤 **Multilingual** - French/English with automatic browser language detection
- 💾 **Persistent settings** - Automatic localStorage saving of all configurations
- ⚙️ **Round configuration** - Add/edit/remove rounds with custom blinds and times
- 🔄 **Reset functionality** - Restore default settings with confirmation
- 🎯 **Current round tracking** - Visual indication of active round
- 📊 **Next blinds preview** - See upcoming round information

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

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks
- `npm run extract-strings` - Extract translation strings for i18n

## Usage

### Getting Started
1. Open the application in your browser at [poker.maximepzv.dev](https://poker.maximepzv.dev)
2. The timer loads with default tournament structure (9 rounds)
3. Click **▶ START** to begin the first round

### Game Controls
- **▶ START/⏸ PAUSE**: Control timer execution
- **⏹ RESET**: Reset current round timer
- **⏭ NEXT/⏮ PREVIOUS**: Navigate between rounds manually
- **🔊/🔇**: Toggle all sounds on/off

### Configuration
1. Click **⚙️ Settings** to access configuration
2. **Global Time**: Set default duration for all rounds
3. **Voice Sounds**: Toggle voice announcements (shuffle up and deal, up)
4. **Round Configuration**: 
   - Add new rounds with **+ Add Round**
   - Edit existing blinds and times
   - Remove rounds as needed
5. **Reset Settings**: Restore default configuration (with confirmation)

### Features
- **Auto-save**: All settings are automatically saved to your browser
- **Responsive**: Works perfectly on phones, tablets, and desktops  
- **Multilingual**: Automatic language detection (French/English)
- **Audio**: French voice announcements and sound effects

## Project Structure

```
poker-timer/
├── public/
│   ├── sounds/           # Audio files
│   ├── i18n/            # Translation files (en.json, fr.json)
│   ├── fonts/           # Supreme font family (WEB)
│   ├── favicon.svg      # Custom poker chip favicon
│   ├── preview.jpg      # Social media preview image
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Timer/       # Main timer display with animations
│   │   ├── ControlButtons/ # Game control buttons (start, pause, reset, etc.)
│   │   ├── NextBlinds/  # Next round preview
│   │   ├── GameArea/    # Game area wrapper
│   │   ├── Rounds/      # Round settings interface
│   │   ├── RoundsSidebar/ # Rounds navigation sidebar
│   │   ├── SettingsSection/ # Settings configuration panel
│   │   ├── MainLayout/  # Main game layout
│   │   ├── Layout/      # Common layout with menu and sound control
│   │   ├── Menu/        # Navigation menu with language selector
│   │   ├── SoundControl/ # Global sound toggle
│   │   └── Button/      # Reusable button component
│   ├── views/           # Main application views
│   │   ├── GameView.jsx # Game interface with timer logic
│   │   ├── SettingsView.jsx # Settings interface
│   │   └── PrivacyView.jsx # Privacy policy page
│   ├── hooks/           # Custom React hooks
│   │   ├── useLocalStorage.js # Settings persistence
│   │   ├── useTimer.js  # Timer state management
│   │   └── useAudio.js  # Audio playback management
│   ├── Routes.jsx       # Application routing configuration
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles
│   ├── reset.css        # CSS reset
│   └── index.jsx        # Application entry point
└── vite.config.js       # Build configuration with path aliases
```

## Responsive Breakpoints

- **Mobile**: ≤ 480px
- **Tablet**: 481px - 768px
- **Laptop**: 769px - 1024px
- **Desktop**: ≥ 1025px

## Technologies Used

- **React** - UI Framework
- **Vite** - Build tool and development server
- **CSS Modules** - Scoped styling with responsive design
- **i18next** - Internationalization with auto-detection
- **react-i18next** - React integration for translations
- **Custom Hooks** - useLocalStorage for settings persistence
- **PWA Ready** - Progressive Web App with manifest and icons
- **Audio System** - HTML5 Audio API for sound management

## License

AGPL-3.0 - See LICENSE file for details

## Author

**Maxime Pouezevara**
