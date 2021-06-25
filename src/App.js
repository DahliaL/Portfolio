import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Components :)
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Welcome from './pages/Welcome';
import Error from './pages/Error';

const LightTheme = {
  darkBG: '#ffffff',
  deepBG: '#d1d1d1',
  grayBG: '#9ccfd9',
  activeBG: '#9ccfd9',
};

const DarkTheme = {
  darkBG: '#262626;',
  deepBG: '#1E1E1E',
  grayBG: '#BCB4B4',
  activeBG: '#363636',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export default function App({ setThemeU }) {
  const [theme, setTheme = setThemeU] = useState('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <NavMenu theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path="/" exact>
            {' '}
            <Welcome />{' '}
          </Route>
          <Route path="/about">
            {' '}
            <About />{' '}
          </Route>
          <Route path="/projects">
            {' '}
            <Projects />{' '}
          </Route>
          <Route path="/contact">
            {' '}
            <Contact />{' '}
          </Route>
          <Route path="/*">
            {' '}
            <Error />{' '}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
