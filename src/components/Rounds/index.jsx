import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import Button from '@components/Button';

const Rounds = ({ rounds, setRounds, globalTime }) => {
    const { t } = useTranslation();

    const addRound = () => {
        setRounds([...rounds, { smallBlind: 1, bigBlind: 2, time: globalTime }]);
    };

    const removeRound = (index) => {
        setRounds(rounds.filter((_, index_) => index_ !== index));
    };

    const updateRound = (index, field, value) => {
        const newRounds = [...rounds];
        newRounds[index][field] = parseInt(value) || 0;
        setRounds(newRounds);
    };

    return (
        <div className={styles.rounds}>
            <div className={styles.header}>
                <h2>{t('Rounds Settings')}</h2>
                <Button onClick={addRound} className={styles.addButton}>{t('+ Add Round')}</Button>
            </div>
            <div className={styles.roundsList}>
                {rounds.map((round, index) => (
                    <div key={index} className={styles.round}>
                        <div className={styles.roundHeader}>
                            <h3>{t('ROUND {{number}}', { number: index + 1 })}</h3>
                            <Button onClick={() => removeRound(index)} className={styles.deleteButton}>✕</Button>
                        </div>
                        <div className={styles.roundInputs}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{t('Small Blind')}</label>
                                <input
                                    type="number"
                                    value={round.smallBlind}
                                    onChange={(event) => updateRound(index, 'smallBlind', event.target.value)}
                                    className={styles.input}
                                    min="0"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{t('Big Blind')}</label>
                                <input
                                    type="number"
                                    value={round.bigBlind}
                                    onChange={(event) => updateRound(index, 'bigBlind', event.target.value)}
                                    className={styles.input}
                                    min="0"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{t('Time (min)')}</label>
                                <input
                                    type="number"
                                    value={round.time}
                                    onChange={(event) => updateRound(index, 'time', event.target.value)}
                                    className={styles.input}
                                    min="1"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rounds;