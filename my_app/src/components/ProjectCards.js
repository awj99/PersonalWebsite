import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material'
import React from 'react'
import LinkIcon from '@mui/icons-material/Link';

function ProjectCards({note}) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        Dolor laboris anim et voluptate dolor. Dolor exercitation ipsum labore incididunt commodo et enim exercitation et laborum pariatur non. Deserunt minim minim anim pariatur velit deserunt mollit in velit labore elit nulla. Culpa amet velit magna aliqua proident exercitation dolor minim incididunt cillum eiusmod est mollit sit. Nulla enim excepteur id laboris et. Cupidatat veniam et consequat ad nostrud. Aliqua proident elit incididunt pariatur voluptate culpa irure minim eiusmod laborum elit ullamco eu.
      </CardContent>
      <CardActions>
        <Button startIcon={<LinkIcon/>} size="small">GitHub Repository</Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCards
