import React from "react";
import { PortfolioItem } from "./PortfolioItem";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
// import JSONData from "../content/projects.json";
// import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Portfolio = ({ data }) => {
  // data.contentJson.projects.map((project) => {
  //   return (project.img = data.allFile.nodes.filter((image) => {
  //     const imgName = image.base.toLowerCase();
  //     const projectImg = project.banner.toLowerCase();
  //     return imgName === projectImg;
  //   })[0]);
  // });
  return (
    <Box as="section" pt="60px">
      <Heading align="center">Portfolio</Heading>

      <SimpleGrid pt="30px" columns={[1, 1, 1, 2, 2, 3]} spacing="6">
        {data.allMdx.edges.map((project, index) => (
          <PortfolioItem key={index} data={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
