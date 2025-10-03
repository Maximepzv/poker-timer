import { useTranslation } from 'react-i18next';
import Rounds from '@components/Rounds';
import Button from '@components/Button';
import styles from './styles.module.css';

const SettingsSection = ({
    globalTime,
    setGlobalTime,
    rounds,
    setRounds,
    voiceSoundsEnabled,
    setVoiceSoundsEnabled,
    resetSettings
}) => {
    const { t } = useTranslation();

    const applyGlobalTimeToAllRounds = () => {
        setRounds(rounds.map(round => ({ ...round, time: globalTime })));
    };

    const toggleVoiceSounds = () => {
        setVoiceSoundsEnabled(!voiceSoundsEnabled);
    };

    const handleResetSettings = () => {
        if (window.confirm(t('Are you sure you want to reset all settings? This action cannot be undone.'))) {
            resetSettings();
        }
    };

    return (
        <div className={styles.settings}>
            <div className={styles.autoSaveInfo}>
                <span className={styles.autoSaveIcon}>💾</span>
                <span className={styles.autoSaveText}>{t('Settings automatically saved')}</span>
            </div>
            
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
            
            <div className={styles.soundSettings}>
                <div className={styles.settingGroup}>
                    <div className={styles.settingInfo}>
                        <div className={styles.settingTitle}>
                            <span className={styles.settingIcon}>📢</span>
                            <span>{t('Voice-over')}</span>
                        </div>
                        <div className={styles.settingDescription}>
                            {t('Controls voice announcements (French only)')}
                        </div>
                    </div>
                    <div className={styles.toggleContainer}>
                        <input
                            type="checkbox"
                            id="voiceSoundsToggle"
                            className={styles.toggleInput}
                            checked={voiceSoundsEnabled}
                            onChange={toggleVoiceSounds}
                        />
                        <label htmlFor="voiceSoundsToggle" className={styles.toggleLabel}>
                            <span className={styles.toggleSlider}></span>
                        </label>
                    </div>
                </div>
            </div>
            
            <Rounds rounds={rounds} setRounds={setRounds} globalTime={globalTime} />
            
            <div className={styles.resetSettings}>
                <div className={styles.resetOption}>
                    <div>
                        <label className={styles.label}>{t('Reset all settings')}</label>
                        <div className={styles.resetDescription}>
                            {t('Restore default settings (rounds, time, sounds)')}
                        </div>
                    </div>
                    <Button 
                        onClick={handleResetSettings} 
                        className={styles.resetButton}
                    >
                        {t('Reset')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SettingsSection;