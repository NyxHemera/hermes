import React from 'react';
import './paragraph.scss';

const Paragraph = props => {
    const { children } = props;

    return (
        <p
            className="paragraph__content"
        >
            { children }
        </p>
    );
}

export default Paragraph;