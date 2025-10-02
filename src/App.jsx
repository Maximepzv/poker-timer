import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserSettings } from '@hooks/useLocalStorage';
import GameView from '@views/GameView';
import SettingsView from '@views/SettingsView';
import Menu from '@components/Menu';
import SoundControl from '@components/SoundControl';
import '@app/App.css';

const App = () => {
    const { t } = useTranslation();
    const {
        settings,
        updateGlobalTime,
        updateSoundEnabled,
        updateVoiceSoundsEnabled,
        updateRounds,
        resetSettings
    } = useUserSettings();
    
    // Game states (not persisted)
    const [currentRound, setCurrentRound] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const [currentView, setCurrentView] = useState('game');
    const [playingSounds, setPlayingSounds] = useState([]);
    
    // Destructure persisted settings
    const { rounds, globalTime, soundEnabled, voiceSoundsEnabled } = settings;

    // Update page title when language changes
    useEffect(() => {
        document.title = t('Poker Timer');
    }, [t]);

    useEffect(() => {
        if (currentView === 'game') {
            setTimeLeft(rounds[currentRound]?.time * 60 || 0);
        }
    }, [currentRound, rounds, currentView]);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(previousTime => {
                    if (previousTime <= 1) {

                        if (currentRound < rounds.length - 1) {
                            setCurrentRound(currentRound + 1);
                            // Alert sound (sound effect)
                            if (soundEnabled) {
                                const alertAudio = new Audio(`/sounds/alert.wav`);
                                alertAudio.play().catch(err => console.error('Error playing sound:', err));
                            }
                            // Voice sound "up"
                            if (soundEnabled && voiceSoundsEnabled) {
                                const upAudio = new Audio(`/sounds/up.wav`);
                                upAudio.play().catch(err => console.error('Error playing sound:', err));
                            }
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
    }, [isRunning, timeLeft, currentRound, rounds, soundEnabled, voiceSoundsEnabled]);

    const startTimer = () => {
        const wasRunning = isRunning;
        setIsRunning(true);
        if (!wasRunning && currentRound === 0 && timeLeft === rounds[0]?.time * 60) {
            // Intro sound (sound effect)
            if (soundEnabled) {
                const introAudio = new Audio(`/sounds/intro.wav`);
                introAudio.volume = 0.5;
                introAudio.play().catch(err => console.error('Error playing sound:', err));
                setPlayingSounds(prev => [...prev, introAudio]);
                introAudio.onended = () => {
                    setPlayingSounds(prev => prev.filter(a => a !== introAudio));
                };
            }
            // Voice sound "shuffle up and deal"
            if (soundEnabled && voiceSoundsEnabled) {
                const shuffleAudio = new Audio(`/sounds/shuffle_up_and_deal.wav`);
                shuffleAudio.play().catch(err => console.error('Error playing sound:', err));
                setPlayingSounds(prev => [...prev, shuffleAudio]);
                shuffleAudio.onended = () => {
                    setPlayingSounds(prev => prev.filter(a => a !== shuffleAudio));
                };
            }
        }
    };

    const pauseTimer = () => {
        setIsRunning(false);
        playingSounds.forEach(audio => audio.pause());
        setPlayingSounds([]);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(rounds[currentRound]?.time * 60 || 0);
        playingSounds.forEach(audio => audio.pause());
        setPlayingSounds([]);
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

    const toggleSound = () => {
        updateSoundEnabled(!soundEnabled);
    };

    return (
        <div className="app">
            <SoundControl soundEnabled={soundEnabled} toggleSound={toggleSound} />

            <Menu currentView={currentView} setCurrentView={setCurrentView} />

            <div className="content-wrapper">
                {currentView === 'game' && (
                    <GameView
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
                )}
            </div>

            {currentView === 'config' && (
                <SettingsView
                    globalTime={globalTime}
                    setGlobalTime={updateGlobalTime}
                    rounds={rounds}
                    setRounds={updateRounds}
                    currentRound={currentRound}
                    setCurrentRound={setCurrentRound}
                    voiceSoundsEnabled={voiceSoundsEnabled}
                    setVoiceSoundsEnabled={updateVoiceSoundsEnabled}
                    resetSettings={resetSettings}
                />
            )}
        </div>
    );
};

export default App;