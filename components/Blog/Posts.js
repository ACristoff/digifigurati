import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Post = () => {

}

const Posts = ({type, count}) => {


    return (
        <Box>
            <Typography>Posts</Typography>
            {type} {count} posts
            <Stack direction='row' spacing={2}>
                
            </Stack>
        </Box>
    )
}

export default Posts