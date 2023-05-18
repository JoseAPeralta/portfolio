import { Box, Heading, Link, Button, ButtonGroup } from "@chakra-ui/react";

export const PortfolioItem = ({ html, attributes }) => {
  const { title, code, demo } = attributes;
  const Body = html;
  return (
    <Box as="article" p="14px" border="1px" borderColor="light.300">
      <header>
        <Heading as="h3" pb="14px">
          {title}
        </Heading>
      </header>

      <Box as="section" fontSize="lg">
        <Body />
      </Box>

      <ButtonGroup as="section" pt="14px" spacing="6">
        <Button as={Link} href={demo} isExternal variant="solid">
          Demo
        </Button>
        <Button as={Link} href={code} isExternal variant="outline">
          Code
        </Button>
      </ButtonGroup>
    </Box>
  );
};
