const SNAKE = 0, HEAD = 1, FRUIT = 2;

class Cell {
	constructor(i, j, dw, type) {
		this.i = i;
		this.j = j;
		this.dw = dw;
		this.type = type;
	}

	draw() {
		stroke(0);
		strokeWeight(1);

		switch(this.type) {
		case SNAKE:
			fill(255);
			break;
		case HEAD:
			fill(0, 255, 0);
			break;
		case FRUIT:
			fill(255, 0, 0);
			break;
		}

		rect(this.j * this.dw, this.i * this.dw, this.dw, this.dw);
	}

	set(type) {
		this.type = type;
	}	

	copyFrom(other) {
		this.i = other.i;
		this.j = other.j;
	}

	overlaps(other) {
		return this.i == other.i && this.j == other.j;	
	}
}
