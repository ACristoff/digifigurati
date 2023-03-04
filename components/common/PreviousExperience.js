import { Box, Paper, Card, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const experiences = [
    {
        image: '/images/MicrosoftLogo.png',
        altText: 'Microsoft Logo',
        position: 'Full Stack Engineer',
        height: 60,
        width: 300,
        description: 'Contract role at The Coalition. Working within the web team to provide a AAA web experience for Gears of War fans, as well as providing value to the studio by supporting internal development.'
    },
    {
        image: '/images/EspessoDolceLogo.png',
        altText: 'Espresso Dolce Logo',
        position: 'Web Developer',
        height: 60,
        width: 60,
        description: 'Worked on a robust mom & pop ecommerce site specializing in espresso machines. Heavily emphasizing SEO for products, and a great customer experience.'
    },
    {
        image: '/images/ProAceLogo.jpg',
        altText: 'Pro Ace Logo',
        position: 'Web Developer',
        height: 60,
        width: 300,
        description: 'Worked on front-end and back-end systems. Strong focus on making a customer-facing website optimized for conversions and SEO.'
    },
    {
        image: '',
        altText: 'Spicebox Logo',
        position: 'Web Developer',
        height: 60,
        width: 300,
        description: 'Overhauled a website meant to service both regular consumers at an individual level, and supply partners on a bulk scale. Managing different kinds of customers and streamlining the process of working with retail partners.'
    },
]

const PreviousExperience = () => {
  return (
    <Box sx={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
        <Typography variant='h2'>Previous Experience</Typography>
        <Stack direction='row' spacing={4} sx={{display: 'flex', alignItems: 'center', width: '80vw', overflowY: 'hidden'}}>
            {experiences.map((exp) => {
                return (
                    <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.2}}>
                        <Image 
                            src={exp.image}
                            alt={exp.altText}
                            height={exp.height}
                            width={exp.width}
                        />
                        <Typography variant='h5'>{exp.position}</Typography>
                        <Typography variant='b1'>{exp.description}</Typography>
                    </Paper>
                )
            })}
        </Stack>

    </Box>
  )
}

export default PreviousExperience

{/* 
<Paper>
<Image 
    src="/images/MicrosoftLogo.png"
    alt="Microsoft Logo"
    height={60}
    width={300}
/>
<Typography variant='h5'>Full Stack Engineer</Typography>
<Typography variant='b1'>Contract role at The Coalition. Working within the web team to provide a AAA web experience for Gears of War fans, as well as providing value to the studio by supporting internal development.</Typography>
</Paper>
<Paper>
<Image 
    src="/images/EspressoDolceLogo.png"
    alt="Espresso Dolce Logo"
    height={170}
    width={170}
/>
<Typography variant='h5'>Web Developer</Typography>
<Typography variant='b1'>Worked on a robust mom & pop ecommerce site specializing in espresso machines. Heavily emphasizing SEO for products, and a great customer experience.</Typography>
</Paper> */}