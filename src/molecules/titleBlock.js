import React from 'react';
import './titleBlock.scss';
import Title from '../atoms/title';
import Subtitle from '../atoms/subtitle';

const TitleBlock = props => {
    const { title, subtitle } = props;

    return (
        <div className="titleBlock__container">
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </div>
    );
}

export default TitleBlock;