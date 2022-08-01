import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export const PortfolioItem = ({ name, image, description, code, preview }) => {
  return (
    <Box as="article" p="14px" border="1px" borderColor="light.300">
      <header>
        <Heading as="h3" pb="14px">
          {name}
        </Heading>
      </header>
      <figure>
        <StaticImage
          src={`../images/profile.jpeg`}
          alt="Jose Peralta photo"
          placeholder="blurred"
          style={{
            height: "142px",
            maxWidth: "100%",
            objectFit: "cover",
            verticalAlign: "middle",
          }}
        />
      </figure>
      <Text pt="22px">{description}</Text>
      <Flex as="section" pt="14px" gap="6" wrap="wrap">
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
        <Box w="32px" h="32px">
          <StaticImage src="../images/icons/gatsby.svg" alt="gatsby icon" />
        </Box>
      </Flex>

      <ButtonGroup as="section" pt="14px" spacing="6">
        <Button as={Link} href={preview} isExternal variant="solid">
          Preview
        </Button>
        <Button as={Link} href={code} isExternal variant="outline">
          Code
        </Button>
        {/* <Button
          as={Link}
          href="https://github.com/JoseAPeralta"
          isExternal
          variant="outline"
        >
          Details
        </Button> */}
      </ButtonGroup>
    </Box>
  );
};
