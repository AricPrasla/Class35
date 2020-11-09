var ball;
var database,cball;
var position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    cball = createSprite(250,250,10,10);
    cball.shapeColor = "red";
    cball_pos = database.ref('ball/position');
    cball_pos.on("value",read_pos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}
function read_pos(data){
position = data.val();
cball.x = position.x;
cball.y = position.y;
}
function writePosition(x,y){
    database.ref('ball/position').set({
    'x':position.x + x,
    'y':position.y + y
    })
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
*/

