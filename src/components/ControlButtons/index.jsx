import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <div className={styles.controlButtons}>
            <Button
                onClick={isRunning ? pauseTimer : startTimer}
                className={`btn ${isRunning ? 'btn-pause' : 'btn-start'}`}
            >
                {isRunning ? t('⏸ PAUSE') : t('▶ START')}
            </Button>
            <Button onClick={previousRound} className="btn btn-next" disabled={currentRound === 0}>
                {t('⏮ PREVIOUS')}
            </Button>
            <Button onClick={resetTimer} className="btn btn-reset">
                {t('⏹ RESET')}
            </Button>
            <Button onClick={nextRound} className="btn btn-next" disabled={currentRound === roundsLength - 1}>
                {t('⏭ NEXT')}
            </Button>
        </div>
    );
};

export default ControlButtons;