import { Box, List, ListItem, Stack, Typography } from "@mui/material";

import { all_series_row1_section3 } from "../../utils/Utilities";
import { all_series_row2_section3 } from "../../utils/Utilities";
import { all_series_row3_section3 } from "../../utils/Utilities";
import { all_series_row4_section3 } from "../../utils/Utilities";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const AllSeries = () => {
  return (
    <Box p={3}>
      <List>
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" color="white" fontWeight={600}>
            ALL SERIES
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

        <Stack direction="row" alignItems="center">
          {all_series_row1_section3.map((section) => (
            <ListItem sx={{ pl: "0", pt: "2%", textAlign: "center" }}>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <img src={section.img} width="90%" />
                <Typography variant="subtitle2" color="white">
                  {section.title}
                </Typography>
                <Typography variant="subtitle2" color="white">
                  {section.year}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </Stack>

        <Stack direction="row" alignItems="center">
          {all_series_row2_section3.map((section) => (
            <ListItem sx={{ pl: "0", textAlign: "center" }}>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <img src={section.img} width="90%" />
                <Typography variant="subtitle2" color="white">
                  {section.title}
                </Typography>
                <Typography variant="subtitle2" color="white">
                  {section.year}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </Stack>

        <Stack direction="row" alignItems="center">
          {all_series_row3_section3.map((section) => (
            <ListItem sx={{ pl: "0", textAlign: "center" }}>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <img src={section.img} width="90%" />
                <Typography variant="subtitle2" color="white">
                  {section.title}
                </Typography>
                <Typography variant="subtitle2" color="white">
                  {section.year}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </Stack>

        <Stack direction="row" alignItems="center">
          {all_series_row4_section3.map((section) => (
            <ListItem sx={{ pl: "0", textAlign: "center" }}>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <img src={section.img} width="90%" />
                <Typography variant="subtitle2" color="white">
                  {section.title}
                </Typography>
                <Typography variant="subtitle2" color="white">
                  {section.year}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  );
};

export default AllSeries;
