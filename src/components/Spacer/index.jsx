import propTypes from 'prop-types';

const Spacer = ({ x, y, ...rest }) => {
    return (
        <div
            style={{
                width: x ? `var(--space-${x})` : undefined,
                height: y ? `var(--space-${y})` : undefined,
            }}
            {...rest}
        />
    );
};

Spacer.propTypes = {
    x: propTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
    y: propTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
};

export default Spacer;
