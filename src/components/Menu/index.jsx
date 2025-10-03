import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@components/Button';
import styles from './styles.module.css';
import { t } from 'i18next';

const Menu = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const isSettings = location.pathname === '/settings';
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleView = () => {
        navigate(isSettings ? '/' : '/settings');
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
                onClick={toggleView} 
                className={styles.settingsButton}
                title={isSettings ? t('Back to the game') : t('Settings')}
            >
                {isSettings ? '✕' : '⚙️'}
            </Button>
        </div>
    );
};

export default Menu;
