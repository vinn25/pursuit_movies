import { Box, List, ListItem, Stack, Typography } from "@mui/material";

import { all_movies_row1_section4 } from "../../utils/Utilities";
import { all_movies_row2_section4 } from "../../utils/Utilities";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const AllMovies = () => {
  return (
    <Box p={3}>
      <List>
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" color="white" fontWeight={600}>
            ALL MOVIES
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
          {all_movies_row1_section4.map((section) => (
            <ListItem sx={{ pl: "0", pt: "2%", textAlign: "center" }}>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <img src={section.img} width="90%" />
                <Stack direction="column" alignItems="center">
                  <Typography variant="subtitle2" color="white">
                    {section.title}
                  </Typography>
                  <Typography variant="subtitle2" color="white">
                    {section.year}
                  </Typography>
                </Stack>
              </Box>
            </ListItem>
          ))}
        </Stack>

        <Stack direction="row">
          {all_movies_row2_section4.map((section) => (
            <ListItem sx={{ pl: "0", textAlign: "center" }}>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <img src={section.img} width="90%" />
                <Stack direction="column" alignItems="center">
                  <Typography variant="subtitle2" color="white">
                    {section.title}
                  </Typography>
                  <Typography variant="subtitle2" color="white">
                    {section.year}
                  </Typography>
                </Stack>
              </Box>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  );
};

export default AllMovies;
