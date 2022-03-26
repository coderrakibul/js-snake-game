const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
let dir, score, balls, food;


function init() {
    dir = "right";
    score = 0;
    balls = [
        { x: 40, y: 40 },
        { x: 60, y: 40 },
        { x: 80, y: 40 },
    ];
    createFood();
}

function createFood(){
    food = {x:Math.floor(Math.random() * 39), y:Math.floor(Math.random() * 24)};
}

init();

document.addEventListener("keydown", function (e) {
    const keyCode = e.keyCode;
    if (e.keyCode == 37 && dir != "right") {
        dir = "left";
    }
    if (e.keyCode == 38 && dir != "down") {
        dir = "up";
    }
    if (e.keyCode == 39 && dir != "left") {
        dir = "right";
    }
    if (e.keyCode == 40 && dir != "up") {
        dir = "down";
    }

});

function add() {
    let lastBall = balls[balls.length - 1];
    if (dir == "right") {
        balls.push({ x: lastBall.x + 20, y: lastBall.y });
    }
    if (dir == "down") {
        balls.push({ x: lastBall.x, y: lastBall.y + 20 });
    }
    if (dir == "left") {
        balls.push({ x: lastBall.x - 20, y: lastBall.y });
    }
    if (dir == "up") {
        balls.push({ x: lastBall.x, y: lastBall.y - 20 });
    }
}

function animation() {
    ctx.clearRect(0, 0, 888, 555);
    balls.shift();
    add()
    let lastBall = balls[balls.length - 1];
    if(lastBall.x == food.x*20 && lastBall.y == food.y*20){
        score += 5;
        add();
        createFood();
    }

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (i == balls.length - 1) {
            ctx.fillStyle = "lightgreen";
        }
        else {
            ctx.fillStyle = "#ff0000";
        }


        if (ball.x > 780) {
            ball.x = 0;
        }
        if (ball.x < 0) {
            ball.x = 780;
        }
        if (ball.y > 480) {
            ball.y = 0;
        }
        if (ball.y < 0) {
            ball.y = 480;
        }

        //game over
        

        ctx.fillRect(ball.x, ball.y, 19, 19);
    }
    ctx.fillRect(food.x*20, food.y*20, 19, 19);
    ctx.fillText("Score: " + score, 380, 480);
}
setInterval(animation, 222);