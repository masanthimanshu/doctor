import { Grid, Typography } from "@mui/material";

export const ImgComponent = () => {
  return (
    <Grid item md={3}>
      <img src="/sample.png" alt="Image" />
      <br />
      <br />
      <Typography color="blue">
        <b>Diagnosis</b>
      </Typography>
      <br />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis?
      </Typography>
    </Grid>
  );
};
