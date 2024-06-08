import SetDesigner from './asms/SetDesigner.js';
import LxDesigner from './asms/LxDesigner.js';
import PropsASM from './asms/PropsASM.js';

class SM {
    constructor() {
        this.setDesigner = null;
        this.lxDesigner = null;
        this.propsASM = null;
        // Add other ASMs as needed
        this.CONFIG = {
            'canvas-margin': 300,
            'canvas-context': '2d',
        }
    }

    initialize() {
        this.setDesigner = new SetDesigner(this);
        this.lxDesigner = new LxDesigner(this);
        this.propsASM = new PropsASM(this);
        // Initialize other ASMs as needed
    }
}

export default SM;
