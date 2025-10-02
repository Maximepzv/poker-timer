import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import styles from './styles.module.css';
import { t } from 'i18next';

const Menu = ({ currentView, setCurrentView }) => {
    const { i18n } = useTranslation();
    const isSettings = currentView === 'config';
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    
    return (
        <div className={styles.menuContainer}>
            <div className={styles.languageSelector}>
                <button
                    className={`${styles.langButton} ${i18n.language === 'en' ? styles.active : ''}`}
                    onClick={() => changeLanguage('en')}
                    title={t('English')}
                >
                    EN
                </button>
                <button
                    className={`${styles.langButton} ${i18n.language === 'fr' ? styles.active : ''}`}
                    onClick={() => changeLanguage('fr')}
                    title={t('Français')}
                >
                    FR
                </button>
            </div>
            
            <Button 
                onClick={() => setCurrentView(isSettings ? 'game' : 'config')} 
                className={styles.settingsButton}
                title={isSettings ? t('Back to the game') : t('Settings')}
            >
                {isSettings ? '✕' : '⚙️'}
            </Button>
        </div>
    );
};

export default Menu;
