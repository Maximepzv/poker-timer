import GameArea from '@components/GameArea';
import RoundsSidebar from '@components/RoundsSidebar';
import styles from './styles.module.css';

const MainLayout = ({
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
        <div className={styles.mainLayout}>
            <GameArea
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
            <RoundsSidebar rounds={rounds} currentRound={currentRound} timeLeft={timeLeft} />
        </div>
    );
};

export default MainLayout;