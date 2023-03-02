import Link from "next/link";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

export const DoctorSection = ({
  img,
  edu,
  data,
  name,
  orderImg,
  orderData,
}) => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item md={4} order={orderImg}>
          <img src={img} alt="Doctor" />
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={6} order={orderData} display="flex" alignItems="center">
          <Box>
            <Typography variant="h4" color="darkblue">
              <b>{name}</b>
            </Typography>
            <br />
            <Typography color="blue">{edu}</Typography>
            <br />
            <Typography>{data}</Typography>
            <br />
            <br />
            <Link href="#">
              <Button variant="contained" color="secondary">
                <Typography color="white">
                  <b>Read More</b>
                </Typography>
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
