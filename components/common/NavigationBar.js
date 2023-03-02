import { Avatar, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import {makeStyles, useTheme} from '@mui/material'

const NavigationBar = () => {
    return (
        <div>
            <Avatar alt="Alex Cristoffanini Headshot" sx={{ width: 80, height: 80 }}/>
            <Typography variant="h1">Alex Cristoffanini</Typography>
            <Stack direction='row' spacing={2}>
                <Button variant="text">Web</Button>
                <Button variant="text">Games</Button>
                <Button variant="text">Blog</Button>
                <Button variant="text">Contact</Button>
            </Stack>
        </div>
    )
}

export default NavigationBar