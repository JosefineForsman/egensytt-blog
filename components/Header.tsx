import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Navbar from './Navbar'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ height:"10vh"}}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: isMobile ? 'flex-end' : 'center' }}>
        <Navbar />
      </Box>
    </Box>
  )
}

export default Header