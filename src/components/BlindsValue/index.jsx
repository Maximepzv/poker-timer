import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const BlindsValue = ({ rounds, currentRound }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.nextBlinds}>
                <h3>{t('SMALL BLIND')}</h3>
                <div className={styles.nextBlindsInfo}>
                    <span className={styles.nextBlindsValues}>
                        {rounds[currentRound]?.smallBlind}
                    </span>
                </div>
            </div>
            <div className={styles.nextBlinds}>
                <h3>{t('BIG BLIND')}</h3>
                <div className={styles.nextBlindsInfo}>
                    <span className={styles.nextBlindsValues}>
                        {rounds[currentRound]?.bigBlind}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlindsValue;