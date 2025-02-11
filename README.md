# Photobooth App

An interactive photobooth experience built with React Native and Expo.

## Note

This is a static implementation created as a personal project. The photos and notes are pre-loaded assets. To customize with your own images:

1. Replace the following files in the `assets` folder with your own images (keeping the same filenames):
   - `photostrip.png` - Your photo strip design
   - `note.png` - Your note design
   - Other assets can be customized similarly

## Credits

This project was heavily inspired by the "Vintage Photobooth Prototype" designed by Marisa C. on Figma Community:
- Original Design: [Vintage Photobooth Prototype](https://www.figma.com/community/file/1467737578437532299)
- Designer: Marisa C.

## Features

- Camera interface with countdown timer
- Animated photo printing simulation
- Interactive photo collection screen with animated transitions
- Haptic feedback for enhanced user experience
- Custom UI elements and animations

## Tech Stack

- React Native
- Expo Router
- React Native Animations
- Expo Haptics
- TypeScript

## Screens

### 1. Camera Screen (index)
- Main camera interface
- Photo capture functionality

### 2. Countdown Screen
- Animated countdown before photo capture
- Visual and haptic feedback

### 3. Printing Screen
- Animated photo printing simulation
- Photo tray animation
- Collection button appears after printing

### 4. Collection Screen
- Interactive photo display
- Animated photo strip and note
- Touch interactions with smooth animations

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

