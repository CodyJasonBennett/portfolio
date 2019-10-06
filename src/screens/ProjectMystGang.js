import React, { useMemo, lazy, Suspense } from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import ProgressiveImage from 'components/ProgressiveImage';
import { useScrollToTop } from 'utils/hooks';
import { RouterButton } from 'components/Button';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectHeader, ProjectSectionHeading, ProjectSectionText, ProjectTextRow,
  ProjectSectionColumns, SidebarImages, SidebarImage
} from 'components/Project';
import { media } from 'utils/style';
import Render from 'assets/MystGang/MystGang.mp4'
import RenderPlaceholder from 'assets/MystGang/MystGangPlaceholder.png';
import Animation from 'assets/MystGang/mystGangAnimation.mp4';
import AnimationPlaceholder from 'assets/MystGang/mystGangAnimationPlaceholder.png';
import Branding from 'assets/MystGang/branding.webp';
import BrandingPlaceholder from 'assets/MystGang/brandingPlaceholder.png';
import Loader from 'assets/MystGang/Loader.webp';
import LoaderPlaceholder from 'assets/MystGang/LoaderPlaceholder.png';
import Home from 'assets/MystGang/Home.webp';
import Menu from 'assets/MystGang/Menu.webp';
import Work from 'assets/MystGang/Work.webp';
import About1 from 'assets/MystGang/About1.webp';
import About2 from 'assets/MystGang/About2.webp';
import About3 from 'assets/MystGang/About3.webp';
import Contact from 'assets/MystGang/Contact.webp';
import NextProject from 'assets/ARMTG/armtg-project-large.png';
import MystLogo from 'assets/MystGang/logo.png';
import MystLogoPlaceholder from 'assets/MystGang/logoPlaceholder.png';

const DisplacementSlider = lazy(() => import('components/DisplacementSlider'));

const title = 'MystGang 2019';
const description = 'A responsive 3D website for the gaming content creator known as MystGang, featuring a 3D carousel to show off their work. The site is sped up with Ajax and animated with Tweenmax and Greensock, rendering a 3D landscape in WebGL with Three.js. This included the design of the monogram in the center of the screen.';
const roles = [
  'Front-end Development',
  'Back-end Development',
  'Visual Design',
  'UI / UX Design',
  'Branding & Identity',
  'Creative Direction',
  '3D Animation',
];

function MystGang() {
  useScrollToTop();

  return (
    <React.Fragment>
      <Helmet
        title={`Projects | ${title}`}
        meta={[{ name: 'description', content: description, }]}
      />
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View Website"
          url="https://mystgang.ml"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage>
              <ProgressiveImage
                srcSet={Render}
                videoSrc={Render}
                placeholder={RenderPlaceholder}
                reveal
              />
            </ProjectImage>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns>
            <ProgressiveImage
              src={Branding}
              srcSet={Branding}
              placeholder={BrandingPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}) 100vw, (max-width: ${media.tablet}) 100vw, 50vw`}
            />
            <TextSection>
              <ProjectSectionHeading>Truly Epic Colors</ProjectSectionHeading>
              <ProjectSectionText>
                With a preference for dark things and with brown as a favorite, light on dark was the theme featuring a progressive gradient of brown.
              </ProjectSectionText>
            </TextSection>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProgressiveImage
              srcSet={Animation}
              videoSrc={Animation}
              placeholder={AnimationPlaceholder}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <LogoContainer>
            <ProgressiveImage
              src={MystLogo}
              srcSet={MystLogo}
              placeholder={MystLogoPlaceholder}
              alt=""
            />
            </LogoContainer>
            <ProjectTextRow center>
              <ProjectSectionHeading>An Epic Logo for an Epic Creator</ProjectSectionHeading>
              <ProjectSectionText>
                Known as a mob boss and sometimes a cowboy, this gangster monogram renewed their identity.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center>
              <ProjectSectionHeading>Final Website</ProjectSectionHeading>
            </ProjectTextRow>
          </ProjectSectionContent>
          <ProjectSectionSlider>
            <Suspense fallback={<React.Fragment />}>
              <DisplacementSlider
                placeholder={LoaderPlaceholder}
                images={useMemo(() => [
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
                ], [])}
                width={useMemo(() => 1920, [])}
                height={useMemo(() => 1080, [])}
              />
            </Suspense>
          </ProjectSectionSlider>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns>
            <SidebarImages>
              <SidebarImage
                srcSet={NextProject}
                alt=""
                reveal
                sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
              />
            </SidebarImages>
            <ProjectTextRow center>
              <ProjectSectionText>
                Next Project
              </ProjectSectionText>
              <ProjectSectionHeading>ARMTG</ProjectSectionHeading>
              <RouterButton
                secondary
                icon="chevronRight"
                to="/projects/armtg"
              >
                View Project
              </RouterButton>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </React.Fragment>
  );
}

const ProjectSectionSlider = styled(ProjectSectionContent)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;
  margin: 0;
`;

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${media.tablet}), (max-width ${media.mobile}) {
    margin-top: 18px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colorBackground};
  padding: 60px 80px;
  margin-bottom: 80px;
  width: 100%;

  @media (max-width: ${media.mobile}) {
    padding: 30px 40px;
    margin-bottom: 40px;
  }

  div, img {
    max-width: 800px;
  }
`;

export default MystGang;
