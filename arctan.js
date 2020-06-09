window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let arrowX = width / 2;
    let arrowY = height / 2;

    let dx, dy;
    let angle = 0;
    let a = 0;
    
    render();

    function render() {
        arrowX = width / 2 + Math.cos(a) * height * .4;
		arrowY = height / 2 + Math.sin(a) * height * .4;
		a += .02;
        context.clearRect(0,0,width,height);

        context.save();
        context.translate(arrowX, arrowY);
        context.rotate(angle);

        context.beginPath();
        context.moveTo(20,0);
        context.lineTo(-20,0);
        context.moveTo(20,0);
        context.lineTo(10,-10);
        context.moveTo(20,0);
        context.lineTo(10,10);
        context.stroke();

        context.restore();
        requestAnimationFrame(render);
    }

    document.body.addEventListener("mousemove", function(event) {
        dx = event.clientX - arrowX;
        dy = event.clientY - arrowY;
        angle = Math.atan2(dy,dx);
    })

    document.body.addEventListener("click", function(event) {
        context.beginPath();
        context.arc(event.clientX,event.clientY, 20, 0, 2*Math.PI, false);
        context.fill(); 
    })
}