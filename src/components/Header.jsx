import { Box, List, ListItem, Stack, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  return (
    <Box py={2} mx={4} sx={{ bgcolor: "#191818", height: "5vh" }}>
      <Stack direction="row" justifyContent="space-between">
        <List sx={{ pt: "0" }}>
          <ListItem sx={{ color: "white", gap: "10px" }}>
            <FacebookIcon
              sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            />
            <XIcon sx={{ "&:hover": { cursor: "pointer", color: "red" } }} />
            <YouTubeIcon
              sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            />
            <InstagramIcon
              sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
            />
          </ListItem>
        </List>

        <List sx={{ pt: "0" }}>
          <ListItem sx={{ color: "white", gap: "25px" }}>
            <Typography
              variant="subtitle2"
              sx={{ "&:hover": { color: "red" }, cursor: "pointer" }}
            >
              About Us
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ "&:hover": { color: "red" }, cursor: "pointer" }}
            >
              FAQs
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ "&:hover": { color: "red" }, cursor: "pointer" }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ "&:hover": { color: "red" }, cursor: "pointer" }}
            >
              Terms and Conditions
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ "&:hover": { color: "red" }, cursor: "pointer" }}
            >
              DMCA Policy
            </Typography>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default Header;
