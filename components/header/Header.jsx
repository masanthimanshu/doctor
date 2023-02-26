import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <img
          style={{ height: "4rem", width: "auto" }}
          src="/logo.png"
          alt="Logo"
        />
        <Box sx={{ width: "100%" }}>&nbsp;</Box>
        <Box display="flex">
          <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
            <Typography>
              <b>Home</b>
            </Typography>
          </Button>
          <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
            <Typography>
              <b>About</b>
            </Typography>
          </Button>
          <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
            <Typography>
              <b>Services</b>
            </Typography>
          </Button>
          <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
            <Typography>
              <b>Blog</b>
            </Typography>
          </Button>
          <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
            <Typography>
              <b>Dentists</b>
            </Typography>
          </Button>
          <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
            <Typography>
              <b>Portfolio</b>
            </Typography>
          </Button>
          <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
            <Typography>
              <b>Contact</b>
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
