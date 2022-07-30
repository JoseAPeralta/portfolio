import React from "react";
import { PortfolioItem } from "./PortfolioItem";
import { Box, Heading } from "@chakra-ui/react";

export const Portfolio = () => {
  const name = "App Name is";
  const image = "profile.jpeg";
  const description =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.";
  const preview = "https://github.com/";
  const code = "https://github.com/";

  return (
    <Box as="section" pt="60px">
      <Heading align="center">Portfolio</Heading>

      <Box>
        <PortfolioItem
          name={name}
          image={image}
          description={description}
          preview={preview}
          code={code}
        />
        <PortfolioItem
          name={name}
          image={image}
          description={description}
          preview={preview}
          code={code}
        />
        <PortfolioItem
          name={name}
          image={image}
          description={description}
          preview={preview}
          code={code}
        />
      </Box>
    </Box>
  );
};
