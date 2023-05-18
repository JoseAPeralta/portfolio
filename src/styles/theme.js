import { extendTheme } from "@chakra-ui/react";
import { Patua_One, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const PatuaOne = Patua_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const theme = {
  colors: {
    dark: {
      100: "#413A46",
      200: "#252128",
      300: "#19161A",
    },
    light: {
      100: "#ECECEC",
      200: "#E2E2E2",
      300: "#D8D8D8",
    },
    primary: {
      100: "#5A0999",
      200: "#3E066A",
      300: "#36055D",
    },
    secondary: {
      100: "#5BC20B",
      200: "#489909",
      300: "#3F8608",
    },
  },
  fonts: {
    heading: `${PatuaOne.style.fontFamily},Helvetica,Arial,sans-serif`,
    body: `${poppins.style.fontFamily},Helvetica,Arial,sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "light.100",
        color: "dark.200",
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "primary.200",
          color: "light.100",
          _hover: {
            bg: "primary.100",
            _disabled: {
              bg: "primary.200",
              color: "light.200",
            },
          },
          _active: {
            bg: "primary.100",
            boxShadow:
              "-6px -6px 6px 0px rgba(0, 0, 0, 0.25) inset , 6px 6px 8px 0px rgba(0, 0, 0, 0.25) inset",
          },
        },
        outline: {
          color: "primary.200",
          outline: "1px solid #3E066A",
          _hover: {
            bg: "primary.100",
            color: "light.100",
            outline: "1px  #5A0999",
          },
          _active: {
            bg: "primary.100",
            boxShadow:
              "-6px -6px 6px 0px rgba(0, 0, 0, 0.25) inset , 6px 6px 8px 0px rgba(0, 0, 0, 0.25) inset",
          },
        },
      },
      defaultProps: {
        // Then here we set the base variant as the default
        variant: "base",
      },
    },
    Input: {
      bg: "black",
      color: "black",
    },
  },
};

export default extendTheme(theme);
