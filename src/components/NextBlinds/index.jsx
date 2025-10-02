import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const NextBlinds = ({ rounds, currentRound, timeLeft }) => {
    const { t } = useTranslation();
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={styles.nextBlinds}>
            <h3>{t('NEXT BLINDS')}</h3>
            <div className={styles.nextBlindsInfo}>
                <span className={styles.nextBlindsValues}>
                    {currentRound < rounds.length - 1
                        ? `${rounds[currentRound + 1]?.smallBlind} / ${rounds[currentRound + 1]?.bigBlind}`
                        : t('Tournament End')}
                </span>
                <span className={styles.nextBlindsTime}>
                    {currentRound < rounds.length - 1
                        ? t('in {{time}}', { time: formatTime(timeLeft) })
                        : ''}
                </span>
            </div>
        </div>
    );
};

export default NextBlinds;