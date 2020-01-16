import React from 'react';

import { storiesOf } from '@storybook/react';
import Post from '../src/organisms/post';

import '../src/styles/global.scss';

storiesOf('Organisms', module)
  .add('post', () => {
    const rawHtml = `<div><TitleBlock title=\"This was a triumph\" subtitle=\"I'm making a note here: HUGE SUCCESS\"></TitleBlock><Paragraph>It's hard to overstate my satisfaction.</Paragraph></div>`;
    return (
        <Post rawHtml={rawHtml} />
    )
  });