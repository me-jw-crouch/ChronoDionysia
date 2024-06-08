class Director {
    constructor(sm) {
        this.sm = sm;
    }

    initializeListeners() {
//        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
//        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
//        document.addEventListener('mouseover', );
//        document.addEventListener('mouseenter', );
//        document.addEventListener('mouseleave', );
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
