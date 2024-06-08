# StagePlay Game Engine

**StagePlay Game Engine** is a needlessly theatre-themed game engine.
Not intended for public use... but, you do you fam.

All rights reserved. © 2024  
**Author:** Me JW Crouch  
**Author Website:** [me-jw-crouch.com](http://me-jw-crouch.com)  
**Library Website:** [games.me-jw-crouch.com/stageplay_game_engine/](http://games.me-jw-crouch.com/stageplay_game_engine/)

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




This Engine features a "Cartridge and Player" programming style that aligns with a modular approach to software design that attempts to maintain simplicity and coherence in dependencies.

### Cartridge and Player Style Programming
1. **Cartridge (Modules/Assets)**
    - **Self-contained Units**: Cartridges are self-contained modules or assets that include all necessary components for a specific function or feature. This can include levels, configurations, assets, and scripts.
    - **File-System Format**: Each cartridge adheres to a specific file-system format. This format dictates how the components are structured and packaged, ensuring compatibility with the player.

2. **Player (Core Engine/Framework)**
    - **Core Functionality**: The player is the core engine or framework responsible for loading and executing the cartridges. It contains the essential libraries and runtime necessary to interpret the cartridge data.
    - **Standardized Interface**: The player provides a standardized interface for interacting with cartridges, making it straightforward to load, run, and manage them.

### Example Workflow

#### 1. Developing a Cartridge
The game designer creates a new game. Locations and levels are built in predefined ways according to the genre and follow a specific file-system format. This format includes all necessary assets (textures, sounds), dialogue and logic files, and configurations.

#### 2. Loading a Cartridge
Loading the cartridge into the system is straightforward:
1. Place the game directory next to the `stageplay_game_engine` directory.
2. Set up the appropriate `main.js` file for the webpage.
3. Create a simple HTML page to host the game.

*Note: Design a generator to automate this setup process in the future.*

#### 3. Running the Game
Players access the game by visiting the appropriate website. The game loads seamlessly in a compatible browser (initially optimized for modern Chrome). As development progresses, compatibility with other browsers will improve.

---

This workflow ensures that the process of developing, loading, and running games is streamlined, making it easy for designers to create and players to enjoy the games.