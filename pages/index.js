import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Avatar, Box, Typography } from '@mui/material'
import { Container } from '@mui/system'

import NavigationBar from '../components/common/NavigationBar'
import PreviousExperience from '../components/common/PreviousExperience'
import Posts from '../components/Blog/Posts.js'

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {

    //TODO: make it only grab the last three posts
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}


export default function Home({allPostsData}) {
    console.log(allPostsData)

    return (
        <>
            <Head>
                <title>Alex Cristoffanini</title>
                //TODO optimize for SEO
                <meta name="description" content="Portfolio site for Alex Cristoffanini" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                //TODO change this favicon
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                    <NavigationBar />
                    <PreviousExperience />
                    <Box>
                        <Typography variant='h2'>About Me</Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, nulla vitae feugiat condimentum, turpis lacus rutrum velit, vitae feugiat risus odio vel metus. Etiam ex lacus, ornare ut dapibus vel, blandit eget tortor. Curabitur nec purus risus. Ut vehicula quam non nibh varius tincidunt. In facilisis ante id sodales vehicula. Aliquam nec commodo augue, nec pulvinar leo. Aenean iaculis lectus in congue hendrerit. Vestibulum eu auctor tortor, vel aliquam purus. Praesent et vehicula elit, at suscipit eros. Integer et tellus nec tortor cursus congue. Cras a volutpat mi, at efficitur mauris.</Typography>
                    </Box>
                    <Posts type='latest' count={3} posts={allPostsData}/>
                </Container>
            </main>
        </>
    )
}
