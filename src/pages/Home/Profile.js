import React, { lazy, Fragment, Suspense } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Link } from 'components/Link';
import Anchor from 'components/Anchor';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Section from 'components/Section';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import './Profile.css';

const Selfie = lazy(() => import('./Selfie'));

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <h2
      className={classNames('profile__title', `profile__title--${status}`)}
      id={titleId}
    >
      <DecoderText text="Hi" start={status !== 'exited'} delay={500} />
    </h2>
    <p className={classNames('profile__description', `profile__description--${status}`)}>
      I’m Cody. Currently, I am based in Austin, working as the lead designer at{' '}
      <Anchor href="https://linkedin.com/company/tech-builders/" target="_blank">
        Tech Builders
      </Anchor>
      . I am a designer, full-stack developer, and creator of web & mobile solutions with a focus on motion and user experience.
    </p>
    <p className={classNames('profile__description', `profile__description--${status}`)}>
      In my spare time, I like to write music and{' '}
      <Anchor href="https://codepen.codyb.co" target="_blank">
        experiment with new tech
      </Anchor>
      . I’m always interested in new projects, so feel free to drop me a line.
    </p>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button', `profile__button--${status}`)}
                as={Link}
                status={status}
                to="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  About Me
                </div>
              </div>
              <div
                className="profile__image-wrapper"
              >
                {!prerender &&
                  <Suspense fallback={null}>
                    <Selfie
                      className={classNames('profile__image', `profile__image--${status}`)}
                      delay={100}
                      alt="A 3D rendition of myself."
                    />
                  </Suspense>
                }
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
