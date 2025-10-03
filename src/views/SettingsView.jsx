import { useUserSettings } from '@hooks/useLocalStorage';
import SettingsSection from '@components/SettingsSection';

const SettingsView = () => {
    const {
        settings,
        updateGlobalTime,
        updateVoiceSoundsEnabled,
        updateRounds,
        resetSettings
    } = useUserSettings();
    
    const { rounds, globalTime, voiceSoundsEnabled } = settings;

    return (
        <SettingsSection
            globalTime={globalTime}
            setGlobalTime={updateGlobalTime}
            rounds={rounds}
            setRounds={updateRounds}
            voiceSoundsEnabled={voiceSoundsEnabled}
            setVoiceSoundsEnabled={updateVoiceSoundsEnabled}
            resetSettings={resetSettings}
        />
    );
};

export default SettingsView;
