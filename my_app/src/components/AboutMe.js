import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function AboutMe() {
  return (
    <Stack flexDirection='row' width='100%' justifyContent='flex-start' alignContent="flex-start" border={1}>
      <Stack flexDirection='column' alignContent='flex-start' border={1} flex={0.5}>
      </Stack>
      <Stack flexDirection='column' alignContent='center' justifyContent='center' border={1} flex={0.5} >
        <Typography variant='h2' align='center'>
          About Me
        </Typography>
        <Typography variant='p' align='center'>
          I am a aspiring front-end developer.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default AboutMe
