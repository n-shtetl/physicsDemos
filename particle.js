class Particle {
    constructor(x, y, speed, direction) {
        this.position = new Vector(x, y);
        let veloc = new Vector(0,0);
        veloc.setLength(speed);
        veloc.setAngle(direction);
        this.velocity = veloc;
    }

    accelerate(accel) {
        this.velocity = this.velocity.add(accel);
    }

    update() {
        this.position = this.position.add(this.velocity);
    }

    
}