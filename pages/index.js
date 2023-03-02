import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Avatar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import NavigationBar from '../components/common/NavigationBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
                <Container> 
                    <NavigationBar />
                </Container>
            </main>
        </>
    )
}
