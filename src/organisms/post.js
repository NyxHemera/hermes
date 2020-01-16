import React from 'react';
import { parseHtml } from '../helpers/htmlParsingHelper';
import './post.scss';

const Post = props => {
    const { rawHtml } = props;

    return (
        <div className="post__container">
            { parseHtml(rawHtml) }
        </div>
    );
}

export default Post;