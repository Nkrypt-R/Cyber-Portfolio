import { useEffect, useState } from "react";

interface BootSequenceProps {
  onComplete: () => void;
}

const bootSteps = [
  "INITIALIZING  Nkrypt-R...",
  "LOADING KERNEL MODULES...",
  "CHECKING SYSTEM INTEGRITY...",
  "DECRYPTING CORE SYSTEMS...",
  "MOUNTING FILE SYSTEMS...",
  "STARTING NETWORK SERVICES...",
  "INITIALIZING FIREWALL...",
  "LOADING USER PROFILE...",
  "BOOT COMPLETE. WELCOME BACK."
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 300);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= bootSteps.length - 1) {
          clearInterval(stepInterval);
          clearInterval(dotInterval);
          setTimeout(onComplete, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => {
      clearInterval(dotInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="scanlines w-full max-w-2xl px-8">
        {/* Logo */}
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h1 className="text-6xl font-bold text-glow-cyan mb-2 font-mono">
              <span className="text-cyber-purple">Nk</span>rypt-R
              <span className="text-cyber-pink"> OS</span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink glow-cyan" />
          </div>
          <p className="mt-4 text-muted-foreground font-mono">v2.0.0 | SECURE BOOT ENABLED</p>
        </div>

        {/* Boot Steps */}
        <div className="space-y-2 font-mono text-sm">
          {bootSteps.slice(0, currentStep + 1).map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 transition-all duration-300 ${
                index === currentStep ? "text-cyber-cyan text-glow-cyan" : "text-muted-foreground"
              }`}
            >
              <span className="text-cyber-green">[OK]</span>
              <span>{step}</span>
              {index === currentStep && <span className="animate-pulse">{dots}</span>}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 glass rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink glow-cyan transition-all duration-300"
            style={{ width: `${((currentStep + 1) / bootSteps.length) * 100}%` }}
          />
        </div>

        {/* System Status */}
        <div className="mt-6 flex justify-between text-xs font-mono text-muted-foreground">
          <span>SYSTEM STATUS: BOOTING</span>
          <span>{Math.round(((currentStep + 1) / bootSteps.length) * 100)}%</span>
        </div>
      </div>
    </div>
  );
};
