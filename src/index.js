import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Customize theme values here
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        rail: {
          height: 4,
          borderRadius: 2,
        },
        thumb: {
          width: 16,
          height: 16,
          backgroundColor: '#1e556b',
          border: '2px solid #fff',
          borderRadius: '50%',
          marginTop: -6,
          marginLeft: -8,
          '&:hover': {
            color: 'yellow',
            boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </React.StrictMode>
  
);

reportWebVitals();
