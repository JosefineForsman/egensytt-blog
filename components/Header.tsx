import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import logo from '../public/egensytt-logo.svg'
import Navbar from './Navbar'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{display:'flex', flexDirection: 'column', alignItems:"center", width:"100%", justifyContent:"center", bgcolor:"white", height:"40vh"}}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: isMobile ? 'flex-end' : 'center' }}>
        <Navbar />
      </Box>
    </Box>
  )
}

export default Header