import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components/macro';
import { Button } from 'components/Button';
import Input from 'components/Input';
import Anchor from 'components/Anchor';
import Monogram from 'components/Monogram';
import DisplacementSphere from 'components/DisplacementSphere';
import DisplacementSlider from 'components/DisplacementSlider';
import DecoderText from 'components/DecoderText';
import Loader from 'assets/MystGang/Loader.webp';
import LoaderPlaceholder from 'assets/MystGang/LoaderPlaceholder.png';
import Home from 'assets/MystGang/Home.webp';
import Menu from 'assets/MystGang/Menu.webp';
import Work from 'assets/MystGang/Work.webp';
import About1 from 'assets/MystGang/About1.webp';
import About2 from 'assets/MystGang/About2.webp';
import About3 from 'assets/MystGang/About3.webp';
import Contact from 'assets/MystGang/Contact.webp';
import { useFormInput } from 'utils/hooks';

const StoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${props => props.fullWidth ? '100%' : 'max-content'};
  align-items: flex-start;
  justify-items: flex-start;

  ${props => props.padding && `
    padding: ${props.padding}px;
  `}

  ${props => props.gutter && `
    grid-gap: ${props.gutter}px;
  `}
`;

const LoadableButton = props => {
  const [loading, setLoading] = useState(false);
  return (
    <Button loading={loading} onClick={() => setLoading(!loading)} {...props} />
  );
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () =>
    <StoryContainer padding={30} gutter={30}>
      <Button primary onClick={action('clicked')}>Text only</Button>
      <Button primary icon="send" onClick={action('clicked')}>Icon left</Button>
      <Button primary iconRight="arrowRight" onClick={action('clicked')}>Icon right</Button>
    </StoryContainer>
  )
  .add('secondary', () =>
    <StoryContainer padding={30} gutter={30}>
      <Button secondary onClick={action('clicked')}>Text only</Button>
      <Button secondary icon="arrowRight" onClick={action('clicked')}>Icon left</Button>
      <Button secondary iconRight="arrowRight" onClick={action('clicked')}>Icon right</Button>
    </StoryContainer>
  )
  .add('icon only', () =>
    <StoryContainer padding={30} gutter={20}>
      <Button iconOnly aria-label="Send" icon="send" onClick={action('clicked')}></Button>
      <Button iconOnly aria-label="Dribbble" icon="dribbble" onClick={action('clicked')}></Button>
      <Button iconOnly aria-label="Close" icon="close" onClick={action('clicked')}></Button>
    </StoryContainer>
  )
  .add('loader', () =>
    <StoryContainer padding={30}>
      <LoadableButton primary>Click to load</LoadableButton>
    </StoryContainer>
  );

const ExampleInput = props => {
  const exampleValue = useFormInput('');
  return (
    <div style={{ maxWidth: 400, width: '100%', padding: 30 }}>
      <Input {...exampleValue} {...props} />
    </div>
  );
};

storiesOf('Link', module)
  .add('anchor', () =>
    <StoryContainer padding={30} gutter={30} style={{ fontSize: 18 }}>
      <Anchor href="#" onClick={(e) => e.preventDefault()}>Anchor link</Anchor>
      <Anchor secondary href="#" onClick={(e) => e.preventDefault()}>Secondary link</Anchor>
    </StoryContainer>
  );

storiesOf('Monogram', module)
  .add('monogram', () =>
    <StoryContainer padding={30}>
      <Monogram highlight />
    </StoryContainer>
  );

storiesOf('Text input', module)
  .add('text', () =>
    <ExampleInput label="Your name" type="text" />
  )
  .add('multiline', () =>
    <ExampleInput multiline label="Type a message" type="text" />
  );

storiesOf('Decoder text', module)
  .add('text', () =>
    <StoryContainer padding={30}>
      <h2 style={{ fontWeight: 500, margin: 0 }}>
        <DecoderText start text="Decoder text" />
      </h2>
    </StoryContainer>
  );

storiesOf('WebGL Scenes', module)
  .add('Displacemnt Sphere', () =>
    <StoryContainer>
      <DisplacementSphere />
    </StoryContainer>
  )

storiesOf('Displacement Slider', module)
  .add('MystGang', () =>
    <StoryContainer fullWidth padding={30}>
      <DisplacementSlider
        style={{ maxWidth: 800, width: '100%' }}
        placeholder={LoaderPlaceholder}
        images={[
          {
            src: Loader,
            srcset: `${Loader}`,
            alt: 'MystGang Loader',
            override: true
          },
          {
            src: Home,
            srcset: `${Home}`,
            alt: 'Landing Screen',
          },
          {
            src: Menu,
            srcset: `${Menu}`,
            alt: 'Menu Screen',
          },
          {
            src: Work,
            srcset: `${Work}`,
            alt: 'Work Carousel',
          },
          {
            src: About1,
            srcset: `${About1}`,
            alt: 'About Self'
          },
          {
            src: About2,
            srcset: `${About2}`,
            alt: 'About Work',
          },
          {
            src: About3,
            srcset: `${About3}`,
            alt: 'About Socials',
          },
          {
            src: Contact,
            srcset: `${Contact}`,
            alt: 'Contact Screen',
          },
        ]}
        width={1920}
        height={1080}
      />
    </StoryContainer>
  );
