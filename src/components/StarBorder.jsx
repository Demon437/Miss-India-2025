import React from 'react';

const StarBorder = ({
    as: Component = 'div',
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}) => {
    return (
        <Component
            className={`star-border-container ${className}`}
            style={{
                padding: `${thickness}px`,
                ...rest.style
            }}
            {...rest}
        >
            <div
                className="border-gradient-bottom"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            />
            <div
                className="border-gradient-top"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            />
            <div className="inner-content-wrapper">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;