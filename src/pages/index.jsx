import * as React from "react";
import { Box } from "@chakra-ui/react";
import {
  Layout,
  Jumbotron,
  Technologies,
  Portfolio,
  ContactMe,
} from "../components";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Jumbotron />
        <Box ml="10" mr="10">
          <Technologies />
          <Portfolio data={data} />
          <ContactMe />
        </Box>
      </Layout>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            banner
            banner_alt
            code
            demo
            slug
            stack
            title
          }
          body
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query MyQuery {
//     contentJson {
//       projects {
//         code
//         description
//         banner
//         name
//         preview
//         stack
//       }
//       id
//     }
//     allFile(
//       filter: {
//         relativeDirectory: { eq: "projects" }
//         sourceInstanceName: { eq: "images" }
//       }
//     ) {
//       nodes {
//         base
//         id
//         name
//         childImageSharp {
//           id
//           gatsbyImageData(width: 1160, height: 600)
//         }
//       }
//     }
//   }
// `;
