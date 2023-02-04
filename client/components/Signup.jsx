import { TextField, Button, Grid, Typography, Container } from "@mui/material";

const sx100Width = {
  width: "100%",
};

const Signup = () => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">Signup</Typography>
      </Grid>
      <Grid item sx={sx100Width}>
        <TextField label="Name" variant="outlined" sx={sx100Width} />
      </Grid>
      <Grid item sx={sx100Width}>
        <TextField
          label="Email-Id"
          variant="outlined"
          sx={{
            width: "100%",
          }}
        />
      </Grid>
      <Grid item sx={sx100Width}>
        <TextField
          label="Password"
          variant="outlined"
          sx={{
            width: "100%",
          }}
        />
      </Grid>
      <Grid item sx={sx100Width}>
        <Button
          variant="outlined"
          component="label"
          sx={{
            width: "100%",
          }}
        >
          Upload profile picture
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Grid>
      <Grid item sx={sx100Width}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}
        >
          Signup
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
