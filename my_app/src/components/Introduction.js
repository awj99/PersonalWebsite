import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Introduction() {
  return (
    <Stack spacing={3}>
      <Typography variant='h1'>Ang Wei Jun</Typography>
        <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={1}>
          <Button variant="contained"><GitHubIcon/>GitHub</Button>
          <Button variant="outlined"><LinkedInIcon/>Linkedin</Button>
        </Stack>
    </Stack>
  )
}

export default Introduction
