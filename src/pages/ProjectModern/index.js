import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Image from 'components/Image';
import Anchor from 'components/Anchor';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection,
  ProjectSectionContent, ProjectImage, ProjectSectionHeading, ProjectSectionText,
  ProjectSectionColumns, ProjectTextRow
} from 'components/ProjectLayout';
import { useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import modernBackground from 'assets/modern-background.png';
import modernBackgroundLarge from 'assets/modern-background-large.png';
import modernBackgroundPlaceholder from 'assets/modern-background-placeholder.png';
import modern from 'assets/modern.png';
import modernLarge from 'assets/modern-large.png';
import modernPlaceholder from 'assets/modern-placeholder.png';
import modernBranding from 'assets/modern-branding.png';
import modernBrandingLarge from 'assets/modern-branding-large.png';
import modernBrandingPlaceholder from 'assets/modern-branding-placeholder.png';
import modernComponents from 'assets/modern-components.png';
import modernComponentsLarge from 'assets/modern-components-large.png';
import modernComponentsPlaceholder from 'assets/modern-components-placeholder.png';
import modernLanding from 'assets/modern-landing.png';
import modernLandingLarge from 'assets/modern-landing-large.png';
import modernLandingPlaceholder from 'assets/modern-landing-placeholder.png';
import modernEvents from 'assets/modern-events.png';
import modernEventsLarge from 'assets/modern-events-large.png';
import modernEventsPlaceholder from 'assets/modern-events-placeholder.png';
import modernEvent from 'assets/modern-event.png';
import modernEventLarge from 'assets/modern-event-large.png';
import modernEventPlaceholder from 'assets/modern-event-placeholder.png';
import modernSignup from 'assets/modern-signup.png';
import modernSignupLarge from 'assets/modern-signup-large.png';
import modernSignupPlaceholder from 'assets/modern-signup-placeholder.png';
import modernComplete from 'assets/modern-complete.png';
import modernCompleteLarge from 'assets/modern-complete-large.png';
import modernCompletePlaceholder from 'assets/modern-complete-placeholder.png';

const title = 'Project Modern';
const description = 'Building a community that puts players and game health first, not profits.';
const roles = [
  'Visual Identity',
  'UX and UI Design',
  'Full-stack Development',
];

function ProjectModern() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet
        title={`Projects | ${title}`}
        meta={[{ name: 'description', content: description }]}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${modernBackground} 1000w, ${modernBackgroundLarge} 1920w`}
          placeholder={modernBackgroundPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://projectmodern.gg"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              reveal
              srcSet={`${modern} 800w, ${modernLarge} 1440w`}
              placeholder={modernPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Landing screen of the DevTech Tools website."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Visual Identity</ProjectSectionHeading>
              <ProjectSectionText>
                Project Modern is a splinter community from a gamemode based from the card game: Magic, the Gathering in protest of recent conflict of interest in game management.
              </ProjectSectionText>
              <ProjectSectionText>
                We represented the modern or new feel behind the mission of Project Modern with custom typography with a plus for new, accompanied with fresh colors and a crisp typeface.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${modernBranding} 400w, ${modernBrandingLarge} 898w`}
              placeholder={modernBrandingPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The DevTech Tools color palette and logo, featuring pipelines as electronic traces."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Design and Development</ProjectSectionHeading>
              <ProjectSectionText>
                I lead the design and development of online services for Project Modern, ranging from website design and development to backing cloud and bot functions.
              </ProjectSectionText>
              <ProjectSectionText>
                We kept the brand and style of Project Modern consistent throughout its <Anchor href="https://storybook.projectmodern.gg" target="_blank">component-based design</Anchor>.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${modernComponents} 800w, ${modernComponentsLarge} 1440w`}
              placeholder={modernComponentsPlaceholder}
              alt="A screenshot of Project Modern's components from Storybook."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>A Home for Project Modern</ProjectSectionHeading>
              <ProjectSectionText>
                A website is the biggest tell in brand. With a good, lasting impression, I designed and developed elegant interfaces, complimented with inviting interactions throughout the website.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${modernLanding} 800w, ${modernLandingLarge} 1440w`}
              placeholder={modernLandingPlaceholder}
              alt="A screenshot of the landing page in production."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Let's Play!</ProjectSectionHeading>
              <ProjectSectionText>
                Project Modern boasts a large, healthy playerbase, and we showed that with cultivated tournaments for everyone.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${modernEvents} 800w, ${modernEventsLarge} 1440w`}
              placeholder={modernEventsPlaceholder}
              alt="A screenshot of the events page in production."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${modernEvent} 800w, ${modernEventLarge} 1440w`}
              placeholder={modernEventPlaceholder}
              alt="A screenshot of an event page in production."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              style={{ marginTop: 'var(--space3XL)' }}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Signup Here</ProjectSectionHeading>
              <ProjectSectionText>
                Project Modern's events' catalogue isn't the end. The website is designed to encourage and capture event signup, automating everything with ease.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${modernSignup} 800w, ${modernSignupLarge} 1440w`}
              placeholder={modernSignupPlaceholder}
              alt="A screenshot of an event's signup page in production."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${modernComplete} 800w, ${modernCompleteLarge} 1440w`}
              placeholder={modernCompletePlaceholder}
              alt="A screenshot showing an onboarding page after signup in production."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              style={{ marginTop: 'var(--space3XL)' }}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default ProjectModern;
