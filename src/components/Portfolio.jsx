import React from "react";
import { PortfolioItem } from "./PortfolioItem";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import * as TodoApp from "../content/my-todo-list-app/index.mdx";
import * as RickMorty from "../content/rick-and-morty/index.mdx";
import * as PortfolioP from "../content/portfolio/index.mdx";

export const Portfolio = () => {
  return (
    <Box as="section" id="projects" pt="60px">
      <Heading align="center" fontSize="5xl">
        Projects
      </Heading>

      <SimpleGrid pt="30px" columns={[1, 1, 1, 2, 2, 3]} spacing="6">
        <PortfolioItem html={TodoApp.default} attributes={TodoApp} />
        <PortfolioItem html={RickMorty.default} attributes={RickMorty} />
        <PortfolioItem html={PortfolioP.default} attributes={PortfolioP} />
      </SimpleGrid>
    </Box>
  );
};
