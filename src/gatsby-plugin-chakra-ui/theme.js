import { theme } from "@chakra-ui/core"

const breakpoints = ["640px", "768px", "1024px", "1280px"]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const customTheme = {
  ...theme,
  breakpoints,
  fonts: {
    ...theme.fonts,
    header: '"CircularStdBlack" ,sans-serif',
    display: '"CircularStdBold" ,sans-serif',
    medium: '"CircularStdMedium" ,sans-serif',
    post: '"Merriweather", sans-serif',
    sans: '"CircularStd", sans-serif',
  },
  fontSizes: {
    ...theme.fontSizes,
    xx: ".55rem",
    tiny: ".68rem",
    "7xl": "5rem",
    "8xl": "6rem",
  },
  colors: {
    ...theme.colors,
    mode: {
      light: {
        text: "#2D3748",
        bg: "#ffffff",
        nav: "#1A202C",
        heading: "#171923",
      },
      dark: {
        text: "#CBD5E0",
        bg: "#171923",
        nav: "#ffffff",
        heading: "#ffffff",
      },
    },
  },
  space: {
    ...theme.space,
    "60": "15rem",
    "80": "20rem",
    "85": "23rem",
    "90": "25rem",
    "108": "27rem",
    "110": "30rem",
    "115": "32rem",
    "120": "35rem",
    "125": "45rem",
    "127": "48rem",
    "130": "55rem",
    "135": "60rem",
    "140": "70rem",
  },
  sizes: {
    ...theme.sizes,
    "14": "3.5rem",
    "60": "15rem",
    "70": "18rem",
    "80": "20rem",
    "85": "23rem",
    "90": "25rem",
    "108": "27rem",
    "110": "30rem",
    "115": "32rem",
    "120": "35rem",
    "125": "45rem",
    "127": "48rem",
    "130": "55rem",
    "135": "60rem",
    "140": "70rem",
    "145": "76rem",
  },
}

export default customTheme
