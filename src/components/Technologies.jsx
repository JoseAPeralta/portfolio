import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export const Technologies = () => {
  return (
    <Box as="section" pt="60px">
      <Heading align="center">Technologies</Heading>

      <Flex pt="30px" gap="6" justify="center" wrap="wrap">
        <Box w="32px" h="32px">
          <StaticImage src="../images/icons/git.svg" alt="Git icon" />
        </Box>
        <Box w="32px" h="32px">
          <StaticImage
            src="../images/icons/javascript.svg"
            alt="Javascript icon"
          />
        </Box>
        <Box w="32px" h="32px">
          <StaticImage src="../images/icons/nodejs.svg" alt="nodeJS icon" />
        </Box>
        <Box w="32px" h="32px">
          <StaticImage src="../images/icons/reactjs.svg" alt="reactJS icon" />
        </Box>

        <Box w="110px" h="32px">
          <StaticImage src="../images/icons/express.svg" alt="express icon" />
        </Box>
        <Box w="112px" h="32px">
          <StaticImage src="../images/icons/mongodb.svg" alt="mongoDB icon" />
        </Box>
      </Flex>

      <Text align="center" pt="30px" color="dark.100">
        Comming soon...
      </Text>
      <Flex pt="16px" gap="6" justify="center" wrap="wrap">
        <Box w="32px" h="32px">
          <StaticImage
            src="../images/icons/typescript.svg"
            alt="typescript icon"
          />
        </Box>
        <Box w="53px" h="32px">
          <StaticImage src="../images/icons/nextjs.svg" alt="nextJS icon" />
        </Box>
      </Flex>
    </Box>
  );
};
