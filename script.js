const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
let direction, score, balls, food;


function init(){
    direction = "right";
    score = 0;
    balls = [
        {x: 40, y: 40},
        {x: 60, y: 40},
        {x: 80, y: 40},
    ];
}
init();

function animation(){
    ctx.clearRect(0, 0, 888, 555);
    ctx.fillStyle = "#ff0000"
    for(let i=0; i< balls.length; i++){
       let ball = balls[i];
        ctx.fillRect(ball.x, ball.y, 19, 19);
    }
}
animation();