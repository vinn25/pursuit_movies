import { Box, List, ListItem, Stack, Typography } from "@mui/material";

import { most_watched_section2 } from "../../utils/Utilities";

import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MostWatched = () => {
  return (
    <Box p={3}>
      <List>
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" color="white" fontWeight={600}>
            MOST WATHCED SERIES
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            color="white"
            sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
          >
            <PlayArrowIcon sx={{ color: "red", fontSize: "large" }} />
            <Typography variant="subtitle2">View All</Typography>
          </Stack>
        </ListItem>

        <Box height="3px" width="98.5%" bgcolor="red"></Box>

        <Stack direction="row">
          {most_watched_section2.map((section) => (
            <ListItem sx={{ pl: "0", pt: "2%", textAlign: "center" }}>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <img src={section.img} width="90%" />
                <Stack direction="column" alignItems="center">
                  <Typography variant="subtitle2" color="white">
                    {section.title}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <StarIcon sx={{ color: "yellow", fontSize: "large" }} />
                    <Typography variant="subtitle2" color="white">
                      {section.rating}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  );
};

export default MostWatched;
