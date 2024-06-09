class Playwright {
    name = "Playwright";
    sm;

    constructor(sm) {
        this.sm = sm;
        this.sm.logger.log("Initialized", this.name);
    }
}

export default Playwright;