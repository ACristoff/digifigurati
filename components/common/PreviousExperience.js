import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PreviousExperience = () => {
  return (
    <Box sx={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
        <Typography variant='h2'>Previous Experience</Typography>
        <Stack direction='row' spacing={4}>
            <Image 
                src="/images/ProAceLogo.jpg"
                height={100}
                width={350}
            />
            <Image 
                src="/images/ProAceLogo.jpg"
                height={100}
                width={300}
            />
            <Image 
                src="/images/ProAceLogo.jpg"
                height={100}
                width={300}
            />
        </Stack>

    </Box>
  )
}

export default PreviousExperience