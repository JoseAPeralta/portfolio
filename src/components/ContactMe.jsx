import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export const ContactMe = () => {
  return (
    <Box as="section" mt="60px" align="center">
      <Heading>Contact me</Heading>
      <Text>Please contact me for more information and work opportunities</Text>
      <Flex gap="4" wrap="wrap" mt="20px">
        <FormControl isRequired w={["100%", "49%"]}>
          <Input
            type="text"
            placeholder="name"
            color="dark.200"
            bg="light.200"
            boxShadow="0px 1px 0px 0px rgba(65, 58, 70, 1);"
          />
        </FormControl>
        <FormControl isRequired w={["100%", "49%"]}>
          <Input
            type="email"
            placeholder="email"
            color="dark.200"
            bg="light.200"
            boxShadow="0px 1px 0px 0px rgba(65, 58, 70, 1);"
          />
        </FormControl>
        <FormControl isRequired w="100%">
          <Textarea
            placeholder="Message"
            color="dark.200"
            bg="light.200"
            boxShadow="0px 1px 0px 0px rgba(65, 58, 70, 1);"
          />
        </FormControl>
        <Button variant="solid">Send Message</Button>
      </Flex>
    </Box>
  );
};
