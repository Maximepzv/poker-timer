import styles from './styles.module.css';

const Timer = ({ timeLeft }) => {
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={styles.mainTimer}>
            <div className={styles.timerDisplay}>{formatTime(timeLeft)}</div>
        </div>
    );
};

export default Timer;