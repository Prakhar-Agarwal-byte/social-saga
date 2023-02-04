import { Grid, Typography, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const sx100Width = {
  width: "100%",
};

const Profile = () => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">Profile</Typography>
      </Grid>
      <Grid item>
        <AccountCircleIcon sx={{ fontSize: 150, color: "primary.main" }} />
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
      <Grid item>
        <Typography variant="h6">number of questions answered</Typography>
      </Grid>
      <Grid item sx={sx100Width}>
        <Button
          variant="contained"
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
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Profile;
