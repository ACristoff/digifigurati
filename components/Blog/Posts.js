import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'

const Post = ({title, description, date}) => {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
                <CardMedia />
                <CardContent>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {date}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const Posts = ({type, count, posts}) => {


    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant='h3'>Latest Posts</Typography>
            <Stack direction='row' spacing={2}>
                {posts.map((post) => {
                    return (
                        <Post title={post.title} description={post.description} date={post.date}  key={post.id}/>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default Posts