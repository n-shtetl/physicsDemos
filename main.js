window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let position = new Vector(100,100);
    let velocity = new Vector(0,0);
    velocity.setLength(1);
    velocity.setAngle(Math.PI/2.1)
    console.log(velocity);
    update();

    function update() {
        context.clearRect(0,0,width,height);

        position = position.add(velocity);
        context.beginPath();
        context.arc(position.getX(), position.getY(), 10, 0, Math.PI*2, false);
        context.fill();

        requestAnimationFrame(update);
    }
}