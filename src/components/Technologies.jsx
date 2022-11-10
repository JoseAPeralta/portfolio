import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export const Technologies = () => {
  const sm = "32px";
  const md = "64px";
  return (
    <Box as="section" pt="60px">
      <Heading align="center" fontSize="5xl">
        Technologies
      </Heading>

      <Flex pt="30px" gap="10" justify="center" wrap="wrap">
        <Box w={[sm, md]} h={[sm, md]}>
          <Image src="../images/icons/git.svg" alt="Git icon" />
        </Box>
        <Box w={[sm, md]} h={[sm, md]}>
          <Image src="../images/icons/javascript.svg" alt="Javascript icon" />
        </Box>
        <Box w={[sm, md]} h={[sm, md]}>
          <Image src="../images/icons/nodejs.svg" alt="nodeJS icon" />
        </Box>
        <Box w={[sm, md]} h={[sm, md]}>
          <Image src="../images/icons/reactjs.svg" alt="reactJS icon" />
        </Box>
        <Box w={["110px", "220px"]} h={[sm, md]}>
          <Image src="../images/icons/express.svg" alt="express icon" />
        </Box>
      </Flex>

      <Text align="center" pt="30px" color="dark.100" fontSize="xl">
        Comming soon...
      </Text>
      <Flex pt="16px" gap="6" justify="center" wrap="wrap">
        <Box w="32px" h="32px">
          <Image src="../images/icons/typescript.svg" alt="typescript icon" />
        </Box>
        <Box w="112px" h="32px">
          <Image src="../images/icons/mongodb.svg" alt="mongoDB icon" />
        </Box>
      </Flex>
    </Box>
  );
};
