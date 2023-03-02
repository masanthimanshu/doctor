import Link from "next/link";
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Link href="/">
          <img
            style={{ height: "4rem", width: "auto" }}
            src="/logo.png"
            alt="Logo"
          />
        </Link>
        <Box sx={{ width: "100%" }}>&nbsp;</Box>
        <Box display="flex">
          <Link href="#about" scroll={false}>
            <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
              <Typography>
                <b>About</b>
              </Typography>
            </Button>
          </Link>
          <Link href="#services" scroll={false}>
            <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
              <Typography>
                <b>Services</b>
              </Typography>
            </Button>
          </Link>
          <Link href="#blog" scroll={false}>
            <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
              <Typography>
                <b>Blog</b>
              </Typography>
            </Button>
          </Link>
          <Link href="#portfolio" scroll={false}>
            <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
              <Typography>
                <b>Portfolio</b>
              </Typography>
            </Button>
          </Link>
          <Link href="#contact" scroll={false}>
            <Button sx={{ p: 1, m: 1 }} variant="text" color="secondary">
              <Typography>
                <b>Contact</b>
              </Typography>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
