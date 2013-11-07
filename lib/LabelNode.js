var _ = require('underscore'),
    uuid = require('node-uuid');

// Create a text label node
function LabelNode(text, options) {
    // protect against omission of "new" operator
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee(arguments);
    }

    // mix in user options with defaults
    this.options = {};
    _.extend(this.options, {
        text:text,
        fontFamily:'Helvetica',
        fontSize:12,
        color:'#000000',
        x:0,
        y:0,
        uuid:uuid.v1()
    },options||{});

    // Mix in managed node functionality
    _.extend(this, require('./ManagedNodeMixin'));
    
    // Set node type
    this.nativeNode = __NSKLabelNode.create(this.options);
}

// Nodes can have children in SpriteKit
LabelNode.prototype.add = function(node) {
    //
};

module.exports = LabelNode;