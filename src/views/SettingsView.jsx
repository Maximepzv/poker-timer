import ConfigSection from '@components/ConfigSection';

const SettingsView = ({
    globalTime,
    setGlobalTime,
    rounds,
    setRounds,
    currentRound,
    setCurrentRound
}) => {
    return (
        <ConfigSection
            globalTime={globalTime}
            setGlobalTime={setGlobalTime}
            rounds={rounds}
            setRounds={setRounds}
            currentRound={currentRound}
            setCurrentRound={setCurrentRound}
        />
    );
};

export default SettingsView;