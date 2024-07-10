import { Container, Box } from "@mui/material";
import SearchBar from "@/components/SearchBar";
export default function About() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "left", width: "100%" }}>
        <SearchBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <h1>Om Egensytt</h1>
        <p>Detta är om Egensytt sidan.</p>
      </Box>
    </Box>
  );
}
