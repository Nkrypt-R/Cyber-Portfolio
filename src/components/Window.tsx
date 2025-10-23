import { ReactNode, useState } from "react";
import { X, Minus, Maximize2 } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  initialPosition?: { x: number; y: number };
  className?: string;
}

export const Window = ({
  title,
  children,
  onClose,
  initialPosition = { x: 100, y: 100 },
  className = "",
}: WindowProps) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useState(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  });

  return (
    <div
      className={`absolute glass rounded-lg shadow-2xl overflow-hidden border border-cyber-cyan/30 ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        minWidth: "400px",
        maxWidth: "90vw",
        maxHeight: "80vh",
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-cyber-cyan/30 cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyber-cyan glow-cyan" />
          <span className="text-sm font-mono text-cyber-cyan">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <Minus className="w-3 h-3 text-muted-foreground" />
          </button>
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <Maximize2 className="w-3 h-3 text-muted-foreground" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-red-500/20 rounded transition-colors"
            >
              <X className="w-3 h-3 text-red-500" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="h-full overflow-auto">{children}</div>
    </div>
  );
};
