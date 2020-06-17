window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const ship = new Particle(width/2, height/2, 0, 0);
    const thrust = new Vector(0,0);
    let angle = 0;
    let turningLeft = false;
    let turningRight = false;
    let thrusting = false;

    update();

    document.body.addEventListener("keydown",function(e) {
        switch(e.keyCode) {
            case 38: //up
                thrusting = true;
                break;
            case 37: //left
                turningLeft = true;
                break;
            case 39: //right
                turningRight = true;
                break;
            default: 
                break;
        }
    })

    document.body.addEventListener("keyup",function(e) {
        switch(e.keyCode) {
            case 38: // up
                thrusting = false;
                break;
            case 37: // left
                turningLeft = false;
                break;
            case 39: // right
                turningRight = false;
                break;
            default: 
                break;
        }
    })

    function update() {
        context.clearRect(0,0,width,height);

        if (turningLeft) {
            angle -= Math.PI/24;
        } else if (turningRight) {
            angle += Math.PI/24;
        }

        thrust.setAngle(angle);

        if (thrusting) {
            thrust.setLength(0.1);
        } else {
            thrust.setLength(0);
        }

        ship.accelerate(thrust);
        ship.update();

        context.save();
        context.translate(ship.position.getX(), ship.position.getY());
        context.rotate(angle);

        context.beginPath();
        context.moveTo(10,0);
        context.lineTo(-10,-7);
        context.lineTo(-10,7);
        context.lineTo(10,0);
        if (thrusting) {
            context.moveTo(10,0);
            context.lineTo(-18,0);
        }
        context.stroke();

        context.restore();

        if (ship.position.getX() > width) {
            ship.position.setX(0)
        } else if (ship.position.getX() < 0) {
            ship.position.setX(width);
        } else if (ship.position.getY() > height) {
            ship.position.setY(0);
        } else if (ship.position.getY() < 0) {
            ship.position.setY(height);
        }


        requestAnimationFrame(update);
    }
}