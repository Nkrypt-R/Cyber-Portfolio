import { useState } from "react";
import { Window } from "./Window";
import { UnifiedTerminal } from "./UnifiedTerminal";

export const Desktop = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Unified Terminal Window */}
      {isTerminalOpen && (
        <Window
          title="Nkrypt-R Terminal"
          onClose={() => setIsTerminalOpen(false)}
          initialPosition={{ x: 50, y: 50 }}
          className="w-[90vw] max-w-[1200px] h-[85vh]"
        >
          <UnifiedTerminal />
        </Window>
      )}

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <div className="glass-intense border-t border-cyber-cyan/30 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsTerminalOpen(true)}
                className="px-4 py-2 rounded bg-gradient-to-r from-cyber-cyan to-cyber-purple text-black font-mono text-sm font-bold hover:opacity-80 transition-opacity glow-cyan"
              >
                START
              </button>
              {isTerminalOpen && (
                <button
                  onClick={() => setIsTerminalOpen(false)}
                  className="px-3 py-1.5 rounded glass text-xs font-mono text-foreground hover:bg-white/10 transition-colors"
                >
                  Nkrypt-R Terminal
                </button>
              )}
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
