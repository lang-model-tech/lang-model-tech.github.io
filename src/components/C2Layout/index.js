import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import googleFormConfig from "googleFormConfig";

import c2Logo from "assets/images/c2-logo.svg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

const ink = "#111827";
const muted = "#667085";

const socialLinks = [
  {
    label: "c2 on LinkedIn",
    href: "https://www.linkedin.com/company/c2-career-coach",
    icon: LinkedInIcon,
  },
  {
    label: "c2 on X",
    href: "https://x.com/c2careercoach",
    icon: TwitterIcon,
  },
];

function C2Layout({ children }) {
  const { hash, pathname } = useLocation();
  const waitlistFields = googleFormConfig.fields.waitlistCard;
  const [openEarlyAccess, setOpenEarlyAccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    primaryInterest: waitlistFields.primaryInterestOptions[0],
  });

  const handleFieldChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const isOverviewActive = pathname === "/" && hash !== "#faq";
  const isFaqActive = pathname === "/" && hash === "#faq";
  const isPlansActive = pathname.startsWith("/plans");
  const isBlogActive = pathname.startsWith("/blog");

  return (
    <MKBox bgColor="white" minHeight="100vh" sx={{ overflowX: "hidden" }}>
      <MKBox component="header" sx={navSx}>
        <Link component={RouterLink} to="/" underline="none" sx={brandSx} aria-label="c2 home">
          <MKBox component="img" src={c2Logo} alt="c2" sx={brandLogoSx} />
        </Link>
        <Stack direction="row" spacing={{ xs: 1.5, sm: 3 }} alignItems="center">
          <Link
            href="/#overview"
            underline="none"
            sx={navLinkSx(isOverviewActive)}
            aria-current={isOverviewActive ? "page" : undefined}
          >
            Overview
          </Link>
          <Link
            component={RouterLink}
            to="/plans"
            underline="none"
            sx={navLinkSx(isPlansActive)}
            aria-current={isPlansActive ? "page" : undefined}
          >
            Plans
          </Link>
          <Link
            component={RouterLink}
            to="/blog"
            underline="none"
            sx={navLinkSx(isBlogActive)}
            aria-current={isBlogActive ? "page" : undefined}
          >
            Blog
          </Link>
          <Link
            href="/#faq"
            underline="none"
            sx={navLinkSx(isFaqActive)}
            aria-current={isFaqActive ? "page" : undefined}
          >
            FAQ
          </Link>
          <MKButton
            variant="contained"
            color="dark"
            size="small"
            onClick={() => setOpenEarlyAccess(true)}
            sx={startButtonSx}
          >
            Start free
          </MKButton>
        </Stack>
      </MKBox>

      {typeof children === "function"
        ? children({ openEarlyAccess: () => setOpenEarlyAccess(true) })
        : children}

      <MKBox component="footer" sx={footerSx}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <MKBox component="img" src={c2Logo} alt="c2" sx={footerLogoSx} />
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    sx={socialLinkSx}
                  >
                    <Icon sx={{ fontSize: 19 }} />
                  </Link>
                );
              })}
            </Stack>
            <MKTypography variant="caption" sx={{ color: muted }}>
              &copy; {new Date().getFullYear()} LMTech. All rights reserved.
            </MKTypography>
          </Stack>
        </Container>
      </MKBox>

      <Dialog
        open={openEarlyAccess}
        onClose={() => setOpenEarlyAccess(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ pr: 7 }}>
          Start free with c2
          <IconButton
            aria-label="Close early access form"
            onClick={() => setOpenEarlyAccess(false)}
            sx={{ position: "absolute", right: 12, top: 12 }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <MKBox
          component="form"
          action={googleFormConfig.actionUrl}
          method="POST"
          target="_blank"
          onSubmit={() => setOpenEarlyAccess(false)}
        >
          <DialogContent dividers>
            <MKTypography variant="body2" sx={{ color: muted, lineHeight: 1.7 }} mb={3}>
              c2 is opening access in stages. Share your details and we will invite you when your
              free start is ready.
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MKInput
                  required
                  name={waitlistFields.fullName}
                  type="text"
                  label="Full name"
                  fullWidth
                  value={formData.fullName}
                  onChange={handleFieldChange("fullName")}
                />
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  required
                  name={waitlistFields.email}
                  type="email"
                  label="Email"
                  fullWidth
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  required
                  select
                  name={waitlistFields.primaryInterest}
                  label="What is your primary interest in joining the waitlist?"
                  fullWidth
                  value={formData.primaryInterest}
                  onChange={handleFieldChange("primaryInterest")}
                  sx={selectInputSx}
                >
                  {waitlistFields.primaryInterestOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </MKInput>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <MKButton variant="text" color="dark" onClick={() => setOpenEarlyAccess(false)}>
              Cancel
            </MKButton>
            <MKButton type="submit" variant="contained" color="dark" sx={startButtonSx}>
              Request access
            </MKButton>
          </DialogActions>
        </MKBox>
      </Dialog>
    </MKBox>
  );
}

const navSx = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: 1160,
  mx: "auto",
  px: { xs: 2, sm: 4 },
  py: 2.25,
};

const brandSx = {
  display: "inline-flex",
  alignItems: "center",
  color: ink,
};

const brandLogoSx = {
  display: "block",
  width: 62,
  height: 38,
  objectFit: "contain",
};

const footerLogoSx = {
  display: "block",
  width: 54,
  height: 34,
  objectFit: "contain",
};

const navLinkSx = (active) => ({
  position: "relative",
  color: ink,
  fontSize: 13,
  fontWeight: active ? 700 : 600,
  lineHeight: 1,
  display: { xs: "none", sm: "inline-flex" },
  alignItems: "center",
  minHeight: 30,
  px: 1.25,
  transition: "background-color 180ms ease, color 180ms ease",
  "&:after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: -5,
    width: active ? 18 : 0,
    height: 2,
    borderRadius: "999px",
    background: "linear-gradient(90deg, #55d98b, #27c3f3)",
    transform: "translateX(-50%)",
    transition: "width 180ms ease",
  },
  "&:hover": {
    color: "#2563eb",
    backgroundColor: "rgba(17, 24, 39, 0.04)",
  },
});

const startButtonSx = {
  borderRadius: "8px",
  boxShadow: "none",
  textTransform: "none",
  "&:hover": {
    boxShadow: "0 10px 26px rgba(17, 24, 39, 0.18)",
  },
};

const selectInputSx = {
  "& .MuiInputBase-root": {
    minHeight: 44,
  },
  "& .MuiSelect-select": {
    minHeight: "1.4375em",
    display: "flex",
    alignItems: "center",
    py: "12.5px",
  },
};

const footerSx = {
  py: 4,
  background:
    "linear-gradient(90deg, rgba(109,124,255,0.14), rgba(85,217,139,0.22), rgba(39,195,243,0.12))",
};

const socialLinkSx = {
  color: ink,
  lineHeight: 0,
  opacity: 0.76,
  transition: "opacity 180ms ease, color 180ms ease",
  "&:hover": {
    color: "#2563eb",
    opacity: 1,
  },
};

C2Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default C2Layout;
