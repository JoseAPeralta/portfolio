import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Flex, Box, Text, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="primary.200"
      justify="center"
      alignContent="center"
      wrap="wrap"
      mt="60px"
      color="light.200"
      height="200px"
    >
      <Text width="100%" align="center">
        Develop by <strong>Jose Peralta</strong>
      </Text>
      <Box width="100%" align="center" pt="6px">
        <Link href="https://github.com/JoseAPeralta" isExternal fontSize="3xl">
          <AiFillGithub />
        </Link>
      </Box>
    </Flex>
  );
};
