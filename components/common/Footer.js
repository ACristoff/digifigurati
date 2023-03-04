import React from 'react'

import { Avatar, Badge, Container, Divider, Stack, Typography } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Container sx={{marginTop:4}}>
        <Divider />
        <Typography>Alex Cristoffanini 2023 Footer</Typography>
        <Stack direction='row' spacing={4}>
            <LinkedInIcon color='primary' fontSize='large' />
            <GitHubIcon color='primary' fontSize='large'/>
            <TwitterIcon color="primary" fontSize='large' /> @Digifigurati
            <Avatar /> itch.io
            <Typography>email</Typography>
        </Stack>
    </Container>
  )
}

export default Footer