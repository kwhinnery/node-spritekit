var _ = require('underscore'),
    uuid = require('node-uuid');

// Create a sprite texture node
function SpriteNode(image, options) {
    // protect against omission of "new" operator
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee(arguments);
    }

    // mix in user options with defaults
    this.options = {};
    _.extend(this.options, {
        interactive: false,
        image:image,
        x:0,
        y:0,
        uuid:uuid.v1()
    },options||{});

    // Mix in managed node functionality
    _.extend(this, require('./ManagedNodeMixin')());
    
    // Set native node object
    this.nativeNode = __NSKSpriteNode.create(this.options);
}

// Nodes can have children in SpriteKit
SpriteNode.prototype.add = function(node) {
    //this.nodes.push(node);
};

module.exports = SpriteNode;