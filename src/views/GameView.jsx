import MainLayout from '@components/MainLayout';

const GameView = ({
    rounds,
    currentRound,
    timeLeft,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    nextRound,
    previousRound
}) => {
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