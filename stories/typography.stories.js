import React from 'react';

import { storiesOf } from '@storybook/react';
import Heading from '../src/atoms/heading';
import Subheading from '../src/atoms/subheading';
import Paragraph from '../src/atoms/paragraph';

const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis aliquam dignissim. Sed eros nisi, rutrum at ultricies id, maximus nec mi. Suspendisse ullamcorper turpis ornare sem feugiat convallis. Fusce eu nisi quis ante aliquam elementum. Nulla in scelerisque erat. Nunc a nulla egestas, sodales libero ac, egestas justo. Nullam id fringilla sem. Suspendisse sodales pharetra iaculis. Sed faucibus turpis vitae mi vehicula dapibus. Etiam faucibus risus arcu, vel fringilla tortor facilisis vitae. Nullam ut lorem vitae elit maximus gravida. Etiam eu pharetra tellus. Phasellus diam quam, accumsan nec elit sit amet, vehicula dignissim enim. Nam vel magna vitae augue facilisis congue ac et mauris.`

storiesOf('Typography', module)
  .add('title', () => <Heading>Pseudo-Elements and How To Use Them</Heading>)
  .add('subtitle', () => <Subheading>Tips, Tricks, and Everything In Between</Subheading>)
  .add('paragraph', () => <Paragraph>{paragraphText}</Paragraph>);