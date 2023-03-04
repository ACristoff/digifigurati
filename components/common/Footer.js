import { Avatar, Badge, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Container sx={{marginTop:4}}>
        <Divider />
        <Typography>Alex Cristoffanini 2023 Footer</Typography>
        <Stack direction='row' spacing={4}>
            <Avatar /> LinkedIn
            <Avatar /> Github
            <Avatar /> Twitter
            <Avatar /> itch.io
            <Typography>email</Typography>
        </Stack>
    </Container>
  )
}

export default Footer