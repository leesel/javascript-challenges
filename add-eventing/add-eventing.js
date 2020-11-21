const addEventing = function (obj, name, age) {
    this.listener = {};
    this.name = obj.name;
    this.age = obj.age;

    this.on = function (eventName, eventHandler) {
        this.listener[eventName] = eventHandler;
    }
    this.trigger = function (eventName) {
        let eventHandler = this.listener[eventName];
        if(eventHandler !== undefined){
            eventHandler();
        }
    }
    return this;
}

module.exports = addEventing
