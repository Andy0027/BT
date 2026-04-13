import React, { useEffect, useRef } from "react";
import { MdDevices, MdMemory, MdStorage, MdRouter, MdCloudCircle, MdLanguage } from "react-icons/md";

const nodes = [
    { x: 12.5, y: 50, label: "Edge", icon: <MdDevices /> },
    { x: 37.5, y: 16.6, label: "Core", icon: <MdMemory /> },
    { x: 37.5, y: 83.3, label: "Database", icon: <MdStorage /> },
    { x: 62.5, y: 50, label: "Gateway", icon: <MdRouter /> },
    { x: 87.5, y: 16.6, label: "Storage", icon: <MdCloudCircle /> },
    { x: 87.5, y: 83.3, label: "CDN", icon: <MdLanguage /> },
];

const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]
];

const HeroInfraVisual = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const setDimensions = () => {
            const container = canvas.parentElement;
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };
        setDimensions();
        window.addEventListener("resize", setDimensions);

        class Particle {
            constructor(startX, startY, targetX, targetY) {
                this.startX = startX;
                this.startY = startY;
                this.targetX = targetX;
                this.targetY = targetY;
                this.progress = 0;
                this.speed = 0.005 + Math.random() * 0.01;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.progress += this.speed;
                if (this.progress >= 1) this.progress = 0;
            }

            draw() {
                const currentX = (this.startX / 100) * canvas.width;
                const currentY = (this.startY / 100) * canvas.height;
                const targetX = (this.targetX / 100) * canvas.width;
                const targetY = (this.targetY / 100) * canvas.height;

                const x = currentX + (targetX - currentX) * this.progress;
                const y = currentY + (targetY - currentY) * this.progress;
                
                ctx.beginPath();
                ctx.arc(x, y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "#2E5E99";
                ctx.shadowBlur = 5;
                ctx.shadowColor = "rgba(46, 94, 153, 0.3)";
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const particles = [];
        connections.forEach(([startIndex, endIndex]) => {
            const startNode = nodes[startIndex];
            const endNode = nodes[endIndex];
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    particles.push(new Particle(startNode.x, startNode.y, endNode.x, endNode.y));
                }, i * 1000);
            }
        });

        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            connections.forEach(([startIdx, endIdx]) => {
                const start = nodes[startIdx];
                const end = nodes[endIdx];
                ctx.beginPath();
                ctx.moveTo((start.x / 100) * canvas.width, (start.y / 100) * canvas.height);
                ctx.lineTo((end.x / 100) * canvas.width, (end.y / 100) * canvas.height);
                ctx.strokeStyle = "rgba(13, 36, 64, 0.3)";
                ctx.stroke();
            });
            ctx.setLineDash([]);

            // Draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", setDimensions);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="bg-[#E7F0FA] w-full aspect-[3/2] sm:aspect-[5/2] rounded-[1.5rem] sm:rounded-[2rem] border-[2px] sm:border-[3px] border-navy-main shadow-2xl relative overflow-hidden group hover:border-blue-primary transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-primary/10 rounded-full blur-3xl"></div>
                
                {/* Canvas for connections and particles */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-10 w-full h-full"
                />

                {/* DOM elements for Nodes (Icons) */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {nodes.map((node, index) => (
                        <div 
                            key={index}
                            className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        >
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl shadow-lg border-2 border-navy-main flex items-center justify-center text-navy-main text-lg sm:text-2xl relative z-10">
                                {node.icon}
                            </div>
                            <span className="mt-1 sm:mt-2 text-[10px] sm:text-[12px] font-bold text-navy-main whitespace-nowrap bg-white/80 px-1.5 sm:px-2 py-0.5 rounded-full border border-navy-main/20">
                                {node.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroInfraVisual;
