import { Box, Stack } from "@mui/material";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <Box>
      <Header />
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
      <Footer />
    </Box>
  );
};

export default LandingPage;
