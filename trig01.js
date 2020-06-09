window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    context.translate(0, height / 2);
    context.scale(1,-1);

    for (let angle = 0; angle < Math.PI * 2; angle += .01) {
        let x1 = angle * 200;
        let y1 = Math.sin(angle) * 200;
        let x2 = angle * 200;
        let y2 = Math.cos(angle) * 200;

        console.log(y1, y2);

        context.fillRect(x1,y1,5,5);
        context.fillRect(x2,y2,5,5);
    }

}