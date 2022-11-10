import { Box } from "@chakra-ui/react";
import {
  Layout,
  Jumbotron,
  Technologies,
  Portfolio,
  ContactMe,
} from "./components";

function App() {
  return (
    <>
      <Layout>
        <Jumbotron />
        <Box ml="10" mr="10">
          <Technologies />
          <Portfolio />
          <ContactMe />
        </Box>
      </Layout>
    </>
  );
}

export default App;
