import { useTranslation } from 'react-i18next';
import Rounds from '@components/Rounds';
import Button from '@components/Button';
import styles from './styles.module.css';

const ConfigSection = ({
    globalTime,
    setGlobalTime,
    rounds,
    setRounds,
    currentRound,
    setCurrentRound
}) => {
    const { t } = useTranslation();

    const applyGlobalTimeToAllRounds = () => {
        setRounds(rounds.map(round => ({ ...round, time: globalTime })));
    };

    return (
        <div className={styles.config}>
            <div className={styles.globalTimeSection}>
                <div className={styles.globalTimeInput}>
                    <label className={styles.label}>{t('Global Time (minutes)')}</label>
                    <input
                        type="number"
                        value={globalTime}
                        onChange={(event) => setGlobalTime(parseInt(event.target.value) || 0)}
                        className={styles.input}
                        min="1"
                    />
                </div>
                <Button onClick={applyGlobalTimeToAllRounds} className={styles.applyButton}>{t('Apply to All')}</Button>
            </div>
            <Rounds rounds={rounds} setRounds={setRounds} currentRound={currentRound} setCurrentRound={setCurrentRound} globalTime={globalTime} />
        </div>
    );
};

export default ConfigSection;