import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const NextBlinds = ({ rounds, currentRound, timeLeft }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.nextBlinds}>
            <h3>{t('NEXT BLINDS')}</h3>
            <div className={styles.nextBlindsInfo}>
                <span className={styles.nextBlindsValues}>
                    {currentRound < rounds.length - 1
                        ? `${rounds[currentRound + 1]?.smallBlind} / ${rounds[currentRound + 1]?.bigBlind}`
                        : t('Tournament End')}
                </span>
                {timeLeft > 60 && <span className={styles.nextBlindsTime}>
                    {currentRound < rounds.length - 1
                        ? t('in {{timeLeft}} minutes', { timeLeft: Math.floor(timeLeft / 60) })
                        : ''}
                </span>}
            </div>
        </div>
    );
};

export default NextBlinds;