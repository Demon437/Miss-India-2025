import React from 'react';
import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const style = { ['--shine-duration']: `${speed}s` };
    return (
        <span className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={style}>
            {text}
        </span>
    );
};

export default ShinyText;