let x = 400; // The value of x needs to be "remembered" from frame to frame
let speed = 1

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
    circle(width - (x % width), height / 2, 40);
    x = x + speed;
}
