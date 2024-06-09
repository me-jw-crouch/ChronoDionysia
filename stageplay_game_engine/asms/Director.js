class Director {
    name = 'Director';
    sm;

    constructor(sm) {
        this.sm = sm;
        this.sm.logger.log("Initialized", this.name);
    }

    initializeListeners() {
        this.sm.logger.log("Adding Listeners", this.name)
//        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
//        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
//        document.addEventListener('mouseover', );
//        document.addEventListener('mouseenter', );
//        document.addEventListener('mouseleave', );
        this.sm.logger.log("Adding Listeners DONE", this.name)
    }

    handleMouseMove(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        this.sm.propsASM.findProp(mouseX, mouseY);
    }

    handleMouseUp(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        this.sm.propsASM.findProp(mouseX, mouseY);
    }
}

export default Director;
