// Require a compatible npm module (i.e. no hard node dependencies)
var _ = require('underscore');

// A JS wrapper which kinda sorta represents an SKView
function Scene(options) {
    // protect against omission of "new" operator
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee(arguments);
    }

    // mix in user options with defaults
    this.options = {};
    _.extend(this.options, {
        height:__height,
        width:__width,
        backgroundColor:'#000000'
    },options||{});

    // Manage an array of child nodes in JS
    this.children = [];

    // Mixin managed node functionality
    _.extend(this, require('./ManagedNodeMixin'));
    this.managedObjectType = 'Scene';

    // create native scene object
    this.nativeScene = __NSKScene.create(this.options);
}

// A JS-friendly interface to add nodes
Scene.prototype.add = function(node) {
    this.children.push(node);
    this.nativeScene.addChild(node.nativeNode);
};

// Process events for all child nodes
Scene.prototype.processEvent = function(event) {
    if (event.target === 'scene') {
        this.fire(event.eventType, event.data);
    } else {
        for (var i = 0, l = this.children.length; i<l; i++) {
            var child = this.children[i];
            if (child.options.uuid === event.target) {
                child.fire(event.eventType, event.data);
                break;
            }
        }
    }
};

module.exports = Scene;