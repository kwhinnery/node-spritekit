// global current scene
var currentScene;

// Present the given scene using SpriteKit
function presentScene(scene) {
    currentScene = scene;

    // Present the scene in native land
    __callNativeFunction('skPresentScene', {
        scene:scene
    });
}

// Define module interface
module.exports = {
    presentScene: presentScene,
    Scene: require('./Scene'),
    LabelNode: require('./LabelNode'),
    SpriteNode: require('./SpriteNode')
};