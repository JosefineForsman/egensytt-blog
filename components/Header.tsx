import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Navbar from './Navbar'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{display:'flex', flexDirection: 'column', alignItems:"center", width:"100%", justifyContent:"center", bgcolor:"white", height:"50vh"}}>
      <Typography variant='h2' sx={{fontFamily:"abril fatface"}}>Minifix</Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: isMobile ? 'flex-end' : 'center' }}>
        <Navbar />
      </Box>
    </Box>
  )
}

export default Header