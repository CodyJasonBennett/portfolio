import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Carousel from 'components/Carousel';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Carousel',
  decorators: [withKnobs],
};

const placeholderImg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIABIAIAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAEBgcF/9oACAEBAAAAAJ80ZS1DbcVKFVlHw//EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAgBAhAAAADdL//EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAAwVH/xAArEAACAQQABQIFBQAAAAAAAAABAgMABAURBgcSITFBURMVIzRCYWKBkbH/2gAIAQEAAT8AxmOwOYINrmLJgfedUb+VbRo8tbqQCS3jEkZAIde4O/Yir3l3m4kJjxpdddh4J/urjhLJxpuWyaHsdg+mqgu3t3WSPsy+DoH/AGuEuYVzDiTj/nN7EY+phCrSaJJ9OluwNZLmnlYC0xmuJPh6ALO6dR/TqNZjjLO5m4eaa9kRTv6aOdUfFcL/AHbH9hriF3e+07ltKvk7r8a//8QAHhEAAQQBBQAAAAAAAAAAAAAAAQACAxEzEhMjUVL/2gAIAQIBAT8AMk7yNlzL6fYQknjPLos+bKhyBS5HL//EAB4RAAEDBAMAAAAAAAAAAAAAAAEAAgMEERMzISNR/9oACAEDAQE/ABFSxt72SW9YQU6KllaMOSwPBcAFNqKh1tX/2Q==';

export const images = () => (
  <StoryContainer fullWidth padding={32}>
    <Carousel
      style={{ maxWidth: 800, width: '100%' }}
      placeholder={placeholderImg}
      images={[
        {
          src: 'https://source.unsplash.com/FfpZPMVV_M8/1280x720',
          alt: 'Mountain at daytime',
        },
    		{
    		  src: 'https://source.unsplash.com/ARSCXacOtkY/1280x720',
    		  alt: 'Morning sunrise in the valley',
    		},
    		{
    		  src: 'https://source.unsplash.com/Vak2-pUxkUg/1280x720',
    		  alt: 'Desert in Morocco'
    		}
      ]}
      width={1920}
      height={1080}
    />
  </StoryContainer>
);
