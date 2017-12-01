let master;
const GAME_DELAY = 200;

function setup() {
	createCanvas(600, 600);

	master = new Master(25);
}

function draw() {
	frameRate(18);

	background(0);

	master.update();
	master.draw();
}

function keyPressed() {
	switch(key) {
	case 'A':
	case 'a':
		master.setSnakeDir(LEFT);
		break;
	case 'D':
	case 'd':
		master.setSnakeDir(RIGHT);
		break;
	case 'W':
	case 'w':
		master.setSnakeDir(UP);
		break;
	case 'S':
	case 's':
		master.setSnakeDir(DOWN);
		break;
	}
}

function mousePressed() {
	master.reset();
}
