import { Avatar, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useTheme} from '@mui/material'
import { Box } from '@mui/system'

const NavigationBar = () => {

    return (
        <Box sx={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
            <Avatar alt="Alex Cristoffanini Headshot" sx={{ width: 80, height: 80 }}/>
            <Typography variant="h1">Alex Cristoffanini</Typography>
            <Stack direction='row' spacing={2}>
                <Button variant="text">Web</Button>
                <Button variant="text">Games</Button>
                <Button variant="text">Blog</Button>
                <Button variant="text">Contact</Button>
            </Stack>
        </Box>
    )
}

export default NavigationBar