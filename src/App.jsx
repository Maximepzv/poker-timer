import { useState, useEffect } from 'react';
import GameView from '@views/GameView';
import SettingsView from '@views/SettingsView';
import Menu from '@components/Menu';
import SoundControl from '@components/SoundControl';
import '@app/App.css';

const App = () => {
    const [rounds, setRounds] = useState([
        { smallBlind: 1, bigBlind: 2, time: 17 },
        { smallBlind: 2, bigBlind: 4, time: 17 },
        { smallBlind: 5, bigBlind: 10, time: 17 },
        { smallBlind: 10, bigBlind: 20, time: 17 },
        { smallBlind: 15, bigBlind: 30, time: 17 },
        { smallBlind: 25, bigBlind: 50, time: 17 },
        { smallBlind: 50, bigBlind: 100, time: 17 },
        { smallBlind: 75, bigBlind: 150, time: 17 },
        { smallBlind: 100, bigBlind: 200, time: 17 },
    ]);
    const [globalTime, setGlobalTime] = useState(20);
    const [currentRound, setCurrentRound] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const [currentView, setCurrentView] = useState('game');
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [playingSounds, setPlayingSounds] = useState([]);

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
                            ['alert', 'up'].forEach(soundName => {
                                if (soundEnabled) {
                                    const audio = new Audio(`/sounds/${soundName}.wav`);
                                    audio.play().catch(err => console.error('Error playing sound:', err));
                                }
                            });
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
    }, [isRunning, timeLeft, currentRound, rounds, soundEnabled]);

    const startTimer = () => {
        const wasRunning = isRunning;
        setIsRunning(true);
        if (!wasRunning && currentRound === 0 && timeLeft === rounds[0]?.time * 60) {
            ['intro', 'shuffle_up_and_deal'].forEach(soundName => {
                if (soundEnabled) {
                    const audio = new Audio(`/sounds/${soundName}.wav`);
                    if (soundName === 'intro') {
                        audio.volume = 0.5;
                    }
                    audio.play().catch(err => console.error('Error playing sound:', err));
                    setPlayingSounds(prev => [...prev, audio]);
                    audio.onended = () => {
                        setPlayingSounds(prev => prev.filter(a => a !== audio));
                    };
                }
            });
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
        setSoundEnabled(!soundEnabled);
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
                    setGlobalTime={setGlobalTime}
                    rounds={rounds}
                    setRounds={setRounds}
                    currentRound={currentRound}
                    setCurrentRound={setCurrentRound}
                />
            )}
        </div>
    );
};

export default App;