import React from 'react';
import styled from 'styled-components/macro';

const Svg = ({ icon, color = 'white', ...props }) => {
  return {
    code: () => (
      <StyledSvg fill={color} {...props} width="153" height="20" viewBox="0 0 153 20">
        <path d="M35 10h5v6h-5v4h-3V0h3v3h3V0h7v3h-3v3h-7v4zm43-6v1h-3V4h-3v3h2v3h-2v2h2v8h-4V0h8v4zM47 16h-2v-3h-2v-3h3v3h3v-3h3v3h-2v6h-3v-3zm2-10v3h-4V6h1V3h6v3h-3zm37 10v-3h2v3h2v4h-6v-4h2zm-4-7V7h2v2h2v4h-6V9h2zm13 7h5v4h-7v-7h2v3zm-2-7v4h-2V4h-3v3h-4V4h2V0h10v4h2V0h2v4h2v3h4v7h-6v-4h-2V7h-3v2h-2zm18-3v4h2v4h-2v2h2v4h-4V0h4v6h-2zm28 11v3h-4v-4h2v-6h2v7zm-19-8V6h-5V0h13v4h-4v5h-2v4h-5V9h3zm10 5h2v6h-2v-4h-2v-6h2v4zm-49 2v4h-6v-4h6zm25 0v4h-4v-4h4zm1-16v4h-2V0h2zm25 0v4h-2V0h2zm2 4v6h-2V4h2zm3-4v4h-3V0h3zm2 4v3h-2V4h2zm-22 9v3h-2v-3h2zm10 3v4h-4v-4h4zM2 0v20H0V0h2zm141 0v20h-2V0h2zM8 0v20H4V0h4zm141 0v20h-4V0h4zM12 0v20h-2V0h2zm141 0v20h-2V0h2zM22 0v20h-7V0h7zm5 0v20h-3V0h3zm27 16v3h-2v-3h2zm5 0v3h-2v-3h2zm2-3v3h-2v-3h2zm0-7v3h-2V6h2zm5 0v3h-2V6h2zm2-3v3h-2V3h2zm-5-3v6h-2V0h2zm-4 0v3h-2V0h2zm-2 10v6h-3v-6h3z" />
      </StyledSvg>
    ),
    arrowDown: () => (
      <StyledSvg stroke={color} {...props} width="43" height="15" viewBox="0 0 43 15">
        <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
      </StyledSvg>
    ),
  }[icon]();
};

const StyledSvg = styled.svg`
  display: block;
`;

export default Svg;
