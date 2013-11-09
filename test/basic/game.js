var sk = require('../../lib');

var scene = new sk.Scene({
    backgroundColor:'#ff0000'
});

scene.on('touch', function(e) {
    scene.set({
        backgroundColor:'#ff5511'
    });
    console.log('[Scene]: '+JSON.stringify(e));
});

var label = new sk.LabelNode('Test Game!', {
    interactive:false,
    x:160,
    y:30,
    fontSize:28,
    fontFamily:'Chalkduster'
});
scene.add(label);

label.on('touch', function(e) {
    console.log('[Label]: '+JSON.stringify(e));
});

var ship = new sk.SpriteNode('Spaceship', {
    interactive:true,
    height:60,
    width:60,
    x:200,
    y:400
});
scene.add(ship);

ship.on('touch', function(e) {
    console.log('[Sprite]: '+JSON.stringify(e));
});

sk.presentScene(scene);