class SetDesigner {
    constructor(sm) {
        this.sm = sm;
        this.canvas = null;
        this.context = null;
    }

    buildCanvas() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext(this.sm.CONFIG['canvas-context']);

        this.resizeCanvas();

        window.addEventListener('resize', this.resizeCanvas.bind(this));

        document.body.appendChild(this.canvas);
    }

    resizeCanvas() {
        const margin = this.sm.CONFIG['canvas-margin'];
        this.canvas.width = window.innerWidth - margin;
        this.canvas.height = ((this.canvas.width/3) * 2);
    }
}

export default SetDesigner;
