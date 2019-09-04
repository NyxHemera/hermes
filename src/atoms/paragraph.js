import React from 'react';
import './paragraph.scss';

const Paragraph = props => {
    const { children } = props;

    return (
        <h4
            className="paragraph__content"
        >
            { children }
        </h4>
    );
}

export default Paragraph;