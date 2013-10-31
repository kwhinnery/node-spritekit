var _ = require('underscore');

// Create a text label node
function LabelNode(text, options) {
    // protect against omission of "new" operator
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee(arguments);
    }

    // mix in user options with defaults
    _.extend(this, {
        text:text,
        fontFamily:'Helvetica',
        fontSize:12,
        color:'#000000',
        x:0,
        y:0
    },options||{});
    
    // Set node type
    this.nodeType = 'label';

    // Set a unique ID for node (timestamp?)
    this.guid = ''+new Date().getTime();

    // track hierarchy of nodes
    this.nodes = [];
}

// Nodes can have children in SpriteKit
LabelNode.prototype.add = function(node) {
    this.nodes.push(node);
};

module.exports = LabelNode;