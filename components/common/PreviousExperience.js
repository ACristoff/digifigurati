import { Box, Paper, Card, Stack, Typography, IconButton } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
        image: '/images/EspressoDolceLogo.png',
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
        image: '/images/SpiceBoxLogo.png',
        altText: 'Spicebox Logo',
        position: 'Web Developer',
        height: 60,
        width: 110,
        description: 'Overhauled a website meant to service both regular consumers at an individual level, and supply partners on a bulk scale. Managing different kinds of customers and streamlining the process of working with retail partners.'
    },
]

const Carousel = ({array, renderMethod}) => {
    const [arrayIndex, setArrayIndex] = useState(0)

    const changeArrayIndex = (changeType) => {
        const limit = array.length
        let currentIndex = arrayIndex
        console.log(limit, currentIndex, array)

        if (changeType === 'inc') {
            currentIndex++
        } else if (changeType === 'dec') {
            currentIndex--
        }

        if (currentIndex + 1 > limit) {
            return setArrayIndex(0)
        } else  if (currentIndex < 0) {
            return setArrayIndex(limit - 1)
        }
        setArrayIndex(currentIndex)
        
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <IconButton onClick={(e) => changeArrayIndex('dec')}>
                <ArrowBackIosIcon />
            </IconButton>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '80vw', height: '20em', overflowX: 'hidden', gap: '20px'}}>
                    {experiences.map((exp) => {
                        return (
                            <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.2, width: 500, height: '90%'}}>
                                <div>
                                    <Image
                                        src={exp.image}
                                        alt={exp.altText}
                                        height={exp.height}
                                        width={exp.width}
                                    />
                                </div>
                                <Typography variant='h5'>{exp.position}</Typography>
                                <Typography variant='b1'>{exp.description}</Typography>
                            </Paper>
                        )
                    })}
                </div>
                {arrayIndex}
            <IconButton onClick={(e) => changeArrayIndex('inc')}>
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
    )
}

const PreviousExperience = () => {
  return (
    <Box sx={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
        <Typography variant='h2'>Previous Experience</Typography>
        {/* <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '80vw', overflowX: 'hidden', gap: '20px'}}>
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
        </div> */}
        <Carousel array={experiences} renderMethod={'bluh'}/>

    </Box>
  )
}

export default PreviousExperience