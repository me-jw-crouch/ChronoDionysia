class LxDesigner {
    constructor(_width, _context, _caption = null) {
        this.canvas = null;
        this.context = null;
        this.canvasMargin = 400;
        this.canvasWidth = _width - this.canvasMargin;
        this.canvasContext = _context;
        this.canvasCaption = _caption;
    }

    initializeCanvas() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext(this.canvasContext);

        this.canvas.width = this.canvasWidth;
        this.canvas.height = (this.canvasWidth/3) * 2;

        document.body.appendChild(this.canvas);

        if (this.canvasCaption) {
            const caption = document.createElement("div");
            const paragraph = document.createElement("p");
            paragraph.textContent = this.canvasCaption;
            document.body.appendChild(caption);
            caption.appendChild(paragraph);
        }
    }

    drawGame() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.context.strokeStyle = 'black';
        this.context.fillStyle = 'black';
        this.context.lineWidth = 2;
        // TODO: Draw stuff
    }
}

export default LxDesigner;
