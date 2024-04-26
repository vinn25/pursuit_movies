import { Box } from "@mui/material";

import Series from "./subcomponents/Series";
import MostWatched from "./subcomponents/MostWatched";
import AllSeries from "./subcomponents/AllSeries";
import AllMovies from "./subcomponents/AllMovies";

const Feed = () => {
  return (
    <Box mx={4} sx={{ width: "80%" }}>
      <Series />
      <MostWatched />
      <AllSeries />
      <AllMovies />
    </Box>
  );
};

export default Feed;
