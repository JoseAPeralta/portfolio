import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useForm } from "@formspree/react";
import {
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export const ContactMe = () => {
  const contactFormEndPoint = "xjvzbryo";
  const [state, handleSubmit] = useForm(contactFormEndPoint);
  if (state.succeeded) {
    return (
      <Box>
        <Text align="center" color="dark.100" fontSize="xl" mt="60px" mb="15px">
          Thank you for contacting me, I will answer you as soon as I can
        </Text>
        <Box align="center">
          <StaticImage
            src="../images/eezy_71.svg"
            alt="Contact me image"
            placeholder="blurred"
            style={{
              height: "auto",
              maxWidth: "70%",
              objectFit: "cover",
              verticalAlign: "middle",
            }}
          />
        </Box>
      </Box>
    );
  }
  return (
    <Box as="section" mt="60px">
      <Heading align="center">Contact me</Heading>
      <Text align="center">
        Please contact me for more information and work opportunities
      </Text>

      <Flex
        as="form"
        method="post"
        onSubmit={handleSubmit}
        gap="4"
        wrap="wrap"
        mt="30px"
      >
        <FormControl as="fieldset" isRequired w={["100%", "49%"]}>
          <FormLabel htmlFor="name" color="dark.100">
            Name:
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Michael Smith"
            color="dark.200"
            bg="light.200"
            boxShadow="0px 1px 0px 0px rgba(65, 58, 70, 1);"
          />
        </FormControl>
        <FormControl as="fieldset" isRequired w={["100%", "49%"]}>
          <FormLabel htmlFor="email" color="dark.100">
            Email:
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="MichaelSmith@gmail.com"
            color="dark.200"
            bg="light.200"
            boxShadow="0px 1px 0px 0px rgba(65, 58, 70, 1);"
          />
        </FormControl>
        <FormControl as="fieldset" isRequired w="100%">
          <FormLabel htmlFor="message" color="dark.100">
            Message:
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="message"
            color="dark.200"
            bg="light.200"
            boxShadow="0px 1px 0px 0px rgba(65, 58, 70, 1);"
          />
        </FormControl>
        <Button type="submit" variant="solid" isLoading={state.submitting}>
          Send Message
        </Button>
      </Flex>
    </Box>
  );
};
