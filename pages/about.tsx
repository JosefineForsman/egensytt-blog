import { Container, Box } from '@mui/material'
export default function About() {
    return (
      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1>Om Egensytt</h1>
        <Box sx={{display:"flex", }}>
        <p>Detta är om Egensytt sidans.</p>

        </Box>
      </Container>
    )
  }