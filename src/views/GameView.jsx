import { useState, useEffect } from 'react';
import { useUserSettings } from '@hooks/useLocalStorage';
import { useAudio } from '@hooks/useAudio';
import { useTimer } from '@hooks/useTimer';
import MainLayout from '@components/MainLayout';

const GameView = () => {
    const { settings } = useUserSettings();
    const { rounds, soundEnabled, voiceSoundsEnabled } = settings;
    
    const { playSound, stopSound } = useAudio();
    const [playingSounds, setPlayingSounds] = useState([]);

    const {
        currentRound,
        isRunning,
        timeLeft,
        setTimeLeft,
        startTimer: timerStart,
        pauseTimer: timerPause,
        resetTimer: timerReset,
        nextRound,
        previousRound
    } = useTimer(rounds, soundEnabled, voiceSoundsEnabled, playSound);

    // Update timeLeft when currentRound changes
    useEffect(() => {
        if (!isRunning) {
            setTimeLeft(rounds[currentRound]?.time * 60 || 0);
        }
    }, [currentRound, rounds, isRunning, setTimeLeft]);

    const startTimer = () => {
        timerStart(() => {
            // Clear any existing sounds before playing new ones
            playingSounds.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });

            // Intro sound (sound effect)
            if (soundEnabled) playSound('/sounds/intro.wav', 'intro', 0.5);

            // Voice sound "shuffle up and deal"
            if (soundEnabled && voiceSoundsEnabled) playSound('/sounds/shuffle_up_and_deal.wav', 'shuffle');
        });
    };

    const pauseTimer = () => {
        timerPause();
        stopSound('intro');
        stopSound('shuffle');
        setPlayingSounds([]);
    };

    const resetTimer = () => {
        timerReset();
        stopSound('intro', true);
        stopSound('shuffle', true);
        setPlayingSounds([]);
    };

    return (
        <MainLayout
            rounds={rounds}
            currentRound={currentRound}
            timeLeft={timeLeft}
            isRunning={isRunning}
            startTimer={startTimer}
            pauseTimer={pauseTimer}
            resetTimer={resetTimer}
            nextRound={nextRound}
            previousRound={previousRound}
        />
    );
};

export default GameView;