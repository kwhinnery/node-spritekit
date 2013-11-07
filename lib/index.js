// global current scene
var currentScene;

// Present the given scene using SpriteKit
function presentScene(scene) {
    currentScene = scene;
    __presentScene(scene.nativeScene);
}

// Delegate event processing to current scene
__eventResponder = function(event) {
    currentScene.processEvent(event);
};

// Define module interface
module.exports = {
    presentScene: presentScene,
    Scene: require('./Scene'),
    LabelNode: require('./LabelNode'),
    SpriteNode: require('./SpriteNode')
};