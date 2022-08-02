import * as React from "react";
import { Box } from "@chakra-ui/react";
import {
  Navbar,
  Jumbotron,
  Technologies,
  Portfolio,
  ContactMe,
  Footer,
} from "../components";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Box ml="10" mr="10">
        <Technologies />
        <Portfolio data={data} />
        <ContactMe />
      </Box>
      <Footer />
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    contentJson {
      projects {
        code
        description
        banner
        name
        preview
        stack
      }
      id
    }
    allFile(
      filter: {
        relativeDirectory: { eq: "projects" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      nodes {
        base
        id
        name
        childImageSharp {
          id
          gatsbyImageData(width: 1160, height: 600)
        }
      }
    }
  }
`;
