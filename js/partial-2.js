class Particle {
    dx = (Math.random() * 10) * (Math.random() < 0.5 ? -1: 1);
    dy =  (Math.random() * 10) * (Math.random() < 0.5 ? -1: 1);
    width = 20 + (Math.random() * 25);
    height = this.width;
    x = Math.random() * (innerWidth - this.width);
    y = Math.random() * (innerHeight - this.height);
    elm;

    constructor(){
        this.elm = document.createElement('div');
        this.elm.style.position = 'absolute';
        this.elm.style.left = `${this.x}px`;
        this.elm.style.top = `${this.y}px`;
        this.elm.style.width = `${this.width}px`;
        this.elm.style.height = `${this.height}px`;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.elm.style.backgroundColor = `rgb(${r},${g},${b})`;
        this.elm.style.borderRadius = `${Math.random() * 100}%`;
        this.elm.style.transform = `rotate(${Math.random() * 361}deg)`;

        document.body.append(this.elm);
    }

    move(){
        this.y += this.dy;
        this.x += this.dx;

        if (this.y >= (innerHeight - this.height) || this.y <= 0) this.dy = -this.dy;
        if (this.x >= (innerWidth - this.width) || this.x <= 0) this.dx = -this.dx;
        this.elm.style.top = `${this.y}px`;
        this.elm.style.left = `${this.x}px`;
    }
}

const particles = [];
for(let i = 0; i< 50; i++) particles.push(new Particle());

setInterval(()=> {
    particles.forEach(particle => particle.move());
},50);