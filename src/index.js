import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

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

const glob = {
  light: LightTheme,
  dark: DarkTheme,
};

export default function Toggle() {
  const [theme, changeTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles theme={glob[theme]} />
      <Typography />
      <App setThemeU={changeTheme} />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <>
    <Toggle> </Toggle>
  </>,
  document.getElementById('root')
);
