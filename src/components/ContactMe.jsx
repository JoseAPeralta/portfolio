import React from "react";
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
  Image,
} from "@chakra-ui/react";

export const ContactMe = () => {
  const contactFormEndPoint = "xjvzbryo";
  const [state, handleSubmit] = useForm(contactFormEndPoint);
  if (state.succeeded) {
    return (
      <Box pt="60px">
        <Text align="center" color="dark.100" fontSize="xl" mb="15px">
          Thank you for contacting me, I will answer you as soon as I can
        </Text>
        <Box align="center">
          <Image
            src="./images/afterContactImg.svg"
            alt="Contact me image"
            style={{
              height: "auto",
              maxWidth: "50%",
              objectFit: "cover",
              verticalAlign: "middle",
            }}
          />
        </Box>
      </Box>
    );
  }
  return (
    <Box as="section" id="contact" pt="60px">
      <Heading align="center" fontSize="5xl">
        Contact me
      </Heading>
      <Text align="center" fontSize="lg">
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
