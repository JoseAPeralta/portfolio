import React from "react";
import { Flex, Link } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Flex
        as="nav"
        minWidth="max-content"
        justifyContent={["space-around", "end"]}
        bg="primary.200"
        color="light.200"
        p="4"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        fontSize="xl"
      >
        <Flex as="ul" gap="6">
          <Flex as="li">
            <Link href="#projects">Projects</Link>
          </Flex>
          <Flex as="li">
            <Link href="#contact">Contact</Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
