class Fruit {
	constructor(w, dw, snake) {
		do {
			this.cell = new Cell(floor(random(w)), floor(random(w)), dw, FRUIT);
		} while(snake.covers(this));
	}	

	draw() {
		this.cell.draw();	
	}

	move(w, dw, snake) {
		do {
			this.cell = new Cell(floor(random(w)), floor(random(w)), dw, FRUIT);
		} while(snake.covers(this));
	}

	getCell() {
		return this.cell;	
	}
}
