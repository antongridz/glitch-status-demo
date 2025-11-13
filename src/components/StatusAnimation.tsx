"use client"

import React, { useState, useEffect, useCallback } from 'react';

interface CharacterState {
  phase: 'original' | 'loading' | 'glitching' | 'final';
  glitchStartTime: number;
  glitchChars: string[];
  currentGlitchIndex: number;
  lastSwitchTime: number;
}

interface StatusAnimationProps {
  currentStatus: string;
  isAnimating: boolean;
  className?: string;
  fontSize?: string;
  fontFamily?: string;
}

export function StatusAnimation({
  currentStatus,
  isAnimating,
  className = "",
  fontSize = "text-sm",
  fontFamily = "font-medium"
}: StatusAnimationProps) {
  const [displayText, setDisplayText] = useState(currentStatus);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  const asciiChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`'];

  const getRandomAsciiChars = useCallback((count: number) => {
    const shuffled = [...asciiChars].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }, [asciiChars]);

  const runStatusAnimation = useCallback((startText: string, targetText: string) => {
    if (animationInProgress) return;

    setAnimationInProgress(true);
    const animLength = Math.max(startText.length, targetText.length);
    const decayDuration = 600; // 600ms decay - faster than rank animation
    const interval = 40; // 40ms interval - more responsive
    let currentStep = 0;

    // Initialize character states
    const characterStates: CharacterState[] = Array(animLength).fill(null).map(() => ({
      phase: 'original',
      glitchStartTime: 0,
      glitchChars: [],
      currentGlitchIndex: 0,
      lastSwitchTime: 0
    }));

    const animate = () => {
      const currentTime = Date.now();
      let allComplete = true;

      // Update character states - left to right animation
      for (let i = 0; i < animLength; i++) {
        const state = characterStates[i];
        const shouldStartGlitching = i >= currentStep && i < currentStep + 3; // 3 chars at once for smoother look

        if (state.phase === 'original' && shouldStartGlitching) {
          state.phase = 'glitching';
          state.glitchStartTime = currentTime;
          state.lastSwitchTime = currentTime;
          state.glitchChars = getRandomAsciiChars(3);
          state.currentGlitchIndex = 0;
        }

        // Update glitching characters
        if (state.phase === 'glitching') {
          const switchInterval = 80 + Math.random() * 80; // Faster switching for status
          if (currentTime - state.lastSwitchTime >= switchInterval) {
            state.currentGlitchIndex = Math.floor(Math.random() * state.glitchChars.length);
            state.lastSwitchTime = currentTime;
          }

          // Check if decay period is over
          if (currentTime - state.glitchStartTime >= decayDuration) {
            state.phase = 'final';
          }
        }

        // Check if animation is complete
        if (state.phase !== 'final') {
          allComplete = false;
        }
      }

      // Build the display text
      let newText = '';
      for (let i = 0; i < animLength; i++) {
        const state = characterStates[i];

        if (state.phase === 'final') {
          newText += targetText[i] || '';
        } else if (state.phase === 'glitching') {
          newText += state.glitchChars[state.currentGlitchIndex] || state.glitchChars[0];
        } else {
          newText += startText[i] || '';
        }
      }

      setDisplayText(newText);

      // Advance the animation
      if (currentStep < animLength) {
        currentStep++;
      }

      // Check if animation is complete
      if (allComplete) {
        setDisplayText(targetText);
        setAnimationInProgress(false);
        return;
      }

      setTimeout(animate, interval);
    };

    animate();
  }, [animationInProgress, getRandomAsciiChars]);

  // Trigger animation when status changes or when isAnimating is triggered
  useEffect(() => {
    if (isAnimating && currentStatus && !animationInProgress) {
      // Always animate when isAnimating is true, even if status is the same (allows replay)
      runStatusAnimation(displayText, currentStatus);
    } else if (!animationInProgress && !isAnimating) {
      // Just update the display text when not animating
      setDisplayText(currentStatus);
    }
  }, [currentStatus, isAnimating, displayText, runStatusAnimation, animationInProgress]);

  return (
    <span className={`${fontSize} ${fontFamily} ${className}`}>
      {displayText}
    </span>
  );
}

