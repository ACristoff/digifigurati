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
                    <Typography>
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
        <Box>
            <Typography>Posts</Typography>
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