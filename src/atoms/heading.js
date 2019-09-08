import React from 'react';
import './heading.scss';

const Heading = props => {
    const { children } = props;

    return (
        <h1
            className="heading heading__content"
        >
            { children }
        </h1>
    );
}

export default Heading;