import * as MyMathBasic from "../utils/MyMath/Basic.js"

class ScenicDesigner {
    name = "ScenicDesigner";
    sm;
    canvas;
    context;

    constructor(sm) {
        this.sm = sm;
        this.sm.logger.log("Initialized", this.name);

        this.buildCanvas()
    }

    buildCanvas() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext(this.sm.CONFIG['canvas-context']);

        this.resizeCanvas();

        document.body.appendChild(this.canvas);
        window.addEventListener('resize', this.resizeCanvas.bind(this));

    }

    resizeCanvas() {
        const margin = this.sm.CONFIG['canvas-margin'];
        const _w = window.innerWidth;
        const _h = window.innerHeight;

        if (this.sm.CONFIG['force'] === 'wide') {
            this.canvas.width = _w - (_w * margin);
            this.canvas.height = ((this.canvas.width/3) * 2);

        } else if (this.sm.CONFIG['force'] === 'full') {
            this.canvas.height = _h - (_h * margin);
            this.canvas.width = _w - (_w * margin);

        } else if (this.sm.CONFIG['force'] === 'square') {
            const _sq = MyMathBasic.min(_w, _h)
            this.canvas.height = _sq - (_sq * margin);
            this.canvas.width = this.canvas.height;

        } else {

        }
    }
}

export default ScenicDesigner;
