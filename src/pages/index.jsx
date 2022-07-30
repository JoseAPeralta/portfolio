import * as React from "react";
import { Box } from "@chakra-ui/react";
import {
  Navbar,
  Jumbotron,
  Technologies,
  Portfolio,
  ContactMe,
  Footer,
} from "../components";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Box ml="10" mr="10">
        <Technologies />
        <Portfolio />
        <ContactMe />
      </Box>
      <Footer />
    </>
  );
};

export default IndexPage;
