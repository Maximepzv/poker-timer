import propTypes from 'prop-types';
import { Children, Fragment, useMemo } from 'react';

const FlexBox = ({
    flexDirection = 'row',
    flexShrink = 0,
    flexGrow = 0,
    flexBasis = 'auto',
    gap,
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    flexWrap = 'nowrap',
    children,
    ...rest
}) => {
    const childrenArr = useMemo(() => {
        return Children.toArray(children).filter((child) => {
            // Filter out "null" children
            if (!child) return false;
            return true;
        });
    }, [children]);

    return (
        <div
            style={{
                display: 'flex',
                gap: gap ? `var(--space-${gap})` : '0',
                flexDirection,
                flexShrink,
                flexGrow,
                flexBasis,
                flexWrap,
                justifyContent,
                alignItems,
            }}
            {...rest}
        >
            {childrenArr.map((child, idx) => {
                return <Fragment key={idx}>{child}</Fragment>;
            })}
        </div>
    );
};

FlexBox.propTypes = {
    flexDirection: propTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    flexShrink: propTypes.number,
    flexGrow: propTypes.number,
    flexBasis: propTypes.oneOfType([propTypes.number, propTypes.string]),
    gap: propTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
    justifyContent: propTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
    alignItems: propTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
    flexWrap: propTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    children: propTypes.node,
};

export default FlexBox;
