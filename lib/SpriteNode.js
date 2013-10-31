var _ = require('underscore');

// Create a sprite texture node
function SpriteNode(image, options) {
    // protect against omission of "new" operator
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee(arguments);
    }

    // mix in user options with defaults
    _.extend(this, {
        image:image,
        x:0,
        y:0,
        height:42,
        width:42
    },options||{});
    
    // Set node type
    this.nodeType = 'sprite';

    // Set a unique ID for node (timestamp?)
    this.guid = ''+new Date().getTime();

    // track hierarchy of nodes
    this.nodes = [];
}

// Nodes can have children in SpriteKit
SpriteNode.prototype.add = function(node) {
    this.nodes.push(node);
};

module.exports = SpriteNode;