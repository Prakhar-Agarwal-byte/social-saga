import { TextField, Button, Grid, Typography } from "@mui/material";

const sx100Width = {
  width: "100%",
};

const Login = () => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid item sx={sx100Width}>
        <TextField label="Username" variant="outlined" sx={sx100Width} />
      </Grid>
      <Grid item sx={sx100Width}>
        <TextField label="Password" variant="outlined" sx={sx100Width} />
      </Grid>
      <Grid item sx={sx100Width}>
        <Button variant="contained" sx={sx100Width}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
