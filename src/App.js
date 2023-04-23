
import { Stack, Typography } from '@mui/material';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <Stack spacing={2} className="App">
      <Typography className='header' variant='h4' gutterBottom ><span className='heading'>calculator app :</span></Typography>
      <Calculator/>
    </Stack >
  );
}

export default App;
