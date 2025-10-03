import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const RoundsSidebar = ({ rounds, currentRound, timeLeft }) => {
    const { t } = useTranslation();
    const roundsListRef = useRef(null);

    useEffect(() => {
        if (roundsListRef.current) {
            const activeItem = roundsListRef.current.querySelector('.round-item.active');
            if (activeItem) {
                activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [currentRound]);

    const formatDuration = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (hours > 0) {
            return t('in {{hours}}h {{mins}}m', { hours, mins });
        }
        return t('in {{count}} min', { count: mins });
    };

    const getTotalTimeUntilRound = (roundIndex) => {
        let totalMinutes = 0;
        for (let i = currentRound; i < roundIndex; i++) {
            totalMinutes += rounds[i]?.time || 0;
        }

        totalMinutes += Math.floor(timeLeft / 60);
        return totalMinutes;
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.roundsList} ref={roundsListRef}>
                {rounds.map((round, index) => (
                    <div key={index} className={`round-item ${index === currentRound ? 'active' : ''}`}>
                        <div className="round-header">
                            <span className="round-title">{t('ROUND {{number}}', { number: index + 1 })}</span>
                            <span className="round-blinds">{round.smallBlind}/{round.bigBlind}</span>
                        </div>
                        <div className="round-time">
                            {index === currentRound
                                ? formatDuration(Math.floor(timeLeft / 60))
                                : t('min', { count: round.time })}
                        </div>
                        {index > currentRound && (
                            <div className="round-time">
                                {formatDuration(getTotalTimeUntilRound(index))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoundsSidebar;