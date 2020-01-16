import React from 'react';
import ReactHtmlParser, { processNodes } from 'react-html-parser';
import Subheading from '../atoms/subheading';
import Heading from '../atoms/heading';
import Paragraph from '../atoms/paragraph';
import TitleBlock from '../molecules/titleBlock';

const transformObj = {
    titleblock: ({attribs}) => <TitleBlock {...attribs}/>,
    heading: ({attribs}) => <Heading {...attribs}/>,
    paragraph: ({attribs}) => <Paragraph {...attribs}/>,
    subheading: ({attribs}) => <Subheading {...attribs}/>,
}

const transform = (node) => {
    if(node.children) {
        processNodes(node.children, transform);
    }else if(node.type === 'text') {
        node.parent.attribs.children = node.data;
    }
    
    return node.type === 'tag' && transformObj[node.name] ? transformObj[node.name](node) : undefined;
};

export const parseHtml = (rawHtml) => ReactHtmlParser(rawHtml, { transform })
