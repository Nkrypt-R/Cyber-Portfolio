import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { MatrixRain } from "@/components/MatrixRain";
import { Desktop } from "@/components/Desktop";

const Index = () => {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Matrix Rain Background */}
      {bootComplete && <MatrixRain />}

      {/* Scanline Effect */}
      {bootComplete && <div className="scanlines fixed inset-0 pointer-events-none z-40" />}

      {/* Boot Sequence */}
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}

      {/* Desktop Environment */}
      {bootComplete && (
        <div className="relative z-10">
          <Desktop />
        </div>
      )}
    </div>
  );
};

export default Index;
