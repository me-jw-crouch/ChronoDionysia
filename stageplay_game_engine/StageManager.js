// import AIManager from "./asms/AIManager.js";                     // AI Manager (Future)
import Director from "./asms/Director.js";                          // Input Handler
// import IntimacyCoordinator from './asms/IntimacyCoordinator.js'; // Networking Handler (Future)
import LxDesigner from './asms/LxDesigner.js';                      // Canvas Rendering, Animation Handler
import Playwright from "./asms/Playwright.js";                      // Dialogue Handler
import PropsASM from './asms/PropsASM.js';                          // Game Object Handler
import ScenicDesigner from './asms/ScenicDesigner.js';              // Responsive Canvas & HTML Designer, UI Handler
import SxDesigner from './asms/SxDesigner.js'                       // Audio Manager
//import TechnicalDirector from './asms/TechnicalDirector.js';        // Asset and Resource Manager
//import BackStageManager from './asms/BackStageManager.js';          // BSM Handles Save/Load of Progress

// import PhysicsEngine from './utils/PhysicsEngine.js';             // Physics Calculations Library (Future)
import MyLogger from './utils/MyLogger/MyLogger.js';

class StageManager {
    name = 'StageManager';

    director;
    intimacyCoordinator;
    lxDesigner;
    playwright;
    propsASM;
    setDesigner;
    sxDesigner;
    technicalDirector;
    logger;

    requestedAnimationFrame;
    gameState;
    CONFIG;

    constructor(configData) {
        this.CONFIG = configData;
    }

    initialize() {
        if (this.CONFIG['debug']) {
            this.logger = new MyLogger();
            this.logger.setDebug();
        }

        this.logger.log("Initializing", this.name);

        this.director = new Director(this);
        this.lxDesigner = new LxDesigner(this);
        this.playwright = new Playwright(this);
        this.propsASM = new PropsASM(this);
        this.setDesigner = new ScenicDesigner(this);

        this.director.initializeListeners();

        this.logger.log("Initialization Done", this.name);
    }

    go() {
        this.update(this.gameState);
        this.requestedAnimationFrame = requestAnimationFrame(() => this.go());
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
