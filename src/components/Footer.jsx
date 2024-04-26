import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box px={10} sx={{ bgcolor: "#636363" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" color="white">
          Copyrights © 2020-23, Pursuit Movies - All Rights Reserved.
        </Typography>

        <Stack direction="row" spacing="25px" color="white">
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
