import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function AboutMe() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <Typography variant='h2' align='center' gutterBottom>
            About Me
        </Typography>
        <Typography variant='p' align='center' gutterBottom>
            Reprehenderit Lorem ipsum proident pariatur. Quis in aute exercitation sunt aliqua veniam anim aliqua. Laborum qui duis reprehenderit deserunt aliquip cupidatat aliquip. In qui cupidatat sint irure duis consectetur id.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Stack flexDirection='column' alignContent='center' justifyContent='center' border={1} flex={0.5} >
          <Typography variant='p' align='center' gutterBottom>
            I am a aspiring front-end developer.
          </Typography>
          <Typography variant='p' align='center' gutterBottom>
            Reprehenderit Lorem ipsum proident pariatur. Quis in aute exercitation sunt aliqua veniam anim aliqua. Laborum qui duis reprehenderit deserunt aliquip cupidatat aliquip. In qui cupidatat sint irure duis consectetur id.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default AboutMe
