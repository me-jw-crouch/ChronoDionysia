# StagePlay Game Engine

**StagePlay Game Engine** is a needlessly theatre-themed game engine.
Not intended for public use... but, you do you fam.

All rights reserved. © 2024  
**Author:** Me JW Crouch  
**Author Website:** [me-jw-crouch.com](https://me-jw-crouch.com)  
**Library Website:** [games.me-jw-crouch.com/stageplay_game_engine/](https://games.me-jw-crouch.com/stageplay_game_engine/)

## Overview

The intention is that the `SM` class singleton controls and runs everything.
The `SM` gives directions to the `ASMs`, but the `ASMs` can also communicate amongst themselves.

`ASMs` and the `SM` are intended to be singletons (but allow for multiple for hot-swapping productions if desired in the future). This game engine will expand as it is built, with the intention to support several types of games as well as animations or "digital puppet shows."

## Components

- **LxDesigner**: The Canvas Manager
- **PropsASM**: The Object Manager
- **Director**: The Input Manager (and Action Manager?)
- **Playwright**: The Dialogue Manager

## Installation

To install the StagePlay Game Engine, clone the repository and include the necessary scripts in your project.

```bash
git clone https://github.com/yourusername/stageplay_game_engine.git
```

Include the library in your project:

```html
<script src="path/to/stageplay_game_engine.js"></script>
```

## Usage

To use the StagePlay Game Engine, initialize the `SM` class and configure your game objects and managers as needed.

```javascript
// Add your game assets and object data in the appropriate file structure (to be designed)

const sm = new SM();
sm.initialize();
// sm.initialize scans the directory and loads the appropriate start files and checks for save cookies/files.
```

## License

All rights reserved. © 2024 Me JW Crouch

## Contact

For more information, visit [me-jw-crouch.com](https://me-jw-crouch.com).
