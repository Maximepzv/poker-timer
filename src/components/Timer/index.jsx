import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const Timer = ({ timeLeft, smallBlind, bigBlind }) => {
    const { t } = useTranslation();
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={styles.mainTimer}>
            <div className={styles.timerDisplay}>{formatTime(timeLeft)}</div>
            <div className={styles.blindsDisplay}>
                {t('BLINDS {{smallBlind}} / {{bigBlind}}', { smallBlind, bigBlind })}
            </div>
        </div>
    );
};

export default Timer;