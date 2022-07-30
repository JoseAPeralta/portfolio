import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AiFillGithub } from "react-icons/ai";
import { Flex, Box, Heading, Text, Link } from "@chakra-ui/react";

export const Jumbotron = () => {
  return (
    <Flex as="section" minH={["40vh", "60vh", "40vh", "70vh"]}>
      <Flex
        w={["100%", "100%", "60%"]}
        bg="primary.100"
        color="light.200"
        p="10"
        wrap="wrap"
        align="center"
      >
        <Box as="header" align="center" w="100%">
          <Heading as="h1">Web Developer</Heading>
          <Text>I focus on developing secure and scalable software</Text>
        </Box>

        <Flex justifyContent="space-around" w="100%">
          <Text align="center">
            working to achieve the <br /> best performance
          </Text>
          <Link
            href="https://github.com/JoseAPeralta"
            isExternal
            fontSize="3xl"
          >
            <AiFillGithub />
          </Link>
        </Flex>
      </Flex>

      <Flex
        w={["0", "0", "40%"]}
        bg="secondary.200"
        justify="center"
        p={["0", "0", "4"]}
      >
        <StaticImage
          src="../images/profile.jpeg"
          alt="Jose Peralta photo"
          placeholder="blurred"
          style={{
            height: "auto",
            maxWidth: "100%",
            objectFit: "cover",
            verticalAlign: "middle",
          }}
        />
      </Flex>
    </Flex>
  );
};
