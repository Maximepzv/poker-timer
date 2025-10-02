import Button from '@components/Button';
import styles from './styles.module.css';
import { t } from 'i18next';

const SoundControl = ({ soundEnabled, toggleSound }) => {
    return (
        <Button
            className={styles.soundControl}
            onClick={toggleSound}
            title={soundEnabled ? t('Mute sound') : t('Unmute sound')}
        >
            {soundEnabled ? '🔊' : '🔇'}
        </Button>
    );
};

export default SoundControl;
