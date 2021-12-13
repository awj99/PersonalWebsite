import React from 'react'
import { Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Modules from '../data/Modules'

function Skills() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
          <Typography variant='h4'>
            Modules Taken
          </Typography>
        <Stack flexDirection='column'spacing='2%'>
         {Modules.map(x => <Paper><Typography>{x.code}</Typography></Paper>)}
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Stack>
            <Typography variant='h4'>
              TechStack Used
            </Typography>
            <Stack>
            
            </Stack>
          </Stack>
      </Grid>
    </Grid>
  )
}

export default Skills
