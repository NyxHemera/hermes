import React from 'react';
import './link.scss';

const Link = props => {
    const { children, link } = props;

    return (
        <a className="link__container" href={link}>
            { children }
        </a>
    );
}

export default Link;