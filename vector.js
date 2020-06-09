class Vector {
    constructor(x = 1, y = 0) {
        this.x = x;
        this.y = y; 
    }

    setX(x) {
        this.x = x;
    }

    getX() {
        return this.x;
    }

    setY(y) {
        this.y = y;
    }

    getY() {
        return this.y;
    }

    setAngle(angle) {
        const length = this.getLength();
        this.x = Math.cos(angle)*length;
        this.y = Math.sin(angle)*length;
    }

    getAngle() {
        return Math.atan2(this.y, this.x) * (180 / Math.PI);
    }

    setLength(length) {
        const angle = this.getAngle();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }

    getLength() {
        return Math.sqrt(this.x**2 + this.y**2)
    }

    add(v2) {
        return new Vector(this.x + v2.getX(), this.y + v2.getY())
    }

    subtract(v2) {
        return new Vector(this.x - v2.getX(), this.y - v2.getY())
    }

    multiply(val) {
        return new Vector(this.x * val, this.y * val);
    }
}



