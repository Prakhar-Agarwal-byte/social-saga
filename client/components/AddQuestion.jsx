import { TextField, Grid, Button, Chip, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const sx100Width = {
  width: "100%",
};

const chipData = [
  { key: 0, label: "Angular" },
  { key: 1, label: "jQuery" },
  { key: 2, label: "Polymer" },
  { key: 3, label: "React" },
  { key: 4, label: "Vue.js" },
  { key: 0, label: "Angular" },
  { key: 1, label: "jQuery" },
  { key: 2, label: "Polymer" },
];

const AddQuestion = () => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item sx={sx100Width}>
        <TextField
          label="Description"
          variant="outlined"
          sx={sx100Width}
          multiline
          rows={4}
        />
      </Grid>
      <Grid item sx={sx100Width}>
        <Button variant="contained" sx={sx100Width} multili>
          Upload Image
        </Button>
      </Grid>
      <Grid item sx={sx100Width}>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item sx={{ width: "90%" }}>
            <TextField label="Add Tags" variant="outlined" sx={sx100Width} />
          </Grid>
          <Grid item sx={{ width: "10%" }}>
            <IconButton color="primary" sx={sx100Width}>
              <CheckCircleIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={sx100Width}>
        <Grid container spacing={2} direction="row" alignItems="center">
          {chipData.map((data) => {
            return (
              <Grid item>
                <Chip
                  label={data.label}
                  onDelete={() => {
                    console.log("delete", data.label);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddQuestion;
