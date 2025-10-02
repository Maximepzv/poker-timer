import ConfigSection from '@components/ConfigSection';

const SettingsView = ({
    globalTime,
    setGlobalTime,
    rounds,
    setRounds,
    currentRound,
    setCurrentRound,
    voiceSoundsEnabled,
    setVoiceSoundsEnabled,
    resetSettings
}) => {
    return (
        <ConfigSection
            globalTime={globalTime}
            setGlobalTime={setGlobalTime}
            rounds={rounds}
            setRounds={setRounds}
            currentRound={currentRound}
            setCurrentRound={setCurrentRound}
            voiceSoundsEnabled={voiceSoundsEnabled}
            setVoiceSoundsEnabled={setVoiceSoundsEnabled}
            resetSettings={resetSettings}
        />
    );
};

export default SettingsView;