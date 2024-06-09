class SxDesigner {
    name = 'SxDesigner';
    sm;

    constructor(sm) {
        this.sm = sm;
        this.sm.logger.log("Initialized", this.name);
    }
}

export default SxDesigner;