import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { top_five_series } from "../utils/Utilities";

const Sidebar = () => {
  return (
    <Box mx={4} p={3} sx={{ width: "20%" }}>
      {/* <Box position="fixed"> */}
      <List>
        <ListItem>
          <Typography variant="h5" color="white" fontWeight={600}>
            TOP 5 SERIES
          </Typography>
        </ListItem>

        <Box height="3px" width="80%" bgcolor="yellow"></Box>

        {top_five_series.map((series) => (
          <ListItem sx={{ pl: "0", pt: "10%" }}>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <img src={series.img} />
                <Stack>
                  <Typography variant="h4" color="white">
                    {series.order}
                  </Typography>
                  <Typography variant="h5" color="white">
                    {series.title}
                  </Typography>
                  <Typography variant="subtitle2" color="white">
                    Description
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <StarIcon sx={{ color: "yellow", fontSize: "large" }} />
                    <Typography variant="subtitle2" color="white">
                      {series.rating}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </ListItem>
        ))}
      </List>

      <List sx={{ pt: "30%" }}>
        <ListItem>
          <Typography variant="h5" color="white" fontWeight={600}>
            CATEGORIES
          </Typography>
        </ListItem>

        <Box height="3px" width="80%" bgcolor="red"></Box>

        <ListItem sx={{ pl: "0", pt: "10%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">Best Movies</Typography>
            <ArrowBackIosNewIcon sx={{ fontSize: "medium" }} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ pl: "0", pt: "3%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">Drama & Series</Typography>
            <ArrowBackIosNewIcon sx={{ fontSize: "medium" }} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ pl: "0", pt: "3%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">Articles & News</Typography>
            <ArrowBackIosNewIcon sx={{ fontSize: "medium" }} />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <Typography variant="h5" color="white" fontWeight={600}>
            QUICK LINKS
          </Typography>
        </ListItem>

        <Box height="3px" width="80%" bgcolor="red"></Box>

        <ListItem sx={{ pl: "0", pt: "10%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">ABOUT US</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ pl: "0", pt: "3%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">FAQs</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ pl: "0", pt: "3%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">PRIVACY POLICY</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ pl: "0", pt: "3%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">TERMS & CONDITIONS</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ pl: "0", pt: "3%", width: "85%" }}>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
              color: "white",
              borderRadius: "10px",
              "&:hover": { color: "red" },
            }}
            disableTouchRipple
          >
            <Typography variant="subtitle2">DMCA POLICY</Typography>
          </ListItemButton>
        </ListItem>
      </List>
      {/* </Box> */}
    </Box>
  );
};

export default Sidebar;
