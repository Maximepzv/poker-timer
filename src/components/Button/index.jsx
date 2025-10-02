import styles from './styles.module.css';

const Button = ({ children, className = '', onClick, disabled = false, ...props }) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;