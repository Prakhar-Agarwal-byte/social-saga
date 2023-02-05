import {
  TextField,
  Grid,
  Button,
  Chip,
  IconButton,
  Typography,
  Card,
} from "@mui/material";
import Image from "next/image";

const sx100Width = {
  width: "100%",
};

const Question = ({ question }) => {
  return (
    <Card raised sx={{ padding: "1rem" }}>
      <Grid container spacing={2} direction="column">
        {question.url && (
          <Grid item>
            <Image
              src={question.url}
              alt="Picture for question"
              height={300}
              width={400}
            />
          </Grid>
        )}
        <Grid item>
          <Typography variant="h4">{question.description}</Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={0.25} direction="row">
            {question.tags.map((data, idx) => {
              return (
                <Grid item key={idx}>
                  <Chip
                    label={data}
                    onDelete={() => {
                      console.log("delete", data);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Question;
