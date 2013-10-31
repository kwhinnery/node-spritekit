// Require a compatible npm module (i.e. no hard node dependencies)
var _ = require('underscore');

// A JS wrapper which kinda sorta represents an SKView
function Scene(options) {
    // protect against omission of "new" operator
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee(arguments);
    }

    // mix in user options with defaults
    _.extend(this, {
        backgroundColor:'#f4c430'
    },options||{});

    // track hierarchy of nodes
    this.nodes = [];
}

// A JS-friendly interface to add nodes
Scene.prototype.add = function(node) {
    this.nodes.push(node);
};

// Process any touch events from the actual nodes in native land
Scene.prototype.processEvents = function(events) {
    
};

module.exports = Scene;