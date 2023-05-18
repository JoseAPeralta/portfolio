import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Jumbotron, Technologies, Portfolio, ContactMe } from "@/components";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jose Peralta - web developer</title>
      </Head>
      <Jumbotron />
      <Box ml="10" mr="10">
        <Technologies />
        <Portfolio />
        <ContactMe />
      </Box>
    </>
  );
}
