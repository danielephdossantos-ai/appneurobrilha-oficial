import React, { useRef, useEffect, useState } from "react";

interface TracingProps {
  text: string;
  onComplete: () => void;
  color?: string;
}

export const Tracing: React.FC<TracingProps> = ({ text, onComplete, color = "#FF5D5D" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = 200;
        drawText();
      }
    };

    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 80px "Comic Sans MS", "Chalkboard SE", cursive';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw background text for tracing
      ctx.strokeStyle = "#E2E8F0";
      ctx.lineWidth = 1;
      ctx.strokeText(text.toUpperCase(), canvas.width / 2, canvas.height / 2);

      // Draw dashed line in the middle of letters (simplified)
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = "#CBD5E1";
      ctx.strokeText(text.toUpperCase(), canvas.width / 2, canvas.height / 2);
      ctx.setLineDash([]);

      // Draw starting points (Simplified: one green dot at the top-left-ish of the first letter)
      ctx.fillStyle = "#10B981";
      ctx.beginPath();
      ctx.arc(canvas.width / 2 - text.length * 20, canvas.height / 2 - 30, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("1", canvas.width / 2 - text.length * 20, canvas.height / 2 - 30);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [text]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    const pos = getPos(e);
    setPoints([pos]);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || completed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const pos = getPos(e);
    const lastPoint = points[points.length - 1];

    ctx.strokeStyle = color;
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    setPoints([...points, pos]);

    // Simple completion check: if user draws enough points
    if (points.length > 100 && !completed) {
      // Logic for real tracing completion would be more complex (path checking)
      // For now, we'll use a simpler heuristic or just a button to confirm.
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    // After some drawing, show completion button
    if (points.length > 50) {
      // setCompleted(true);
    }
  };

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full bg-white rounded-3xl border-4 border-dashed border-muted p-4 mb-4 touch-none">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full cursor-crosshair"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={() => {
              const canvas = canvasRef.current;
              const ctx = canvas?.getContext("2d");
              if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Redraw background
                ctx.font = 'bold 80px "Comic Sans MS", "Chalkboard SE", cursive';
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.strokeStyle = "#E2E8F0";
                ctx.strokeText(text.toUpperCase(), canvas.width / 2, canvas.height / 2);
                ctx.setLineDash([5, 5]);
                ctx.strokeStyle = "#CBD5E1";
                ctx.strokeText(text.toUpperCase(), canvas.width / 2, canvas.height / 2);
                ctx.setLineDash([]);
              }
              setPoints([]);
            }}
            className="bg-muted p-2 rounded-full hover:bg-muted/80 transition"
          >
            🔄
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          setCompleted(true);
          onComplete();
        }}
        className="btn-tap bg-success text-white px-8 py-3 rounded-full font-black text-xl shadow-glow"
      >
        TERMINEI! ✨
      </button>
    </div>
  );
};
