import React from 'react';
import './subtitle.scss';

const Subtitle = props => {
    const { children } = props;

    return (
        <h4
            className="subtitle__content"
        >
            { children }
        </h4>
    );
}

export default Subtitle;