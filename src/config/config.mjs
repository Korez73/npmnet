export class Config { //this is our 'container'

    addTransient(serviceName, service) {
        console.log("DEBUG: addTransient:" + serviceName);
        this[serviceName] = service;
        return this; //return ourselves so we can do fluent chaining
    }

    getService(key) {
        return new this[key](); //basic service factory
    }

    setPort(port) {
        console.log("DEBUG: setPort:", port);
        this.port = port;
        return this; //return for chaining
    }

    getPort() {
        return this.port;
    }
}