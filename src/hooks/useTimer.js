import { useState, useEffect } from 'react';

export const useTimer = (rounds, soundEnabled, voiceSoundsEnabled, playSound) => {
    const [currentRound, setCurrentRound] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);

    // Initialize timeLeft when rounds are loaded
    useEffect(() => {
        if (rounds && rounds.length > 0 && timeLeft === null) {
            setTimeLeft(rounds[0].time * 60);
        }
    }, [rounds, timeLeft]);

    // Timer interval
    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(previousTime => {
                    if (previousTime <= 1) {
                        if (currentRound < rounds.length - 1) {
                            setCurrentRound(currentRound + 1);
                            // Alert sound (sound effect)
                            if (soundEnabled) playSound('/sounds/alert.wav');
                            if (soundEnabled && voiceSoundsEnabled) playSound('/sounds/up.wav');
                        } else {
                            setIsRunning(false);
                        }
                        return rounds[currentRound + 1]?.time * 60 || 0;
                    }
                    return previousTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft, currentRound, rounds, soundEnabled, voiceSoundsEnabled, playSound]);

    const startTimer = (onStart) => {
        const wasRunning = isRunning;

        if (!wasRunning && currentRound === 0 && timeLeft === rounds[0]?.time * 60) {
            if (onStart) onStart();
        }

        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(rounds[currentRound]?.time * 60 || 0);
    };

    const nextRound = () => {
        if (currentRound < rounds.length - 1) {
            setCurrentRound(currentRound + 1);
            setTimeLeft(rounds[currentRound + 1]?.time * 60 || 0);
            setIsRunning(false);
        }
    };

    const previousRound = () => {
        if (currentRound > 0) {
            setCurrentRound(currentRound - 1);
            setTimeLeft(rounds[currentRound - 1]?.time * 60 || 0);
            setIsRunning(false);
        }
    };

    return {
        currentRound,
        setCurrentRound,
        isRunning,
        timeLeft,
        setTimeLeft,
        startTimer,
        pauseTimer,
        resetTimer,
        nextRound,
        previousRound
    };
};
