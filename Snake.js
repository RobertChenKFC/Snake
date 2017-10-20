let master;
const GAME_DELAY = 200;

function setup() {
	createCanvas(600, 600).parent("sketch");

	master = new Master(25);
}

function draw() {
	frameRate(18);

	background(0);

	master.update();
	master.draw();
}

function keyPressed() {
	switch(keyCode) {
	case LEFT_ARROW:
		master.setSnakeDir(LEFT);
		break;
	case RIGHT_ARROW:
		master.setSnakeDir(RIGHT);
		break;
	case UP_ARROW:
		master.setSnakeDir(UP);
		break;
	case DOWN_ARROW:
		master.setSnakeDir(DOWN);
		break;
	}
}

function mousePressed() {
	master.reset();
}
