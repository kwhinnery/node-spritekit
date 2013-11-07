var _ = require('underscore');

module.exports = {
    // hold event handlers (right now, one per node)
    eventHandlers: {},

    // Determine what kind of object we're dealing with
    managedObjectType: 'Node',

    // register event handler
    on: function(eventName, handler) {
        this.eventHandlers[eventName] = handler;
    },

    // remove handler
    off: function(eventName) {
        this.eventHandlers[eventName] = null;
    },

    // fire an event
    fire: function(eventName, data) {
        if (this.eventHandlers[eventName]) {
            this.eventHandlers[eventName].call(this, data);
        }
    },

    // get a property
    get: function(prop) {
        return _.clone(this.options[prop]);
    },

    // set a managed property
    set: function(props) {
        _.extend(this.options, props); 
        if (this.managedObjectType === 'Scene') {
            this.nativeScene.updateScene(this.options);
        } else {
            this.nativeNode.update(this.options);
        }
    },

    // Add a physics body
    addPhysics: function(opts) {
        var self = this;
        var options = _.extend({
            shape:'rectangle',
            height:self.get('height'),
            width:self.get('width')
        },opts||{});
        this.nativeNode.addPhysics(options);
    }
};