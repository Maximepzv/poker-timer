import Button from '@components/Button';
import styles from './styles.module.css';

const SoundControl = ({ soundEnabled, toggleSound }) => {
    return (
        <Button className={styles.soundControl} onClick={toggleSound}>
            {soundEnabled ? '🔊' : '🔇'}
        </Button>
    );
};

export default SoundControl;
