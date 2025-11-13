"use client"

import { useState } from "react";
import { StatusAnimation } from "@/src/components/StatusAnimation";

const PRESET_STATUSES = [
  "Checking wallet…",
  "Fetching collections…",
  "Done!",
  "Processing transaction…",
  "Loading assets…"
];

export default function Home() {
  const [currentStatus, setCurrentStatus] = useState(PRESET_STATUSES[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStatusChange = (newStatus: string) => {
    setIsAnimating(true);
    setCurrentStatus(newStatus);
    // Reset animation flag after a delay to allow for next animation
    setTimeout(() => setIsAnimating(false), 100);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="w-full max-w-4xl space-y-6 sm:space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Glitch Status Animation Demo
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            A reusable React component for animated status transitions
          </p>
        </div>

        {/* Animation Display - Front and Center */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 py-8 sm:py-12 md:py-16">
          <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 border border-border min-h-[100px] sm:min-h-[120px] flex items-center justify-center w-full">
            <StatusAnimation
              currentStatus={currentStatus}
              isAnimating={isAnimating}
              className="text-primary font-mono tracking-wider text-xl sm:text-2xl md:text-3xl"
              fontSize="text-xl sm:text-2xl md:text-3xl"
              fontFamily="font-bold"
            />
          </div>

          {/* Status Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center w-full px-2">
            {PRESET_STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors duration-200 border border-border hover:border-ring font-medium text-xs sm:text-sm md:text-base"
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 border border-border space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">How to Reuse This Component</h2>
          
          <div className="space-y-3 sm:space-y-4 text-muted-foreground">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">1. Import the Component</h3>
              <pre className="bg-muted rounded p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
                <code className="text-primary break-all">{`import { StatusAnimation } from "@/src/components/StatusAnimation";`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">2. Use in Your Component</h3>
              <pre className="bg-muted rounded p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
                <code className="text-primary whitespace-pre-wrap break-words">{`<StatusAnimation
  currentStatus="Your status text"
  isAnimating={true}
  className="text-primary"
  fontSize="text-2xl"
  fontFamily="font-bold"
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Props</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                <li><code className="text-primary">currentStatus</code> - The status text to display</li>
                <li><code className="text-primary">isAnimating</code> - Boolean to trigger animation on status change</li>
                <li><code className="text-primary">className</code> - Additional CSS classes (optional)</li>
                <li><code className="text-primary">fontSize</code> - Tailwind font size class (optional, default: "text-sm")</li>
                <li><code className="text-primary">fontFamily</code> - Tailwind font weight class (optional, default: "font-medium")</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
