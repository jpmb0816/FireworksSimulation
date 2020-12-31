class Particle {
	constructor(x, y, color, isBody) {
		this.x = x;
		this.y = y;
		this.width = 5;
		this.height = 5;

		if (color === 'random') {
			this.color = randomChoice(colors);
		}
		else {
			this.color = color;
		}

		this.isBody = isBody;

		if (!this.isBody) {
			this.velocity = { x: random(-4, 4), y: randomFloat(-4, 4) };
			this.gravity = 0.1;
			this.lifeSpan = 30;
		}
		else {
			this.velocity = { x: 0, y: random(-10, -15) };
			this.gravity = 0.4;
		}
		
		this.alive = true;
	}

	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;

		this.velocity.y += this.gravity;

		if (!this.isBody) {
			this.lifeSpan--;

			if (this.lifeSpan <= 0) {
				this.alive = false;
			}
		}
	}

	render(ctx) {
		if (this.alive) {
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
}