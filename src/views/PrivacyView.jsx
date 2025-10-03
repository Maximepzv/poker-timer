import { useTranslation } from 'react-i18next';

const PrivacyView = () => {
    const { t } = useTranslation();

    const sectionStyle = {
        marginBottom: '25px',
        backgroundColor: '#2c3e50',
        padding: '20px',
        borderRadius: '10px'
    };

    const h2Style = {
        color: '#3498db',
        fontSize: '1.3rem',
        marginBottom: '15px',
        fontWeight: 'bold'
    };

    const pStyle = {
        color: '#ecf0f1',
        lineHeight: '1.6',
        fontSize: '15px',
        marginBottom: '12px'
    };

    const ulStyle = {
        marginLeft: '20px',
        color: '#bdc3c7',
        lineHeight: '1.8'
    };

    const liStyle = {
        marginBottom: '8px'
    };

    return (
        <div style={{ 
            fontFamily: "'Supreme-Bold', sans-serif",
            backgroundColor: '#2c3e50',
            color: 'white',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div style={{ 
                backgroundColor: '#34495e',
                borderRadius: '15px',
                padding: '30px',
                margin: '20px auto',
                maxWidth: '900px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
            }}>
                <h1 style={{ 
                    color: 'white',
                    marginBottom: '10px',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    {t('Privacy Policy')}
                </h1>
                <p style={{ 
                    textAlign: 'center',
                    color: '#bdc3c7',
                    fontSize: '14px',
                    marginBottom: '30px'
                }}>
                    {t('Last updated: October 3, 2025')}
                </p>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('1. Introduction')}</h2>
                    <p style={pStyle}>
                        {t('Poker Timer ("we", "our" or "the application") respects your privacy. This privacy policy explains how we collect, use and protect your information.')}
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('2. Data Collection')}</h2>
                    <p style={pStyle}>
                        {t('Poker Timer does not collect, store or share any personal data with external servers.')}
                    </p>
                    <ul style={ulStyle}>
                        <li style={liStyle}>{t('No internet connection is required to use the application')}</li>
                        <li style={liStyle}>{t('No data is transmitted to third parties')}</li>
                        <li style={liStyle}>{t('No user account is created')}</li>
                        <li style={liStyle}>{t('No personal information is requested')}</li>
                    </ul>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('3. Local Storage')}</h2>
                    <p style={pStyle}>
                        {t('The application only stores your preferences and game settings locally on your device:')}
                    </p>
                    <ul style={ulStyle}>
                        <li style={liStyle}>{t('Game time settings')}</li>
                        <li style={liStyle}>{t('Blinds configuration')}</li>
                        <li style={liStyle}>{t('Sound preferences')}</li>
                        <li style={liStyle}>{t('Interface language')}</li>
                    </ul>
                    <p style={pStyle}>
                        {t('This data remains on your device and is never transmitted externally.')}
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('4. Permissions')}</h2>
                    <p style={pStyle}>
                        {t('The application does not request any special permissions on your device, except for:')}
                    </p>
                    <ul style={ulStyle}>
                        <li style={liStyle}>
                            <strong>{t('Audio')}</strong>: {t('To play notification sounds during the game')}
                        </li>
                    </ul>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('5. Third-Party Services')}</h2>
                    <p style={pStyle}>
                        {t('Poker Timer does not use any third-party analytics, advertising or tracking services.')}
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('6. Security')}</h2>
                    <p style={pStyle}>
                        {t('Since no data is collected or transmitted, there is no risk of personal data leakage. Your settings are stored securely on your local device.')}
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('7. Children\'s Data')}</h2>
                    <p style={pStyle}>
                        {t('The application does not collect any personal information, including that of children under 13 years of age.')}
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('8. Your Rights')}</h2>
                    <p style={pStyle}>
                        {t('You can at any time:')}
                    </p>
                    <ul style={ulStyle}>
                        <li style={liStyle}>{t('Delete your local data by uninstalling the application')}</li>
                        <li style={liStyle}>{t('Reset your settings via the reset button in the application')}</li>
                    </ul>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('9. Changes to this Policy')}</h2>
                    <p style={pStyle}>
                        {t('We may update this privacy policy from time to time. Changes will be posted on this page with a new update date.')}
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={h2Style}>{t('10. Contact')}</h2>
                    <p style={pStyle}>
                        {t('For any questions regarding this privacy policy, you can contact us at:')}
                    </p>
                    <p style={{ ...pStyle, marginTop: '10px' }}>
                        <strong>Email</strong>: contact@maximepzv.com
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyView;
