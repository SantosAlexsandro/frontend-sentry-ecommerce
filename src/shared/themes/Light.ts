import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700], // Cor primária
    },
    secondary: {
      main: '#dc004e', // Cor secundária
    },
    background: {
      default: '#f5f5f5', // Cor de fundo padrão
      // paper: ,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Tipografia personalizada
    h1: {
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8, // Define o espaçamento padrão (multiplicador de 8)
});
