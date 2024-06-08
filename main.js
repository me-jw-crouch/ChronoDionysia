/*
    File for a non-physics point-and-click game.
 */
import StageManager from "./stageplay_game_engine/StageManager.js";

// CONFIG Variables TODO: Set up GlobalConstantASM?
const CONFIG = {
    'canvas-margin': 300,
    'canvas-context': '2d',
    'canvas-caption': 'Chrono Dionysia',
}

const sm = new StageManager(CONFIG);
sm.go()
