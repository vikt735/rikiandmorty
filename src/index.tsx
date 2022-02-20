import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import Dark from './style/index';

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Dark}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
