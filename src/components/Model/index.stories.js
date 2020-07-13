import React from 'react';
import Model from 'components/Model';
import { StoryContainer } from '../../../.storybook/StoryContainer';
import deviceModels from './deviceModels';
import phoneTexture from 'assets/mystgang-mobile-large.png';
import laptopTexture from 'assets/dtt-large.png';

export default {
  title: 'Model',
};

export const phone = () => (
  <StoryContainer fullWidth padding={32}>
    <Model
      enableControls
      cameraPosition={[0, 0, 8]}
      models={[
        {
          ...deviceModels.phone,
          texture: phoneTexture,
        },
      ]}
    />
  </StoryContainer>
);

export const laptop = () => (
  <StoryContainer fullWidth padding={32}>
    <Model
      enableControls
      cameraPosition={[0, 0, 6]}
      models={[
        {
          ...deviceModels.laptop,
          texture: laptopTexture,
        },
      ]}
    />
  </StoryContainer>
);
