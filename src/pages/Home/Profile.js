import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Link } from 'components/Link';
import Anchor from 'components/Anchor';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import { reflow, isVisible } from 'utils/transition';
import { media } from 'utils/style';
import profileImg from 'assets/profile.png';
import profileImgLarge from 'assets/profile-large.png';
import profileImgPlaceholder from 'assets/profile-placeholder.png';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <h2
      className={classNames('profile__title', `profile__title--${status}`)}
      id={titleId}
    >
      <DecoderText text="Hi" start={status !== 'exited'} offset={140} />
    </h2>
    <p className={classNames('profile__description', `profile__description--${status}`)}>
      I’m Cody. Currently, I am based in Austin, working as the lead designer at{' '}
      <Anchor as={Link} to="/projects/dtt">
        DevTechTools
      </Anchor>
      . I am a designer, full-stack developer, and creator of web & mobile solutions with a focus on motion and user experience.
    </p>
    <p className={classNames('profile__description', `profile__description--${status}`)}>
      In my spare time, I like to play guitar and{' '}
      <Anchor href="https://codepen.io/cbenn">
        experiment with new tech
      </Anchor>
      . I’m always interested in new projects, so feel free to drop me a line.
    </p>
  </Fragment>
);

function Profile({ id, visible, sectionRef }) {
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
              <Image
                reveal
                className={`profile__image${isVisible(status) ? '--visible'  : ''}`}
                delay={100}
                placeholder={profileImgPlaceholder}
                srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt=""
                width={480}
                height={560}
              />
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}

export default Profile;
