import Button from '@components/Button';
import styles from './styles.module.css';

const ControlButtons = ({
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    nextRound,
    previousRound,
    currentRound,
    roundsLength
}) => {
    return (
        <div className={styles.controlButtons}>
            <Button
                onClick={isRunning ? pauseTimer : startTimer}
                className={`btn ${isRunning ? 'btn-pause' : 'btn-start'}`}
            >
                {isRunning ? '⏸ PAUSE' : '▶ START'}
            </Button>
            <Button onClick={previousRound} className="btn btn-next" disabled={currentRound === 0}>
                ⏮ PREVIOUS
            </Button>
            <Button onClick={resetTimer} className="btn btn-reset">
                ⏹ RESET
            </Button>
            <Button onClick={nextRound} className="btn btn-next" disabled={currentRound === roundsLength - 1}>
                ⏭ NEXT
            </Button>
        </div>
    );
};

export default ControlButtons;