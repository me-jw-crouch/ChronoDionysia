class LxDesigner {
    name =  "LxDesigner";
    sm;

    constructor(sm) {
        this.sm = sm;
        this.sm.logger.log("Initialized", this.name);
    }
}

export default LxDesigner;
