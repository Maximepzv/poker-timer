import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserSettings } from '@hooks/useLocalStorage';
import Menu from '@components/Menu';
import SoundControl from '@components/SoundControl';
import '@app/App.css';

const Layout = ({ children }) => {
    const { t } = useTranslation();
    const { settings, updateSoundEnabled } = useUserSettings();
    const { soundEnabled } = settings;

    // Update page title when language changes
    useEffect(() => {
        document.title = t('Poker Timer');
    }, [t]);

    const toggleSound = () => updateSoundEnabled(!soundEnabled);

    return (
        <div className="app">
            <SoundControl soundEnabled={soundEnabled} toggleSound={toggleSound} />
            <Menu />
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    );
};

export default Layout;
