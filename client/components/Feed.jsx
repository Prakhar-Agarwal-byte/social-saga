import { TextField, Grid, Button, Chip, IconButton } from "@mui/material";
import Question from "./Question";

const questions = [
  {
    id: 1,
    description: "This is a question",
    url: "https://picsum.photos/300/400",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 2,
    description: "This is a question",
    url: "https://picsum.photos/300/400",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 3,
    description: "This is a question",
    url: "https://picsum.photos/300/400",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 4,
    description: "This is a question",
    url: "https://picsum.photos/300/400",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 5,
    description: "This is a question",
    url: "https://picsum.photos/300/400",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 6,
    description: "This is a question",
    url: "https://picsum.photos/300/400",
    tags: ["tag1", "tag2", "tag3"],
  },
];

const Feed = ({}) => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      {questions.map((question) => {
        return (
          <Grid item key={question.id}>
            <Question question={question} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Feed;
