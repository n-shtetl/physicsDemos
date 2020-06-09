window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerY = height / 2;
    const centerX = width / 2;
    const xRadius = 100;
    const yRadius = 200;
    let xAngle = 0;
    let yAngle = 0;
    const xSpeed = 0.1;
    const ySpeed = 0.2

    let x, y;
    const r = 0;
    const centerG = 255/2;
    const centerB = 255/2;
    const gRadius = 100;
    const bRadius = 50;
    let gAngle = 0;
    let bAngle = 0;
    let g, b;

    render();

    function render() {
        x = centerX + Math.cos(xAngle) * xRadius;
        y = centerY + Math.sin(yAngle) * yRadius;

        g = centerG + Math.cos(gAngle) * gRadius;
        b = centerB + Math.sin(bAngle) * bRadius;

        context.beginPath();
        context.arc(x,y, 10, 0, Math.PI*2, false);
        context.fillStyle = `rgb(${r}, ${g}, ${b})`
        context.fill();

        gAngle += 0.1;
        bAngle += 2;

        xAngle += xSpeed;
        yAngle += ySpeed;

        requestAnimationFrame(render);
    }
}