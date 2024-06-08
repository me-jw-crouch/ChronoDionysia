/*
    File for a non-physics based game.
 */
// import * as my_math from "./my_math/mymath.js";
import Props from "./stageplay_game__engine/classes/Props.js";

import Director from "./stageplay_game__engine/asms/Director.js";
import PropsASM from "./stageplay_game__engine/asms/PropsASM.js";
import LxDesigner from "./stageplay_game__engine/asms/LxDesigner.js";

// CONFIG Variables TODO: Set up GlobalConstantASM?
const [_hei, _wid, _con, _cap] = [500, 600, '2d', 'test']

// Variables

// TODO: Set up AssetASM with Loader
const gameObjects = [
    new Props('obj1', 50, 50, 100, 100,
        () => console.log('Hovering over obj1'),
        () => console.log('Clicked obj1'),
        () => console.log('Entered obj1'),
        () => console.log('Left obj1'))
];

const inputASM = new Director(gameObjects);
const gameObjectASM = new PropsASM(gameObjects);
const lxDesigner = new LxDesigner(_hei, _wid, _con, _cap);

let rAF = null;  // Keeps track of the requestedAnimationFrame TODO: Set up LoopASM?
let gameState = 'prologue'; // TODO: Set up GameStateASM


// Methods and Functions
function update(gameState) {
    if (gameState === 'prologue') {
        /* Play the Prologue */
        gameState = 'running';
    }
    if (gameState === 'running') {
        /* Run game logic */
    }
}

function loop() {
    update(gameState);

    if (gameState === 'HOUSE_LXS_UP') {
        cancelAnimationFrame(rAF);
        return;
    }

    canvasASM.drawGame();
    rAF = requestAnimationFrame(loop);
}

// INIT
//      Add Listeners
inputASM.initializeListeners();
lxDesigner.initializeCanvas();
gameObjectASM.initalizeObjects();

// START
requestAnimationFrame(loop);
