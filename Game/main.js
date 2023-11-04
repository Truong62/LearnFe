const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 603;
canvas.height = 603;

let running = true;
let GREEN = "#00FF00";
let BLACK = "#000000";
let WHITE = "#FFFFFF";
let RED = "#FF0000";

let snakes = [[5, 10]];
let direction = "right";

let apple = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
let score = 0;

let pausing = false;

function draw() {
  ctx.fillStyle = BLACK;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let tail_x = snakes[0][0];
  let tail_y = snakes[0][1];

  ctx.fillStyle = GREEN;
  for (let i = 0; i < snakes.length; i++) {
    ctx.fillRect(snakes[i][0] * 30, snakes[i][1] * 30, 30, 30);
  }

  ctx.fillStyle = RED;
  ctx.fillRect(apple[0] * 30, apple[1] * 30, 30, 30);

  if (
    snakes[snakes.length - 1][0] === apple[0] &&
    snakes[snakes.length - 1][1] === apple[1]
  ) {
    snakes.unshift([tail_x, tail_y]);
    apple = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
    score += 1;
  }

  if (
    snakes[snakes.length - 1][0] < 0 ||
    snakes[snakes.length - 1][0] > 19 ||
    snakes[snakes.length - 1][1] < 0 ||
    snakes[snakes.length - 1][1] > 19
  ) {
    pausing = true;
  }

  ctx.fillStyle = WHITE;
  ctx.font = "20px sans-serif";
  ctx.fillText("Score: " + score, 5, 20);

  if (!pausing) {
    if (direction === "right") {
      snakes.push([
        snakes[snakes.length - 1][0] + 1,
        snakes[snakes.length - 1][1],
      ]);
      snakes.shift();
    }
    if (direction === "left") {
      snakes.push([
        snakes[snakes.length - 1][0] - 1,
        snakes[snakes.length - 1][1],
      ]);
      snakes.shift();
    }
    if (direction === "up") {
      snakes.push([
        snakes[snakes.length - 1][0],
        snakes[snakes.length - 1][1] - 1,
      ]);
      snakes.shift();
    }
    if (direction === "down") {
      snakes.push([
        snakes[snakes.length - 1][0],
        snakes[snakes.length - 1][1] + 1,
      ]);
      snakes.shift();
    }
  }

  for (let i = 0; i < snakes.length - 1; i++) {
    if (
      snakes[snakes.length - 1][0] === snakes[i][0] &&
      snakes[snakes.length - 1][1] === snakes[i][1]
    ) {
      pausing = true;
    }
  }

  if (pausing) {
    ctx.fillStyle = WHITE;
    ctx.font = "50px sans-serif";
    ctx.fillText("Game over, \nscore: " + score, 50, 200);
    ctx.fillText("Press Space to continue", 50, 300);
  }

  setTimeout(draw, 100);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  }
  if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  }
  if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  }
  if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
  if (event.key === " " && pausing) {
    pausing = false;
    snakes = [[5, 10]];
    apple = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
    score = 0;
  }
});

draw();
