import React, { useRef, useEffect } from 'react';

// New interface for props
interface AnimatedGridBackgroundProps {
  particleColor?: string;
  lineColorRGB?: string; // e.g., '0, 229, 255' for rgba
  blobColors?: string[];
  backgroundColor?: string;
  particleDensity?: 'sparse' | 'medium' | 'dense' | number;
}

const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
    // Default values to maintain original appearance
    particleColor = 'rgba(0, 229, 255, 0.8)',
    lineColorRGB = '0, 229, 255',
    blobColors = [
        'rgba(108, 2, 184, 0.15)',
        'rgba(0, 115, 255, 0.1)',
        'rgba(0, 229, 255, 0.08)'
    ],
    backgroundColor = 'rgba(10, 15, 44, 0.1)',
    particleDensity = 'medium',
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // useEffect will re-run if props change
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let gradientBlobs: GradientBlob[] = [];
        const maxDistance = 120;

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 150,
        };

        class GradientBlob {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            color: string;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.radius = Math.random() * 300 + 300;
                // Use blobColors from component props
                this.color = blobColors[Math.floor(Math.random() * blobColors.length)];
            }

            update(canvasWidth: number, canvasHeight: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) this.vx *= -1;
                if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.globalCompositeOperation = 'lighter';
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'rgba(10, 15, 44, 0)');
                ctx.fillStyle = gradient;
                ctx.filter = 'blur(100px)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            baseX: number;
            baseY: number;

            constructor(x: number, y: number, vx: number, vy: number) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.vx = vx;
                this.vy = vy;
                this.radius = Math.random() * 1.5 + 0.5;
            }

            update() {
                // Mouse interaction
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * 0.5;
                    const directionY = forceDirectionY * force * 0.5;
                    this.vx += directionX;
                    this.vy += directionY;
                }
                
                // Damping
                this.vx *= 0.98;
                this.vy *= 0.98;

                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                // Use particleColor from component props
                ctx.fillStyle = particleColor;
                ctx.fill();
            }
        }

        const init = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            particles = [];
            gradientBlobs = [];
            
            let particleCount: number;

            if (typeof particleDensity === 'number') {
                particleCount = particleDensity;
            } else {
                const isMobile = canvas.width < 768;
                switch (particleDensity) {
                    case 'sparse':
                        particleCount = isMobile ? 20 : 40;
                        break;
                    case 'dense':
                        particleCount = isMobile ? 60 : 120;
                        break;
                    case 'medium':
                    default:
                        particleCount = isMobile ? 40 : 70;
                        break;
                }
            }


            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const vx = (Math.random() - 0.5) * 0.3;
                const vy = (Math.random() - 0.5) * 0.3;
                particles.push(new Particle(x, y, vx, vy));
            }
            
            for (let i = 0; i < 3; i++) {
                gradientBlobs.push(new GradientBlob(canvas.width, canvas.height));
            }
        };
        
        const connect = () => {
            if (!ctx) return;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = Math.sqrt(
                        (particles[a].x - particles[b].x) ** 2 +
                        (particles[a].y - particles[b].y) ** 2
                    );

                    if (distance < maxDistance) {
                        // Use lineColorRGB from component props
                        ctx.strokeStyle = `rgba(${lineColorRGB}, ${0.8 - distance / maxDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            
            // Use backgroundColor from component props to create trails
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw shifting gradients
            gradientBlobs.forEach(blob => {
                blob.update(canvas.width, canvas.height);
                blob.draw();
            });

            // Draw particles and connections
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        
        const handleMouseOut = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [particleColor, lineColorRGB, blobColors, backgroundColor, particleDensity]);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    );
};

export default AnimatedGridBackground;