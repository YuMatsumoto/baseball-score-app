import { createTheme, ThemeProvider } from '@mui/material';
import { green, lightBlue, red } from '@mui/material/colors';
import { Top } from './views/components/pages/Top';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[300],
    },
    secondary: {
      main: green[300],
    },
    error: {
      main: red[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Top />
    </ThemeProvider>
  );
}

export default App;
