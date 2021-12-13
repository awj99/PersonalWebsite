import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



function Introduction() {

  return (
    <Container>
      <Typography 
        variant='h1'
        color='primary'
        gutterBottom>
        Ang Wei Jun
      </Typography>
        <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={1}>
          <Button 
            onClick={() => console.log('GithubLink')}
            variant="contained"
            startIcon= {<GitHubIcon/>}
            >
            GitHub
          </Button>
          <Button 
            onClick={() => console.log('LinkedinLink')}
            variant="outlined"
            startIcon= {<LinkedInIcon/>}
            >
            Linkedin
          </Button>
        </Stack>
    </Container>
  )
}

export default Introduction
