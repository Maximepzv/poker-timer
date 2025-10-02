import styles from './styles.module.css';

const NextBlinds = ({ rounds, currentRound, timeLeft }) => {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={styles.nextBlinds}>
            <h3>NEXT BLINDS</h3>
            <div className={styles.nextBlindsInfo}>
                <span className={styles.nextBlindsValues}>
                    {currentRound < rounds.length - 1
                        ? `${rounds[currentRound + 1]?.smallBlind} / ${rounds[currentRound + 1]?.bigBlind}`
                        : 'Fin du tournoi'}
                </span>
                <span className={styles.nextBlindsTime}>
                    {currentRound < rounds.length - 1
                        ? `in ${formatTime(timeLeft)}`
                        : ''}
                </span>
            </div>
        </div>
    );
};

export default NextBlinds;