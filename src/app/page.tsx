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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <main className="w-full max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Glitch Status Animation Demo
          </h1>
          <p className="text-muted-foreground text-lg">
            A reusable React component for animated status transitions
          </p>
        </div>

        {/* Animation Display - Front and Center */}
        <div className="flex flex-col items-center justify-center space-y-8 py-16">
          <div className="bg-card rounded-lg p-8 border border-border min-h-[120px] flex items-center justify-center w-full">
            <StatusAnimation
              currentStatus={currentStatus}
              isAnimating={isAnimating}
              className="text-primary font-mono tracking-wider"
              fontSize="text-3xl"
              fontFamily="font-bold"
            />
          </div>

          {/* Status Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {PRESET_STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className="px-6 py-3 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors duration-200 border border-border hover:border-ring font-medium"
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="bg-card rounded-lg p-8 border border-border space-y-6">
          <h2 className="text-2xl font-bold text-foreground">How to Reuse This Component</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Import the Component</h3>
              <pre className="bg-muted rounded p-4 overflow-x-auto text-sm">
                <code className="text-primary">{`import { StatusAnimation } from "@/src/components/StatusAnimation";`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Use in Your Component</h3>
              <pre className="bg-muted rounded p-4 overflow-x-auto text-sm">
                <code className="text-primary">{`<StatusAnimation
  currentStatus="Your status text"
  isAnimating={true}
  className="text-primary"
  fontSize="text-2xl"
  fontFamily="font-bold"
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Props</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
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
