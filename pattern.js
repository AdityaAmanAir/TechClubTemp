// Define Pattern Canvas utility
class MovingPattern {
    constructor(id, width, height, positionStyles) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = id;
        this.ctx = this.canvas.getContext('2d');

        // Setup styles
        Object.assign(this.canvas.style, {
            position: 'fixed',
            zIndex: '-1',
            pointerEvents: 'none',
            ...positionStyles
        });

        document.body.appendChild(this.canvas);

        this.width = width;
        this.height = height;
        this.nodes = [];
        this.numNodes = Math.floor((width * height) / 10000); // Density

        this.resize();
        this.initNodes();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        // Adjust for retina displays
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
    }

    initNodes() {
        this.nodes = [];
        const shades = ['#ffffff', '#f3f4f6', '#d1d5db', '#9ca3af', '#6b7280'];
        for (let i = 0; i < this.numNodes; i++) {
            this.nodes.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: shades[Math.floor(Math.random() * shades.length)]
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Draw Eyes/Nodes
        for (let i = 0; i < this.nodes.length; i++) {
            let node = this.nodes[i];

            // Move
            node.x += node.vx;
            node.y += node.vy;

            // Bounce
            if (node.x < 0 || node.x > this.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.height) node.vy *= -1;

            // Draw
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = node.color;
            this.ctx.fill();

            // Connect to nearby nodes (mesh pattern)
            for (let j = i + 1; j < this.nodes.length; j++) {
                let node2 = this.nodes[j];
                let dist = Math.hypot(node.x - node2.x, node.y - node2.y);

                if (dist < 80) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(node.x, node.y);
                    this.ctx.lineTo(node2.x, node2.y);
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${1 - (dist / 80)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Top right {"little"}
    let topPattern = new MovingPattern(
        'pattern-top-right',
        window.innerWidth * 0.3,
        window.innerHeight * 0.3,
        { top: '0', right: '0', width: '30vw', height: '30vh', opacity: '0.1' }
    );

    // Left bottom {"mid"}
    let bottomPattern = new MovingPattern(
        'pattern-bottom-left',
        window.innerWidth * 0.5,
        window.innerHeight * 0.5,
        { bottom: '0', left: '0', width: '50vw', height: '50vh', opacity: '0.15' }
    );

    function animate() {
        topPattern.draw();
        bottomPattern.draw();
        requestAnimationFrame(animate);
    }
    animate();
});
