import React from 'react';
import classNames from 'classnames';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Dribbble } from 'assets/icons/dribbble.svg';
import { ReactComponent as Email } from 'assets/icons/email.svg';
import { ReactComponent as Error } from 'assets/icons/error.svg';
import { ReactComponent as Figma } from 'assets/icons/figma.svg';
import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as Pause } from 'assets/icons/pause.svg';
import { ReactComponent as Play } from 'assets/icons/play.svg';
import { ReactComponent as Send } from 'assets/icons/send.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import './index.css';

export const icons = {
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  close: Close,
  dribbble: Dribbble,
  email: Email,
  error: Error,
  figma: Figma,
  github: Github,
  linkedin: Linkedin,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  twitter: Twitter,
};

const Icon = ({ icon, style, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classNames('icon', className)} {...rest} />
  );
};

export default Icon;
