import { Box, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PreviousExperience = () => {
  return (
    <Box sx={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
        <Typography variant='h2'>Previous Experience</Typography>
        <Stack direction='row' spacing={4} sx={{display: 'flex', alignItems: 'center', maxWidth: '80vw'}}>
            <Paper>
                <Image 
                    src="/images/ProAceLogo.jpg"
                    alt="Pro Ace Heating Logo"
                    height={80}
                    width={320}
                />
                <Typography variant='h5'>Web Developer</Typography>
                <Typography variant='b1'>Worked on front-end and back-end systems. Strong focus on making a customer-facing website optimized for conversions and SEO.</Typography>
            </Paper>
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
            </Paper>
        </Stack>

    </Box>
  )
}

export default PreviousExperience