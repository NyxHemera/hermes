import React from 'react';

import { storiesOf } from '@storybook/react';
import TitleBlock from '../src/molecules/titleBlock';
import Paragraph from '../src/atoms/paragraph';
import Subheading from '../src/atoms/subheading';

const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis aliquam dignissim. Sed eros nisi, rutrum at ultricies id, maximus nec mi. Suspendisse ullamcorper turpis ornare sem feugiat convallis. Fusce eu nisi quis ante aliquam elementum. Nulla in scelerisque erat. Nunc a nulla egestas, sodales libero ac, egestas justo. Nullam id fringilla sem. Suspendisse sodales pharetra iaculis. Sed faucibus turpis vitae mi vehicula dapibus. Etiam faucibus risus arcu, vel fringilla tortor facilisis vitae. Nullam ut lorem vitae elit maximus gravida. Etiam eu pharetra tellus. Phasellus diam quam, accumsan nec elit sit amet, vehicula dignissim enim. Nam vel magna vitae augue facilisis congue ac et mauris.`

storiesOf('Molecules', module)
  .add('title block', () => {
      return (
        <TitleBlock 
            title="Pseudo-Elements and How To Use Them"
            subtitle="Tips, Tricks, and Everything In Between"
        />
      )
  })
  .add('story section', () => {
    return (
      <div>
        <TitleBlock 
          title="Pseudo-Elements and How To Use Them"
          subtitle="Tips, Tricks, and Everything In Between"
        />
        <Paragraph>{ paragraphText }</Paragraph>
        <Subheading>More details below...</Subheading>
        <Paragraph>{ paragraphText }</Paragraph>
        <Paragraph>{ paragraphText }</Paragraph>
        <Subheading>Final Paragraph now</Subheading>
        <Paragraph>{ paragraphText }</Paragraph>
      </div>
    )
  });