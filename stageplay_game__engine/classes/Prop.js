class Prop {
    constructor(id, x, y, width, height, hoverAction, clickAction, enterAction, leaveAction, interactive = false) {
        this.id = id;
        this.interactive = interactive;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hoverAction = hoverAction;
        this.clickAction = clickAction;
        this.enterAction = enterAction;
        this.leaveAction = leaveAction;
        this.isHovered = false;
        this.enterAnimationPlayed = false;
    }

    contains(mouseX, mouseY) {
        return mouseX >= this.x && mouseY >= this.y && mouseX <= this.x + this.width && mouseY <= this.y + this.height;
    }

    onHover() {
        if (this.interactive && this.hoverAction) {
            this.hoverAction();
        }
    }

    onClick() {
        if (this.interactive && this.clickAction) {
            this.clickAction();
        }
    }

    onEnter() {
        if (this.interactive && this.enterAction && !this.enterAnimationPlayed) {
            this.enterAction();
            this.enterAnimationPlayed = true;
        }
    }

    onLeave() {
        if (this.interactive && this.leaveAction) {
            this.leaveAction();
            this.enterAnimationPlayed = false;
        }
    }
}

export default Prop;
