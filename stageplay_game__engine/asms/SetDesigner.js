class SetDesigner {
    constructor(SM) {
        this.SM = SM;
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext(this.SM.CONFIG['canvas-context']);
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas.bind(this));
    }

    resizeCanvas() {
        const margin = this.SM.CONFIG['canvas-margin']
        this.canvas.width = window.innerWidth - margin;
        this.canvas.height = window.innerHeight - margin;
        this.calculateLayout();
    }

    calculateLayout() {
        return {
            stageWidth: this.canvas.width,
            stageHeight: this.canvas.height,
            propScale: Math.min(this.canvas.width / 800, this.canvas.height / 600)
        };
    }
}

export default SetDesigner;
