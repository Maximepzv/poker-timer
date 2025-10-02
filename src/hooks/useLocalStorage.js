import { useState } from 'react';

/**
 * Custom hook to manage data persistence in localStorage
 * @param {string} key - Key for localStorage
 * @param {*} defaultValue - Default value
 * @returns {[value, setValue]} - Tuple with value and update function
 */
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                const parsedItem = JSON.parse(item);
                // Simple data validity check
                if (typeof parsedItem === 'object' && parsedItem !== null) {
                    const mergedData = { ...defaultValue, ...parsedItem };
                    return mergedData;
                }
            }
            return defaultValue;
        } catch (error) {
            console.warn(`Error reading localStorage for key "${key}":`, error);
            return defaultValue;
        }
    });

    const setStoredValue = (newValue) => {
        try {
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.warn(`Error saving to localStorage for key "${key}":`, error);
            // In case of error (quota exceeded, etc.), continue with in-memory value
        }
    };

    return [value, setStoredValue];
};

/**
 * Hook to manage user settings with persistence
 */
export const useUserSettings = () => {
    // Default settings values
    const defaultSettings = {
        globalTime: 20,
        soundEnabled: true,
        voiceSoundsEnabled: true,
        rounds: [
            { smallBlind: 1, bigBlind: 2, time: 17 },
            { smallBlind: 2, bigBlind: 4, time: 17 },
            { smallBlind: 5, bigBlind: 10, time: 17 },
            { smallBlind: 10, bigBlind: 20, time: 17 },
            { smallBlind: 15, bigBlind: 30, time: 17 },
            { smallBlind: 25, bigBlind: 50, time: 17 },
            { smallBlind: 50, bigBlind: 100, time: 17 },
            { smallBlind: 75, bigBlind: 150, time: 17 },
            { smallBlind: 100, bigBlind: 200, time: 17 },
        ]
    };

    const [settings, setSettings] = useLocalStorage('poker-timer-settings', defaultSettings);

    // Functions to update specific settings
    const updateGlobalTime = (newGlobalTime) => {
        const newSettings = { ...settings, globalTime: newGlobalTime };
        setSettings(newSettings);
    };

    const updateSoundEnabled = (newSoundEnabled) => {
        const newSettings = { ...settings, soundEnabled: newSoundEnabled };
        setSettings(newSettings);
    };

    const updateVoiceSoundsEnabled = (newVoiceSoundsEnabled) => {
        const newSettings = { ...settings, voiceSoundsEnabled: newVoiceSoundsEnabled };
        setSettings(newSettings);
    };

    const updateRounds = (newRounds) => {
        const newSettings = { ...settings, rounds: newRounds };
        setSettings(newSettings);
    };

    // Function to reset all settings
    const resetSettings = () => {
        setSettings(defaultSettings);
    };

    return {
        settings,
        updateGlobalTime,
        updateSoundEnabled,
        updateVoiceSoundsEnabled,
        updateRounds,
        resetSettings
    };
};