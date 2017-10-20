class Master {
	constructor(w) {
		this.w = w;
		this.dw = width / this.w;

		let mid = floor(this.w / 2);
		this.snakey = new Snakey(3, mid, mid, this.dw); 
		this.fruit = new Fruit(this.w, this.dw, this.snakey);

		this.gameOver = false;
	}

	draw() {
		if(!this.gameOver) {
			this.snakey.draw();
			this.fruit.draw();
		}
		else {
			let boxX = width / 7, boxY = height / 3;
			let boxdx = width * 5 / 7, boxdy = height / 3;
			noStroke();
			fill(255);
			rect(boxX, boxY, boxdx, boxdy);

			textSize(30);
			textAlign(CENTER, CENTER);
			fill(0);
			text("Game over!", width / 2, boxY + boxdy / 3); 
			text("Click anywhere to continue", width / 2, boxY + boxdy * 2 / 3); 
		}
	}

	update() {
		if(!this.gameOver) {
			this.snakey.update(this.w);
			this.snakey.tryToEat(this.fruit, this.w, this.dw);

			if(this.snakey.overlaps()) this.gameOver = true;	
		}
	}

	setSnakeDir(dir) {
		if(!this.gameOver) this.snakey.setDir(dir);	
	}

	gameIsOver() {
		return this.gameOver;	
	}

	reset() {
		if(this.gameOver) {
			let mid = floor(this.w / 2);
			this.snakey = new Snakey(3, mid, mid, this.dw); 
			this.fruit = new Fruit(this.w, this.dw, this.snakey);
			
			this.gameOver = false;
		}
	}
}
