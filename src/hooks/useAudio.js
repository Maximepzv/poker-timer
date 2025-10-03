import { useRef } from 'react';

export const useAudio = () => {
    const audioObjectsRef = useRef({ intro: null, shuffle: null });

    const playSound = (soundPath, refKey = null, volume = 1.0) => {
        const audio = new Audio(soundPath);
        audio.volume = volume;
        audio.preload = 'auto';

        if (refKey) {
            audioObjectsRef.current[refKey] = audio;
            audio.onended = () => audioObjectsRef.current[refKey] = null;
        }

        audio.onerror = (e) => console.error(`Error playing sound ${soundPath}:`, e);

        audio.load();
        audio.play().catch(err => console.error(`Error playing sound ${soundPath}:`, err));

        return audio;
    };

    const stopSound = (refKey, reset = false) => {
        const audio = audioObjectsRef.current[refKey];
        if (audio) {
            audio.pause();
            if (reset) {
                audio.currentTime = 0;
                audioObjectsRef.current[refKey] = null;
            }
        }
    };

    const stopAllSounds = () => {
        Object.keys(audioObjectsRef.current).forEach(key => {
            stopSound(key, true);
        });
    };

    return { playSound, stopSound, stopAllSounds };
};
