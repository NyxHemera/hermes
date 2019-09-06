import React from 'react';
import './titleBlock.scss';
import Heading from '../atoms/heading';
import SubHeading from '../atoms/subheading';

const TitleBlock = props => {
    const { title, subtitle } = props;

    return (
        <div className="titleBlock__container">
            <Heading>{ title }</Heading>
            <SubHeading>{ subtitle }</SubHeading>
        </div>
    );
}

export default TitleBlock;