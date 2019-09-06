import React from 'react';
import './subheading.scss';

const Subheading = props => {
    const { children } = props;

    return (
        <h4
            className="subheading__content"
        >
            { children }
        </h4>
    );
}

export default Subheading;