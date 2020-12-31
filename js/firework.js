class Firework {
	constructor(x, y, color) {
		this.body = new Particle(x, y, color, true);
		this.particles = [];
	}

	update() {
		if (this.body.alive) {
			this.body.update();
		}
		else {
			for (let i = this.particles.length - 1; i >= 0; i--) {
				this.particles[i].update();

				if (!this.particles[i].alive) {
					this.particles.splice(i, 1);
				}
			}
		}

		if (this.body.velocity.y >= 0 && this.body.alive) {
			this.body.velocity.y = 0;
			this.body.alive = false;
			this.explode();
		}
	}

	render(ctx) {
		if (this.body.alive) {
			this.body.render(ctx);
		}
		else {
			this.particles.forEach(particle => {
				particle.render(ctx);
			});
		}
	}

	explode() {
		const size = random(20, 40);
		const color = Math.random() < 0.2 ? 'random' : this.body.color;

		for (let i = 0; i < size; i++) {
			this.particles.push(new Particle(this.body.x, this.body.y, color, false));
		}
	}
}