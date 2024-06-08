import Director from "./asms/Director.js";
import LxDesigner from './asms/LxDesigner.js';
import Playwright from "./asms/Playwright.js";
import PropsASM from './asms/PropsASM.js';
import SetDesigner from './asms/SetDesigner.js';

class StageManager {
    constructor(CONFIG) {
        this.director = null;
        this.lxDesigner = null;
        this.playwright = null;
        this.propsASM = null;
        this.setDesigner = null;

        this.requestedAnimationFrame = null;
        this.gameState = null; // TODO: Set up GameStateASM
        this.CONFIG = CONFIG;
    }

    initialize() {
        this.director = new Director(this);
        this.lxDesigner = new LxDesigner(this);
        this.playwright = new Playwright(this);
        this.propsASM = new PropsASM(this);
        this.setDesigner = new SetDesigner(this);
    }

    go() {
        this.update(this.gameState);

        this.requestedAnimationFrame = requestAnimationFrame(this.go);
    }

    update(gameState) {
        if (gameState === 'PROLOGUE') {
            // TODO: Play the opening cut-scene of the story.
        }

        if (gameState === 'EPILOGUE') {
            // TODO: Play the final cut-scene of the story.
        }

        if (gameState === 'FINAL_BOWS') {
            // TODO: Run Credits
        }

        if (gameState === 'HOUSE_LXS_DOWN') {
            // TODO: INITIALIZE, LOAD, START
            this.gameState = 'PROLOGUE';
        }

        if (gameState === 'HOUSE_LXS_UP') {
            cancelAnimationFrame(this.requestedAnimationFrame);
        }
    }
}

export default StageManager;
