class Director {
    constructor(gameObjects) {
        this.gameObjects = gameObjects;
    }

    initializeListeners() {
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));

//        document.addEventListener('mouseover', );
//        document.addEventListener('mouseenter', );
//        document.addEventListener('mouseleave', );
    }

    handleMouseMove(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        this.gameObjects.forEach(obj => {
            if (obj.contains(mouseX, mouseY)) {
                if (!obj.isHovered) {
                    obj.onEnter();
                    obj.isHovered = true;
                }
                obj.onHover();
            } else {
                if (obj.isHovered) {
                    obj.onLeave();
                    obj.isHovered = false;
                }
            }
        });
    }

    handleMouseUp(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        this.gameObjects.forEach(obj => {
            if (obj.contains(mouseX, mouseY)) {
                obj.onClick();
            }
        });
    }
}

export default Director;
