import Timer from '@components/Timer';
import BlindsValue from '@components/BlindsValue';
import ControlButtons from '@components/ControlButtons';
import styles from './styles.module.css';

const GameArea = ({
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
        <div className={styles.gameArea}>
            <Timer
                timeLeft={timeLeft}
            />
            <BlindsValue rounds={rounds} currentRound={currentRound} />
            <ControlButtons
                isRunning={isRunning}
                startTimer={startTimer}
                pauseTimer={pauseTimer}
                resetTimer={resetTimer}
                nextRound={nextRound}
                previousRound={previousRound}
                currentRound={currentRound}
                roundsLength={rounds.length}
            />
        </div>
    );
};

export default GameArea;