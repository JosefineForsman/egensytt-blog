import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        width: "650px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>Kontakt</h1>
      <p>
        Vill du komma i kontakt med oss? Skicka gärna ett mail eller kontakta
        oss på våra sociala medier.
      </p>
      <form onSubmit={handleSubmit}>
        <TextField label="Namn" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Meddelande"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Skicka
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
