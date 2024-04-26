import {
  AppBar,
  Box,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import logo from "../utils/image/Navbar/pursuit_movies_logo.png";
import text from "../utils/image/Navbar/pursuit_movies_text.png";
import SearchIcon from "@mui/icons-material/Search";

import styled from "@emotion/styled";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
});

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#222121" }}>
      <StyledToolbar>
        <List>
          <Link href="/">
            <ListItem sx={{ gap: "10px" }}>
              <img src={logo} />
              <img src={text} height="40px" />
            </ListItem>
          </Link>
        </List>

        <List>
          <ListItem sx={{ gap: "5px" }}>
            <SearchIcon />
            <InputBase placeholder="Search" sx={{ color: "white" }} />
          </ListItem>
        </List>

        <List>
          <Stack direction="row" spacing={3}>
            <ListItemButton
              sx={{
                "&:hover": { backgroundColor: "red" },
                borderRadius: "5px",
              }}
              disableRipple
            >
              <Typography variant="subtitle2">Sign In</Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                "&:hover": { backgroundColor: "red" },
                borderRadius: "5px",
              }}
              disableRipple
            >
              <Typography variant="subtitle2">Sign Up</Typography>
            </ListItemButton>
          </Stack>
        </List>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
