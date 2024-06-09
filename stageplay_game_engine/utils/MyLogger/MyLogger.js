class MyLogger {
    name = "MyLogger";
    debug = false;
    filepathToLog;

    constructor(filepathToLog = '') {
        this.log("Initializing", this.name);
        if (filepathToLog != '') {
            this.filepathToLog = filepathToLog;
        }
    }

    setDebug() {
        this.debug = !this.debug;
        this.log("Debug set to " + this.debug, this.name);
    }

    log(message = 'UNKNOWN', sender = 'UNKNOWN') {
        if (this.debug) {
            if (this.logToFile) {
                console.log(sender + ' - ' + new Date().toLocaleTimeString() + ': ' +message);
            } else
        }
    }
}

export default MyLogger;
