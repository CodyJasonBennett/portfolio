import React, { lazy, Suspense, useState, useEffect, createContext, useCallback } from 'react';
import styled, { createGlobalStyle, ThemeProvider, css } from 'styled-components/macro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import NavToggle from '../components/NavToggle';
import { theme } from '../utils/Theme';
import { media } from '../utils/StyleUtils';
import { useLocalStorage, useWindowSize } from '../utils/Hooks';
import GothamBook from '../fonts/gotham-book.woff2';
import GothamMedium from '../fonts/gotham-medium.woff2';
import Loader from '../components/Loader';
//test
const Home = lazy(() => import('../screens/Home'));
const Lab = lazy(() => import('../screens/Lab'));
const BellsGC = lazy(() => import('../screens/BellsGC'));
const MystGang = lazy(() => import('../screens/MystGang'));
const ArMTG = lazy(() => import('../screens/ArMTG'));
const Robotics = lazy(() => import('../screens/Robotics'));
const Contact = lazy(() => import('../screens/Contact'));
const Error404 = lazy(() => import('../screens/404'));

const prerender = navigator.userAgent === 'ReactSnap';
export const AppContext = createContext();

export const fontStyles = `
  @font-face {
    font-family: 'Gotham';
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: swap;
  }
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', 'dark');
  const [currentTheme, setCurrentTheme] = useState(theme.dark);
  const windowSize = useWindowSize();
  const showMenuButton = windowSize.width <= media.numMobile || windowSize.height <= 696;

  useEffect(() => {
    if (!prerender) {
      const d = new Date();
	    console.info( "%c© Cody Bennett 2018-%d\n%cSay hello https://codyb.co/contact\n%chttps://github.com/CodyJasonBennett%c", "font-size:34px; font-weight:200; letter-spacing:0.02em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,0,0.9);", d.getFullYear(), "font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,25,0.5);", "font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:helvetica,arial;color:#0F669D;font-weight:bold;", "font-size:34px; line-height:1.4em;" );
    }
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    setCurrentTheme(theme[storedTheme]);
  }, [storedTheme]);

  const updateTheme = useCallback(overrides => {
    setCurrentTheme({ ...theme[currentTheme.id], ...overrides });
  }, [currentTheme.id]);

  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme.id === 'dark' ? 'light' : 'dark';
    setStoredTheme(newTheme);
  }, [currentTheme.id, setStoredTheme]);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <Route render={({ location }) => (
            <React.Fragment>
              <Helmet>
                <link rel="preload" href={GothamBook} as="font" crossorigin="crossorigin" />
                <link rel="preload" href={GothamMedium} as="font" crossorigin="crossorigin" />
                <style>{fontStyles}</style>
              </Helmet>
              <GlobalStyles />
              <SkipToMain href="#MainContent">Skip to main content</SkipToMain>
              <Header
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                toggleTheme={toggleTheme}
                currentTheme={currentTheme}
                inheritLogo={currentTheme.custom}
              />
              <MainLoader>
                <Loader color={currentTheme.colorAccent} />
              </MainLoader>
              {showMenuButton && <NavToggle onClick={toggleMenu} menuOpen={menuOpen} />}
              <TransitionGroup component={React.Fragment}>
                <Transition key={location.pathname} timeout={300}>
                  {status => (
                    <AppContext.Provider value={{ status, updateTheme, toggleTheme, currentTheme }}>
                      <MainContent status={status} id="MainContent" role="main" tabIndex={-1}>
                        <Helmet>
                          <link rel="canonical" href={`https://codyb.co${location.pathname}`} />
                        </Helmet>
                        <Suspense fallback={<React.Fragment />}>
                          <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/lab" component={Lab} />
                            <Route path="/projects/bellsgc" component={BellsGC} />
                            <Route path="/projects/mystgang" component={MystGang} />
                            <Route path="/projects/armtg" component={ArMTG} />
                            <Route path="/projects/gcpsrobotics" component={Robotics} />
                            <Route path="/contact" component={Contact} />
                            <Route component={Error404} />
                          </Switch>
                        </Suspense>
                      </MainContent>
                    </AppContext.Provider>
                  )}
                </Transition>
              </TransitionGroup>
            </React.Fragment>
          )} />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: ${props => props.theme.fontStack};
    background: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
    border: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-weight: 300;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;

    @media (prefers-reduced-motion: reduce) {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
      animation-delay: 0s !important;
      transition-delay: 0s !important;
    }
  }

  ::selection {
    background: ${props => props.theme.colorAccent};
  }
`;

const MainLoader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const MainContent = styled.main`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  opacity: 0;
  background: ${props => props.theme.colorBackground};
  transition: background 0.4s ease, opacity 0.3s ease;

  &:focus {
    outline: none;
  }

  ${props => props.status === 'exiting' && css`
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entering' && css`
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entered' && css`
    transition-duration: 0.5s;
    opacity: 1;
  `}
`;

const SkipToMain = styled.a`
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: ${props => props.theme.colorBackground};
  z-index: 99;

  &:focus {
    background: ${props => props.theme.colorPrimary};
    padding: 8px 16px;
    position: fixed;
    top: 16px;
    left: 16px;
    clip: auto;
    width: auto;
    height: auto;
    text-decoration: none;
    font-weight: 500;
    line-height: 1;
    clip-path: ${props => props.theme.clipPath(8)};
  }
`;

export default App;
