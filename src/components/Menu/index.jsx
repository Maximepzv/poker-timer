import Button from '@components/Button';
import styles from './styles.module.css';

const Menu = ({ currentView, setCurrentView }) => {
    const isSettings = currentView === 'config';
    
    return (
        <Button 
            onClick={() => setCurrentView(isSettings ? 'game' : 'config')} 
            className={styles.settingsButton}
            title={isSettings ? 'Retour au jeu' : 'Configuration'}
        >
            {isSettings ? '✕' : '⚙️'}
        </Button>
    );
};

export default Menu;
