import {
  TextField,
  Grid,
  Button,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";

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

const Question = ({}) => {
  return (
    //TODO: Add Card
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item sx={sx100Width}>
        <Image
          src="https://picsum.photos/200/300"
          alt="Picture for question"
          height={200}
          width={300}
          sx={{}}
        />
      </Grid>
      <Grid item sx={sx100Width}>
        <Typography variant="h4">Question Description</Typography>
      </Grid>

      <Grid item sx={sx100Width}>
        <Typography variant="h6">Tags</Typography>
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

export default Question;
