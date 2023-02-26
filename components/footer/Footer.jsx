import style from "./style.module.css";
import { Phone, Mail, LocationOn } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <section className={style.sec_one}>
        <Container>
          <img
            style={{ height: "4rem", width: "auto" }}
            src="/logo.png"
            alt="Logo"
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid container spacing={5}>
            <Grid item md={4}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Phone /> &nbsp; &nbsp; &nbsp;
                <Typography>+1800 - 001 - 002</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Mail /> &nbsp; &nbsp; &nbsp;
                <Typography>info@example.com</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <LocationOn /> &nbsp; &nbsp; &nbsp;
                <Typography>Address Goes Here</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={style.sec_two}>
        <Typography>© 2023 / All Rights Reserved</Typography>
      </section>
    </>
  );
};
