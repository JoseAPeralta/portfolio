import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import JosePeraltaImg from "../images/profile.jpeg?w=1200&h=1600;1400&position=top&webp&quality=80&srcset";
import Fallback from "../images/profile.jpeg";

export const Jumbotron = () => {
  return (
    <Flex as="section" minH={["40vh", "60vh", "40vh", "10vh"]}>
      <Flex
        w={["100%", "100%", "60%"]}
        bg="primary.100"
        color="light.200"
        p="10"
        wrap="wrap"
        align="center"
      >
        <Box as="header" align="center" w="100%">
          <Heading as="h1" fontSize={["3xl", "5xl", "5xl", "6xl"]}>
            Web Developer
          </Heading>
          <Text fontSize={["md", "2xl"]} pt="4px">
            I focus on developing secure and scalable software
          </Text>
        </Box>

        <Flex justifyContent="space-around" w="100%">
          <Text align="center" fontSize={["sm", "xl"]}>
            working to achieve the <br /> best performance
          </Text>
          <Link
            href="https://github.com/JoseAPeralta"
            isExternal
            fontSize="5xl"
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
        <Image
          srcset={JosePeraltaImg}
          fallbackSrc={Fallback}
          alt="Jose Peralta photo"
        />
      </Flex>
    </Flex>
  );
};
