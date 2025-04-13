import React, { useRef, useEffect, useState } from 'react';
import { FaEraser, FaPaintBrush, FaTrashAlt } from 'react-icons/fa';

type Tool = 'brush' | 'eraser';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#9b87f5');
  const [activeTool, setActiveTool] = useState<Tool>('brush');
  const [brushSize, setBrushSize] = useState(5);
  const [prevDrawing, setPrevDrawing] = useState<ImageData | null>(null);

  const colors = [
    '#9b87f5', // Purple
    '#7E69AB', // Dark purple
    '#FFFFFF', // White
    '#FF3366', // Pink
    '#33CCFF', // Blue
    '#66FF99', // Green
    '#FFCC33', // Yellow
    '#FF6633'  // Orange
  ];

  // Initialize canvas and handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      const context = canvas.getContext('2d');
      if (context) {
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = color;
        context.lineWidth = brushSize;
        setCtx(context);
        
        // Restore previous drawing if exists
        if (prevDrawing) {
          context.putImageData(prevDrawing, 0, 0);
        }
      }
    };

    setupCanvas();
    const handleResize = () => {
      if (!canvas || !ctx) return;
      
      // Save current drawing before resize
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setPrevDrawing(imageData);
      
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [color, brushSize, prevDrawing]);

  // Update brush settings when tool or color changes
  useEffect(() => {
    if (!ctx) return;
    
    ctx.strokeStyle = activeTool === 'brush' ? color : '#1A1F2C';
    ctx.lineWidth = brushSize;
  }, [ctx, color, activeTool, brushSize]);

  // Drawing functions
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!ctx || !canvasRef.current) return;
    
    setIsDrawing(true);
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDrawing = () => {
    if (!ctx) return;
    setIsDrawing(false);
    ctx.closePath();
  };

  const clearCanvas = () => {
    if (!ctx || !canvasRef.current) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setPrevDrawing(null);
  };

  const preventScroll = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (isDrawing) e.preventDefault();
  };

  return (
    <div className="glass-panel h-full flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="p-3 border-b border-purple-800/30 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-purple-400">Drawing Canvas</h2>
        <button
          onClick={clearCanvas}
          className="p-1.5 bg-purple-500/20 hover:bg-purple-500/40 rounded-full transition-colors"
          title="Clear Canvas"
          aria-label="Clear canvas"
        >
          <FaTrashAlt className="text-purple-400 text-sm" />
        </button>
      </div>
      
      {/* Canvas Area */}
      <div className="flex-1 relative">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
          onTouchStart={startDrawing}
          onTouchMove={(e) => {
            preventScroll(e);
            draw(e);
          }}
          onTouchEnd={endDrawing}
          className="absolute inset-0 touch-none cursor-crosshair w-full h-full bg-gray-800"
        />
      </div>
      
      {/* Controls */}
      <div className="p-3 border-t border-purple-800/30">
        {/* Color Palette */}
        <div className="flex flex-wrap gap-2 mb-3">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => { 
                // Save current drawing before changing color
                if (ctx && canvasRef.current) {
                  setPrevDrawing(ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
                }
                setColor(c); 
                setActiveTool('brush'); 
              }}
              className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                color === c && activeTool === 'brush' ? 'scale-110 ring-2 ring-white' : ''
              }`}
              style={{ backgroundColor: c }}
              title={`Color: ${c}`}
              aria-label={`Select color ${c}`}
            />
          ))}
        </div>
        
        {/* Tool Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTool('brush')}
              className={`p-2 rounded-md transition-colors ${
                activeTool === 'brush' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
              }`}
              title="Brush Tool"
              aria-label="Brush tool"
            >
              <FaPaintBrush className="text-sm" />
            </button>
            
            <button
              onClick={() => setActiveTool('eraser')}
              className={`p-2 rounded-md transition-colors ${
                activeTool === 'eraser' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
              }`}
              title="Eraser Tool"
              aria-label="Eraser tool"
            >
              <FaEraser className="text-sm" />
            </button>
          </div>
          
          {/* Brush Size Control */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/80">Size:</span>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => {
                const newSize = parseInt(e.target.value);
                // Save current drawing before changing size
                if (ctx && canvasRef.current) {
                  setPrevDrawing(ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
                }
                setBrushSize(newSize);
              }}
              className="w-24 accent-purple-500"
              aria-label="Brush size"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;