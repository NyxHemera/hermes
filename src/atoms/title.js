import React from 'react';
import './title.scss';

const Title = props => {
    const { children } = props;

    return (
        <h1
            className="title__content"
        >
            { children }
        </h1>
    );
}

export default Title;