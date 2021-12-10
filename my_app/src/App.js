import logo from './logo.svg';
import './App.css';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';

function App() {
  return (
    <Container maxWidth='100%'>
      <AppBar position='static'>
        <Container flexDirect>
          <Toolbar>
            <Typography variant='h4'>
              Hi
            </Typography>

            <Button variant='outlined'>
              <Typography color='white'>About Me</Typography>
            </Button>

            <Button variant='outlined'>
              <Typography color='white'>Skills and Experience</Typography>
            </Button>

            <Button variant='outlined'>
              <Typography color='white'>Projects</Typography>
            </Button>

            <Button variant='outlined'>
              <Typography color='white'>Contact Me</Typography>
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
      <Introduction/>
      <Box padding={5}></Box>
      <AboutMe/>
    </Container>
  );
}

export default App;
