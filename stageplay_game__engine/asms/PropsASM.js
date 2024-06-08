class PropsASM {
    constructor() {
        this.GameObjects = {};
        this.nextID = 0;
    }

    initalizeObjects(objects = []) {
        objects.forEach(object => {
            this.addGameObject(object);
        });
    }

    getNextId() {
        const ret = this.nextID;
        this.nextID++;
        return ret;
    }

    addGameObject(gameObject) {
        this.GameObjects[this.getNextId()] = {
            'gameObject': gameObject,
        };

    }

    getGameObjectById(gameObjectId) {
        return this.GameObjects[gameObjectId];
    }

    getAllGameObjects() {
        return Object.values(this.GameObjects);
    }
}

export default PropsASM;
