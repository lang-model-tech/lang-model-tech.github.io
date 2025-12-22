// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/swactech-logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "SWACTech",
    image: logoCT,
    route: "/",
  },
  socials: [
    { icon: <LinkedInIcon />, link: "https://www.linkedin.com" },
    { icon: <TwitterIcon />, link: "https://twitter.com" },
    { icon: <GitHubIcon />, link: "https://github.com/swactech" },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "home", href: "/" },
        { name: "blog", href: "/blog" },
        { name: "join waitlist", href: "/#waitlist" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "platform updates", href: "/blog" },
        { name: "research & papers", href: "/blog" },
        { name: "tutorials", href: "/blog" },
      ],
    },
    {
      name: "help",
      items: [
        { name: "contact", href: "mailto:hello@swactech.ng" },
        { name: "support", href: "mailto:hello@swactech.ng" },
        { name: "status", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      © {date} SWACTech. All rights reserved.
    </MKTypography>
  ),
};
