import React from 'react';

import { storiesOf } from '@storybook/react';
import TitleBlock from '../src/molecules/titleBlock';

storiesOf('Molecules', module)
  .add('title block', () => {
      return (
        <TitleBlock 
            title="A strong compelling title"
            subtitle="A very interesting subtitle"
        />
      )
  });