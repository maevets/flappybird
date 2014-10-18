// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(800, 400, Phaser.AUTO, 'game', stateActions);
var score;
//alert(score);
var player;
var hole
//alert(hole);
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/Mario.jpg");
    game.load.audio("score", "assets/point.ogg");
    game.load.image("pipe", "assets/pipe.png");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {

    //game.physics.startSystem(Phaser.Physics.ARCADE);
    //game.physics.arcade.enable(player);

    // set the background colour of the scene
    game.stage.setBackgroundColor("#FFFFFF");
    //game.add.sprite(50, 270, "playerImg");
    //game.input.onDown.add(clickHandler);
    //game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    //game.add.audio("score");
    //score = 100;
    //alert(score);
    //score += 1;
    //alert(score);
    //game.add.text(50, 50, "whassssup!!");
    var x = 80;
    var y = 300;

    var rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightkey.onDown.add(moveRight);
    var leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    leftkey.onDown.add(moveLeft);
    var upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upkey.onDown.add(moveUp);
    var downkey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    downkey.onDown.add(moveDown);

for(var county = 0; county <=15; county=county+5){
    hole = Math.floor(Math.random()*5)+1;
    for (var count = 0; count <= hole-2; count++) {
        //game.add.text(20, count*40, "Clap");
            game.add.sprite(county*50, count * 50, "pipe");
        }
    for (var count = hole+3; count <= 7; count++) {
        //game.add.text(20, count*40, "Clap");
        game.add.sprite(county*50, count * 50, "pipe");
    }}
/*for (var county = 0; county <= 7; county++) {
    //game.add.text(20, count*40, "Clap");
    for (var countx = 0; countx <=1; countx++) {
             game.add.sprite(countx * 250, county * 50, "pipe");
    }
}*/
    player = game.add.sprite(x, y, "playerImg");
/*
    game.add.text(20, 20, "Clap");
    game.add.text(20, 50, "Clap");
    game.add.text(20, 80, "Clap");
    game.add.text(20, 110, "Clap");
    game.add.text(20, 140, "Clap");
*/
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

}

function clickHandler (event) {
    game.add.sprite(event.x, event.y, "playerImg");
}
function spaceHandler() {
    //Fill in the body - play sound
    game.sound.play("score")
}
function clickHandler2 (mouse) {
    player.x = mouse.x;
    player.y = mouse.y;
}
function moveLeft() {
    player.x = player.x-15;
}

function moveRight() {
    player.x = player.x+15;
}

function moveUp() {
    player.y = player.y-15;
}

function moveDown() {
    player.y = player.y+15;
}
