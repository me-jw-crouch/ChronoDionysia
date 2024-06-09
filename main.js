/*
    File for a non-physics point-and-click game.
 */
import StageManager from "./stageplay_game_engine/StageManager.js";

// CONFIG Variables TODO: Set up GlobalConstantASM?
const CONFIG = {
    'canvas-margin': .07,
    'canvas-context': '2d',
    'canvas-caption': 'Chrono Dionysia',
    'debug': true,
    'force': 'square',
}

window.addEventListener('load', (event) => {
    const stageManager = new StageManager(CONFIG);
    stageManager.initialize();
    stageManager.go();
});
