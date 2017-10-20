const LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
const MAX_LEN = 100;

class Snakey {
	constructor(len, startI, startJ, dw) {
		this.cells = [];
		this.len = len;
		this.dir = LEFT;

		this.cells.push(new Cell(startI, startJ++, dw, HEAD));
		for(let i = 1; i < MAX_LEN; i++)
			this.cells.push(new Cell(startI, startJ++, dw, SNAKE)); 
	}

	update(w) {
		for(let i = this.len - 1; i >= 1; i--) {
			this.cells[i].copyFrom(this.cells[i - 1]);
		}
		
		let head = this.cells[0];	
		switch(this.dir) {
		case LEFT:
			head.j--;
			if(head.j < 0) head.j = w - 1;
			break;
		case RIGHT:
			head.j++;
			if(head.j >= w) head.j = 0;
			break;
		case UP:
			head.i--;
			if(head.i < 0) head.i = w - 1;
			break;
		case DOWN:
			head.i++;
			if(head.i >= w) head.i = 0;
			break;
		}
	}

	draw() {
		for(let i = 0; i < this.len; i++)
			this.cells[i].draw();
	}	

	covers(fruit) {
		return this.cells.some((cell) => {
			if(cell.overlaps(fruit.getCell()))
				return true;
		});	
	}

	tryToEat(fruit, w, dw) {
		if(this.cells[0].overlaps(fruit.getCell())) {
			this.len++;
			fruit.move(w, dw, this);
		}
	}

	setDir(dir) {
		switch(this.dir) {
		case LEFT:
			if(dir != RIGHT) this.dir = dir;
			break;
		case RIGHT:
			if(dir != LEFT) this.dir = dir;
			break;
		case UP:
			if(dir != DOWN) this.dir = dir;
			break;
		case DOWN:
			if(dir != UP) this.dir = dir;
			break;
		}
	}

	overlaps() {
		let head = this.cells[0];
		for(let i = 1; i < this.len; i++)
			if(head.overlaps(this.cells[i])) return true;
		return false;
	}
}
