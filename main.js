window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 300;
    const gravity = new Vector(0, 0.1);

    for (let i = 0; i < numParticles; i++) {
        let p = new Particle(width / 2, height / 3, Math.random()*3+1, Math.random() * Math.PI * 2, Math.random(), Math.random())
        particles.push(p); 
    }

    update();

    function update() {
        context.clearRect(0,0,width,height);
        particles.forEach(particle => {
            particle.accelerate(gravity);
            particle.update();
            context.beginPath();
            context.arc(particle.position.getX(), particle.position.getY(), 5, 0, Math.PI*2, false);
            context.fill();
        })
        

        requestAnimationFrame(update);
    }
}