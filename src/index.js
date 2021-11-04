import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Material UI custom theme
import { createTheme, ThemeProvider } from '@mui/material/styles';

//material UI recommended fonts//
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//kiona fonts


//custom UI theme
const theme = createTheme({
  palette: {
    primary: {
      //background color
      main: "#001E3C"
    },
    secondary: {
      //nav/footer color
      main: "#2F3A45"
    },
    text: {
      primary: "#e3f2fd"
    },
    common: {
      black: "#e3f2fd"
    },
    error: {
      main: "#e3f2fd"
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


