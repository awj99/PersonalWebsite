import { Grid } from '@mui/material'
import React from 'react'
import ProjectCards from './ProjectCards'

function Projects() {
  return (
    <Grid container justifyContent='space-evenly' spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCards></ProjectCards>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCards></ProjectCards>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCards></ProjectCards>
      </Grid>
    </Grid>
  )
}export default Projects
