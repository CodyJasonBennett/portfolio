import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProgressiveImage from 'components/ProgressiveImage';
import { useScrollToTop } from 'utils/hooks';
import Footer from 'components/Footer';
import { RouterButton } from 'components/Button';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading, ProjectHeader, ProjectSectionColumns, SidebarImages,
  SidebarImage, ProjectTextRow, ProjectSectionText
} from 'components/Project';
import { media } from 'utils/style';
import imageDevTechTools from 'assets/DTT/devtech-tools.png';
import imageDevTechToolsLarge from 'assets/DTT/devtech-tools-large.png';
import imageDevTechToolsPlaceholder from 'assets/DTT/devtech-tools-placeholder.png';
import NextProject from 'assets/MystGang/mystgang-project-large.png'

const title = 'A Tool for Everything';
const description = 'I worked as the design lead on a product of DevTech Tools. We focused on creating the best tool for learning developers.';
const roles = [
  'Art Direction',
  'Visual Identity',
  'UX and UI Design',
  'Front End Development',
  'Back End Development',
];

function ProjectDTT() {
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
          url="https://devtechtools.com/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage>
              <ProgressiveImage
                reveal
                srcSet={`${imageDevTechTools} 800w, ${imageDevTechToolsLarge} 1440w`}
                placeholder={imageDevTechToolsPlaceholder}
                sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
              />
            </ProjectImage>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>
        </ProjectSection>
      </ProjectContainer>
      <ProjectSection>
        <ProjectSectionColumns light>
          <SidebarImages>
            <SidebarImage
            reveal
              srcSet={NextProject}
              alt=""
              sizes={`(max-width: ${media.mobile}) 500px, (max-width: ${media.tablet}) 800px, 1000px`}
            />
          </SidebarImages>
          <ProjectTextRow center>
            <ProjectSectionText>
              Next Project
            </ProjectSectionText>
            <ProjectSectionHeading>MystGang 2019</ProjectSectionHeading>
            <RouterButton
              secondary
              icon="chevronRight"
              to="/projects/mystgang"
            >
              View Project
            </RouterButton>
          </ProjectTextRow>
        </ProjectSectionColumns>
      </ProjectSection>
      <Footer />
    </React.Fragment>
  );
}

export default ProjectDTT;
