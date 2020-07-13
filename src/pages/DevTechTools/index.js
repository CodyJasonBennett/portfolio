import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Image from 'components/Image';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection,
  ProjectSectionContent, ProjectImage, ProjectSectionHeading, ProjectSectionText,
  ProjectSectionColumns, ProjectTextRow
} from 'components/ProjectLayout';
import { useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import dttBackground from 'assets/dtt-background.png';
import dttBackgroundLarge from 'assets/dtt-background-large.png';
import dttBackgroundPlaceholder from 'assets/dtt-background-placeholder.png';
import dtt from 'assets/dtt.png';
import dttLarge from 'assets/dtt-large.png';
import dttPlaceholder from 'assets/dtt-placeholder.png';
import dttBranding from 'assets/dtt-branding.png';
import dttBrandingLarge from 'assets/dtt-branding-large.png';
import dttBrandingPlaceholder from 'assets/dtt-branding-placeholder.png';
import dttTool from 'assets/dtt-tool.png';
import dttToolLarge from 'assets/dtt-tool-large.png';
import dttToolPlaceholder from 'assets/dtt-tool-placeholder.png';
import dttAPI from 'assets/dtt-api.png';
import dttAPILarge from 'assets/dtt-api-large.png';
import dttAPIPlaceholder from 'assets/dtt-api-placeholder.png';
import dttPipeline from 'assets/dtt-pipeline.png';
import dttPipelineLarge from 'assets/dtt-pipeline-large.png';
import dttPipelinePlaceholder from 'assets/dtt-pipeline-placeholder.png';
import dttLanding from 'assets/dtt-landing.png';
import dttLandingLarge from 'assets/dtt-landing-large.png';
import dttLandingPlaceholder from 'assets/dtt-landing-placeholder.png';

const title = 'A Tool for Everything';
const description = 'I lead the design and development of DevTech Tools. We focused on creating the best platform for developers to build better software.';
const roles = [
  'Visual Identity',
  'UX and UI Design',
  'Full-stack Development',
];

function DevTechTools() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet
        title={`Projects | ${title}`}
        meta={[{ name: 'description', content: description }]}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${dttBackground} 1000w, ${dttBackgroundLarge} 1920w`}
          placeholder={dttBackgroundPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://devtechtools.com"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              reveal
              srcSet={`${dtt} 800w, ${dttLarge} 1440w`}
              placeholder={dttPlaceholder}
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
                We represented the technology aspect of DevTech Tools with a bundle of traces, accompanied with fresh colors and a crisp typeface.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${dttBranding} 400w, ${dttBrandingLarge} 898w`}
              placeholder={dttBrandingPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The DevTech Tools color palette and logo, featuring pipelines as electronic traces."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow noMargin>
              <ProjectSectionHeading>The Mission</ProjectSectionHeading>
              <ProjectSectionText>
                DevTech Tools started as a small set of developer tools that generated, parsed, and converted between data formats.
              </ProjectSectionText>
              <ProjectSectionText>
                Our mission was to create an expanding arsenal of developer tools to use in any environment, for any purpose, on one platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns alterate>
            <Image
              srcSet={`${dttTool} 400w, ${dttToolLarge} 898w`}
              placeholder={dttToolPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The tool wrapper of the JSON to CSV data converter."
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Setting Sail</ProjectSectionHeading>
              <ProjectSectionText>
                DevTech Tools launched with a comprehensive set of data converters, code formatters and linters, and many other tools.
              </ProjectSectionText>
              <ProjectSectionText>
                I designed and developed a simple, intuitive interface to cut development time down to a single click.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Expanding the Workflow</ProjectSectionHeading>
              <ProjectSectionText>
                Following the release of our online tools, we accompanied this release with a powerful API, giving developers complete control.
              </ProjectSectionText>
              <ProjectSectionText>
                Experienced developers now had full flexibility with our tools in their projects.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${dttAPI} 400w, ${dttAPILarge} 898w`}
              placeholder={dttAPIPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="A snippet from the DevTech Tools API, converting data from JSON to CSV."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the Experience</ProjectSectionHeading>
              <ProjectSectionText>
                Our API gave developers complete control of their tools, but our interface lacked this flexibility with customization limited to each tool.
              </ProjectSectionText>
              <ProjectSectionText>
                With the release of DevTech Tools Pipelines, tools combine into one with custom triggers, events, and other actions.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${dttPipeline} 800w, ${dttPipelineLarge} 1440w`}
              placeholder={dttPipelinePlaceholder}
              alt="A screenshot of tools linked in the pipeline flowchart editor."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Going Online</ProjectSectionHeading>
              <ProjectSectionText>
                We needed a place for DevTech Tools and its users to call home.
              </ProjectSectionText>
              <ProjectSectionText>
                I designed and developed the DevTech Tools website, featuring a blog with weekly tutorials, comprehensive and interactive documentation for the DevTech Tools API, and a web application to put everything together.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${dttLanding} 800w, ${dttLandingLarge} 1440w`}
              placeholder={dttLandingPlaceholder}
              alt="A screenshot of the landing page in production."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default DevTechTools;
