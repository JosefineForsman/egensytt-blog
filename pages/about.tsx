import { Container, Box } from '@mui/material'
export default function About() {
    return (
      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1>About Us</h1>
        <Box sx={{display:"flex", }}>
        <p>This is the About Us page.</p>

        </Box>
      </Container>
    )
  }