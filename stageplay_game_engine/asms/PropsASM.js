class PropsASM {
    constructor(sm) {
        this.sm = sm;
        this.props = {};
        this.nextID = 0;
    }

    loadSceneObjects(scene) {
        // TODO: Load Props located within Scene Location
    }

    getNextId() {
        const ret = this.nextID;
        this.nextID++;
        return ret;
    }

    addGameObject(prop) {
        this.props[this.getNextId()] = {
            'gameObject': prop,
        };

    }

    getGameObjectById(propId) {
        return this.GameObjects[propId];
    }

    getOnstageProps(){
        // TODO: Get all props listed as Onstage (Both Visible and Hidden Onstage Props)
    }

    findProp(mouseX, mouseY) {
        this.props.forEach()
    }
}

export default PropsASM;
