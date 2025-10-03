import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserSettings } from '@hooks/useLocalStorage';
import GameView from '@views/GameView';
import SettingsView from '@views/SettingsView';
import PrivacyView from '@views/PrivacyView';
import Menu from '@components/Menu';
import SoundControl from '@components/SoundControl';
import '@app/App.css';

const MainApp = () => {
    const { t } = useTranslation();
    const {
        settings,
        updateGlobalTime,
        updateSoundEnabled,
        updateVoiceSoundsEnabled,
        updateRounds,
        resetSettings
    } = useUserSettings();
    
    const { rounds, globalTime, soundEnabled, voiceSoundsEnabled } = settings;

    const [currentRound, setCurrentRound] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const [currentView, setCurrentView] = useState(() => {
        const path = window.location.pathname;
        if (path === '/privacy' || path === '/privacy.html') {
            return 'privacy';
        }
        return 'game';
    });
    const [playingSounds, setPlayingSounds] = useState([]);
    
    // Ref to store audio objects and prevent garbage collection
    const audioObjectsRef = useRef({ intro: null, shuffle: null });

    const playSound = (soundPath, refKey = null, volume = 1.0) => {
        const audio = new Audio(soundPath);
        audio.volume = volume;
        audio.preload = 'auto';

        if (refKey) {
            audioObjectsRef.current[refKey] = audio;
            audio.onended = () => audioObjectsRef.current[refKey] = null;
        }

        audio.onerror = (e) => console.error(`Error playing sound ${soundPath}:`, e);

        audio.load();
        audio.play().catch(err => console.error(`Error playing sound ${soundPath}:`, err));

        return audio;
    };

    const stopSound = (refKey, reset = false) => {
        const audio = audioObjectsRef.current[refKey];
        if (audio) {
            audio.pause();
            if (reset) {
                audio.currentTime = 0;
                audioObjectsRef.current[refKey] = null;
            }
        }
    };

    // Update page title when language changes
    useEffect(() => document.title = t('Poker Timer'), [t]);

    // Initialize timeLeft when rounds are loaded
    useEffect(() => {
        if (rounds && rounds.length > 0 && timeLeft === null) {
            setTimeLeft(rounds[0].time * 60);
        }
    }, [rounds, timeLeft]);

    useEffect(() => {
        if (currentView === 'game' && !isRunning) {
            setTimeLeft(rounds[currentRound]?.time * 60 || 0);
        }
    }, [currentRound, rounds, currentView, isRunning]);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(previousTime => {
                    if (previousTime <= 1) {

                        if (currentRound < rounds.length - 1) {
                            setCurrentRound(currentRound + 1);
                            // Alert sound (sound effect)
                            if (soundEnabled)  playSound('/sounds/alert.wav');
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
    }, [isRunning, timeLeft, currentRound, rounds, soundEnabled, voiceSoundsEnabled]);

    const startTimer = () => {
        const wasRunning = isRunning;

        if (!wasRunning && currentRound === 0 && timeLeft === rounds[0]?.time * 60) {
            // Clear any existing sounds before playing new ones
            playingSounds.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });

            // Intro sound (sound effect)
            if (soundEnabled) playSound('/sounds/intro.wav', 'intro', 0.5);

            // Voice sound "shuffle up and deal"
            if (soundEnabled && voiceSoundsEnabled) playSound('/sounds/shuffle_up_and_deal.wav', 'shuffle');
        }

        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
        stopSound('intro');
        stopSound('shuffle');
        setPlayingSounds([]);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(rounds[currentRound]?.time * 60 || 0);
        stopSound('intro', true);
        stopSound('shuffle', true);
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

    const toggleSound = () => updateSoundEnabled(!soundEnabled);

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

            {currentView === 'privacy' && <PrivacyView />}
        </div>
    );
};

const App = () => <MainApp />;

export default App;