// @mui material components
import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import googleFormConfig from "googleFormConfig";
import aboutImage from "assets/images/bg-about-us.jpg";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/hero-image.jpg";
function Home() {
  const [openInnerCircle, setOpenInnerCircle] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    // organization: "",
    primaryInterest: "",
    other: "",
    referredBy: [],
    excitementScale: "",
    additionalComments: "",
    timezone: "",
  });

  const handleFieldChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleCheckboxChange = (field, option) => (event) => {
    const checked = event.target.checked;
    setFormData((prev) => {
      const current = Array.isArray(prev[field]) ? prev[field] : [];
      const next = checked ? [...current, option] : current.filter((item) => item !== option);
      return { ...prev, [field]: next };
    });
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/#waitlist",
          label: "Join waitlist",
          color: "success",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.78),
              rgba(gradients.dark.state, 0.68)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container sx={{ py: { xs: 6, md: 0 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <MKTypography
                variant="h1"
                color="white"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
                mb={2}
              >
                All your learning.
                <br />
                One adaptive platform.
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.82} mb={3}>
                AI-personalized study plans, coaching nudges, and progress tracking built for
                students and teams who want faster, deeper results. Real-time insights and active
                feedback keep tutors and learners aligned.
              </MKTypography>
              <MKBox display="flex" gap={2} flexWrap="wrap">
                <MKButton
                  variant="contained"
                  color="success"
                  size="large"
                  component="a"
                  href="#waitlist"
                >
                  Join waitlist
                </MKButton>
                <MKButton variant="outlined" color="white" size="large" component="a" href="/blog">
                  Read the blog
                </MKButton>
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: ({ palette: { white } }) => white.main,
                  boxShadow: ({ boxShadows: { xxl } }) => xxl,
                  borderRadius: "xl",
                  maxWidth: 520,
                  ml: { md: "auto" },
                }}
              >
                <MKTypography variant="h5" color="dark" mb={1}>
                  See what we are building
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={3}>
                  Join the early waitlist for pilots, research drops, and beta invites.
                </MKTypography>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOpenInnerCircle(true);
                  }}
                  style={{ width: "100%" }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <MKInput
                        required
                        value={formData.fullName}
                        onChange={handleFieldChange("fullName")}
                        type="text"
                        label="Full name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        required
                        value={formData.email}
                        onChange={handleFieldChange("email")}
                        type="email"
                        label="Work email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKButton type="submit" variant="gradient" color="dark" fullWidth size="large">
                        Continue
                      </MKButton>
                    </Grid>
                  </Grid>
                </form>
                <Divider sx={{ my: 3 }} />
                <MKTypography variant="caption" color="text">
                  We share occasional updates only. Unsubscribe anytime.
                </MKTypography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox component="section" id={"waitlist"} bgColor="white" py={{ xs: 6, md: 8 }} px={1}>
        <Container>
          <Grid container spacing={20} alignItems="center" px={10}>
            <Grid item xs={12} md={6} px={6}>
              <MKTypography variant="h2" color="dark" mb={2} sx={({ typography: { size }, breakpoints }) => ({
                fontSize: "3rem",
                [breakpoints.down("md")]: { fontSize: size["xl"] }
              })}>
                In the coming months, we are launching a new approach to learning.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                If you want early access to this latest innovation, register your interest and you
                will be a part of our inner circle community who gets priority access and
                information.
              </MKTypography>
              <MKButton variant="gradient" color="success" size="large" onClick={() => setOpenInnerCircle(true)}>
                Get early access
              </MKButton>
            </Grid>
            <Grid item xs={12} md={6} px={6}>
              <MKBox
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  display: "grid",
                  gap: 2.5,
                }}
              >
                <MKBox component="li" display="flex" gap={2} alignItems="flex-start">
                  <ArrowCircleRightRoundedIcon color="success" sx={{ mt: 0.5 }} />
                  <MKBox>
                    <MKTypography variant="h5" color="dark" mb={0.5}>
                      Personalized learning blueprints
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Dynamic pathways tailor every lesson, exercise, and assessment to each learner so adoption is fast and engagement stays high.
                    </MKTypography>
                  </MKBox>
                </MKBox>
                <MKBox component="li" display="flex" gap={2} alignItems="flex-start">
                  <ArrowCircleRightRoundedIcon color="success" sx={{ mt: 0.5 }} />
                  <MKBox>
                    <MKTypography variant="h5" color="dark" mb={0.5}>
                      Always-on coaching signals
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Automated nudges and feedback loops keep your teams on pace, highlighting where to lean in before blockers surface.
                    </MKTypography>
                  </MKBox>
                </MKBox>
                <MKBox component="li" display="flex" gap={2} alignItems="flex-start">
                  <ArrowCircleRightRoundedIcon color="success" sx={{ mt: 0.5 }} />
                  <MKBox>
                    <MKTypography variant="h5" color="dark" mb={0.5}>
                      Proof-in-hand reporting
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Clear dashboards translate activity into outcomes you can show stakeholders, making every learning investment measurable.
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox component="section" bgColor="white" py={{ xs: 8, md: 10 }} px={1}>
        <Container>
          <Grid container spacing={5} alignItems="center" px={10}>
            <Grid item xs={12} md={7}>
              <MKTypography variant="h3" color="dark" mb={2}>
                About us
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={2.5}>
                We’re a team of researchers and engineers with firsthand insight into the challenges of learning who want to build an impactful solution that makes a meaningful impact for learners.
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={5}>
              <MKBox
                component="img"
                src={aboutImage}
                alt="Learners collaborating"
                width="100%"
                borderRadius="xl"
                sx={{
                  objectFit: "cover",
                  boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={3}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      <Dialog open={openInnerCircle} onClose={() => setOpenInnerCircle(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Get early access</DialogTitle>
        <MKBox component="form"
          action={googleFormConfig.actionUrl}
          method="POST"
          target="_blank"
          onSubmit={() => setOpenInnerCircle(false)}
        >
          <DialogContent dividers>
            <MKTypography variant="body2" color="text" mb={3}>
              Join our inner circle for first looks, private demos, and fast-lane onboarding when we launch.
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MKInput
                  required
                  name={googleFormConfig.fields.waitlistCard.fullName}
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
                  name={googleFormConfig.fields.waitlistCard.email}
                  type="email"
                  label="Email"
                  fullWidth
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <MKInput
                  name={googleFormConfig.fields.waitlistCard.organization}
                  type="text"
                  label="Company or school"
                  fullWidth
                  value={formData.organization}
                  onChange={handleFieldChange("organization")}
                />
              </Grid> */}
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <MKTypography variant="body2" color="dark" mb={1} display="block">
                    Primary interest
                  </MKTypography>
                  <RadioGroup
                    name={googleFormConfig.fields.waitlistCard.primaryInterest}
                    value={formData.primaryInterest || ""}
                    onChange={handleFieldChange("primaryInterest")}
                    sx={{
                      "& .MuiFormControlLabel-root": { alignItems: "flex-start", mb: 0.5 },
                    }}
                  >
                    {googleFormConfig.fields.waitlistCard.primaryInterestOptions?.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        checked={formData.primaryInterest === option}
                        control={<Radio color="success" size="small" />}
                        label={
                          <MKTypography variant="body2" color="text">
                            {option}
                          </MKTypography>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  name={googleFormConfig.fields.waitlistCard.other}
                  type="text"
                  label="If other, please specify"
                  fullWidth
                  value={formData.other}
                  onChange={handleFieldChange("other")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <MKTypography variant="body2" color="dark" mb={1} display="block">
                    How did you hear about us?
                  </MKTypography>
                  <MKBox
                    component="div"
                    sx={{
                      display: "grid",
                      gap: 0.5,
                    }}
                  >
                    {googleFormConfig.fields.waitlistCard.referredByOptions?.map((option) => (
                      <FormControlLabel
                        key={option}
                        control={
                          <Checkbox
                            color="success"
                            size="small"
                            name={googleFormConfig.fields.waitlistCard.referredBy}
                            value={option}
                            checked={formData.referredBy.includes(option)}
                            onChange={handleCheckboxChange("referredBy", option)}
                          />
                        }
                        label={
                          <MKTypography variant="body2" color="text">
                            {option}
                          </MKTypography>
                        }
                      />
                    ))}
                  </MKBox>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <MKTypography variant="body2" color="dark" mb={1} display="block">
                    How excited are you to try this? (1-5)
                  </MKTypography>
                  <RadioGroup
                    row
                    name={googleFormConfig.fields.waitlistCard.excitementScale}
                    value={formData.excitementScale || ""}
                    onChange={handleFieldChange("excitementScale")}
                    sx={{
                      "& .MuiFormControlLabel-root": { mr: 2 },
                    }}
                  >
                    {googleFormConfig.fields.waitlistCard.excitementScaleOptions?.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        checked={() => { formData.excitementScale === option }}
                        control={<Radio color="success" size="small" />}
                        label={
                          <MKTypography variant="body2" color="text">
                            {option}
                          </MKTypography>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <MKTypography variant="body2" color="dark" mb={1} display="block">
                    Your timezone
                  </MKTypography>
                  <Select
                    name={googleFormConfig.fields.waitlistCard.timezone}
                    value={formData.timezone || ""}
                    onChange={handleFieldChange("timezone")}
                    displayEmpty
                    fullWidth
                    size="small"
                    sx={{ mt: 0.5 }}
                  >
                    <MenuItem value="" disabled>
                      <MKTypography variant="body2" color="text">
                        Select a timezone
                      </MKTypography>
                    </MenuItem>
                    {googleFormConfig.fields.waitlistCard.timezoneOptions?.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <MKInput
                  name={googleFormConfig.fields.waitlistCard.additionalComments}
                  type="text"
                  label="Anything else we should know?"
                  fullWidth
                  value={formData.additionalComments}
                  onChange={handleFieldChange("additionalComments")}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <MKButton variant="text" color="dark" onClick={() => setOpenInnerCircle(false)}>
              Cancel
            </MKButton>
            <MKButton type="submit" variant="gradient" color="success">
              Request early access
            </MKButton>
          </DialogActions>
        </MKBox>
      </Dialog>
    </>
  );
}

export default Home;
