import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

import C2Layout from "components/C2Layout";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const productBlue = "#27c3f3";
const productGreen = "#55d98b";
const ink = "#111827";
const muted = "#667085";

const featureRows = [
  {
    icon: UploadFileOutlinedIcon,
    title: "Bring your career material together",
    body: "Upload your resume, target roles, notes, and job links so c2 can understand the career story you are trying to tell.",
    mockup: "profile",
  },
  {
    icon: AutoFixHighOutlinedIcon,
    title: "Get focused job-search guidance",
    body: "Turn scattered next steps into a simple plan for resumes, applications, networking, and interview preparation.",
    mockup: "coach",
  },
  {
    icon: FactCheckOutlinedIcon,
    title: "Improve every application",
    body: "Compare your experience with the role, spot missing signals, and shape stronger application material before you submit.",
    mockup: "match",
  },
  {
    icon: RecordVoiceOverOutlinedIcon,
    title: "Practice before it counts",
    body: "Prepare concise answers, rehearse likely questions, and keep your examples ready for recruiter screens and interviews.",
    mockup: "interview",
  },
];

const useCases = [
  {
    icon: ArticleOutlinedIcon,
    title: "Sharpen your resume",
    body: "Find weak bullets, surface stronger evidence, and tailor your story to each role without starting from a blank page.",
    note: "Make your experience easier to understand.",
  },
  {
    icon: WorkOutlineOutlinedIcon,
    title: "Track the hunt",
    body: "Keep roles, deadlines, contacts, and follow-ups in one place so no opportunity quietly slips away.",
    note: "Stay organized from search to offer.",
  },
  {
    icon: GroupsOutlinedIcon,
    title: "Interview with confidence",
    body: "Practice role-specific questions and turn your background into clear stories recruiters can remember.",
    note: "Show up prepared, not over-scripted.",
  },
];

const faqs = [
  {
    question: "What is c2?",
    answer:
      "c2 is an AI career coach from LMTech that helps job seekers organize their search, improve application material, and prepare for interviews.",
  },
  {
    question: "Is c2 only for people actively applying?",
    answer:
      "No. It is useful when you are exploring roles, refreshing your resume, preparing for a career move, or managing an active job search.",
  },
  {
    question: "Does c2 write applications for me?",
    answer:
      "c2 helps you clarify, tailor, and strengthen your own material. The goal is to make your experience easier to present, not replace your judgment.",
  },
  {
    question: "Can I use c2 before the full product is available?",
    answer:
      "The Start free button opens early access. We will use those requests to invite people as c2 becomes available.",
  },
  {
    question: "Who makes c2?",
    answer:
      "c2 is made by LMTech, short for Language Model Technology, a company building practical language-model products.",
  },
];

function ProductPreview({ type }) {
  if (type === "profile") {
    return (
      <MKBox sx={previewShellSx}>
        <MKBox sx={softGlowSx} />
        <MKBox sx={{ position: "relative", width: "78%", maxWidth: 420 }}>
          <MKBox sx={profileCardSx}>
            <MKTypography variant="caption" color="white" opacity={0.58}>
              Career profile
            </MKTypography>
            <MKTypography variant="h4" color="white" mt={1} mb={1}>
              Product Manager
            </MKTypography>
            <MKBox display="flex" gap={1} flexWrap="wrap">
              {["Resume", "Targets", "Notes"].map((item) => (
                <MKBox key={item} sx={pillSx}>
                  {item}
                </MKBox>
              ))}
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
    );
  }

  if (type === "coach") {
    return (
      <MKBox sx={previewShellSx}>
        <MKBox sx={softGlowSx} />
        <MKBox sx={{ position: "relative", width: "82%", maxWidth: 430 }}>
          <MKBox sx={toolbarSx}>
            {["Resume plan", "Job matches", "Interview prep"].map((item) => (
              <MKBox key={item} sx={outlinePillSx}>
                {item}
              </MKBox>
            ))}
          </MKBox>
          <MKBox sx={messageSx}>
            <AutoFixHighOutlinedIcon sx={{ color: productGreen, mr: 1 }} />
            <MKTypography variant="button" color="white" fontWeight="regular">
              Tighten your summary around measurable customer outcomes.
            </MKTypography>
          </MKBox>
        </MKBox>
      </MKBox>
    );
  }

  if (type === "match") {
    return (
      <MKBox sx={previewShellSx}>
        <MKBox sx={softGlowSx} />
        <MKBox sx={scoreCardSx}>
          <MKTypography variant="caption" color="white" opacity={0.58}>
            Role fit
          </MKTypography>
          <MKTypography variant="h2" color="white" mt={1}>
            82%
          </MKTypography>
          <MKBox sx={progressTrackSx}>
            <MKBox sx={progressFillSx} />
          </MKBox>
          <MKTypography variant="caption" color="white" opacity={0.72}>
            4 resume signals to strengthen
          </MKTypography>
        </MKBox>
      </MKBox>
    );
  }

  return (
    <MKBox sx={previewShellSx}>
      <MKBox sx={softGlowSx} />
      <MKBox sx={interviewCardSx}>
        <RecordVoiceOverOutlinedIcon sx={{ color: productBlue, fontSize: 34 }} />
        <MKBox>
          <MKTypography variant="h5" color="white">
            Interview practice
          </MKTypography>
          <MKTypography variant="caption" color="white" opacity={0.64}>
            Tell me about a project you led end to end.
          </MKTypography>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

function FeatureRow({ feature }) {
  const Icon = feature.icon;

  return (
    <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
      <Grid item xs={12} md={4}>
        <Stack direction={{ xs: "row", md: "column" }} spacing={2} alignItems="flex-start">
          <Icon sx={{ color: ink, fontSize: 28 }} />
          <MKBox>
            <MKTypography variant="h5" color="dark" mb={1}>
              {feature.title}
            </MKTypography>
            <MKTypography variant="body2" sx={{ color: muted, lineHeight: 1.75 }}>
              {feature.body}
            </MKTypography>
          </MKBox>
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <ProductPreview type={feature.mockup} />
      </Grid>
    </Grid>
  );
}

ProductPreview.propTypes = {
  type: PropTypes.oneOf(["profile", "coach", "match", "interview"]).isRequired,
};

FeatureRow.propTypes = {
  feature: PropTypes.shape({
    body: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    mockup: PropTypes.oneOf(["profile", "coach", "match", "interview"]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

function Home() {
  return (
    <C2Layout>
      {({ openEarlyAccess }) => (
        <MKBox component="main">
          <MKBox component="section" sx={heroSx}>
            <Container>
              <MKTypography variant="h1" color="dark" textAlign="center" sx={heroTitleSx}>
                Job hunting made{" "}
                <MKBox component="span" sx={gradientTextSx}>
                  simple
                </MKBox>
              </MKTypography>
              <MKTypography variant="body1" textAlign="center" sx={heroCopySx}>
                c2 is your AI career coach for resumes, applications, interview prep, and the
                everyday work of finding the next role.
              </MKTypography>
              <MKBox display="flex" justifyContent="center" mt={4}>
                <MKButton
                  variant="contained"
                  color="dark"
                  size="large"
                  onClick={openEarlyAccess}
                  sx={heroButtonSx}
                >
                  Start free
                </MKButton>
              </MKBox>
            </Container>
          </MKBox>

          <MKBox component="section" id="overview" py={{ xs: 7, md: 9 }}>
            <Container sx={{ maxWidth: "980px !important" }}>
              <MKTypography variant="h3" color="dark" textAlign="center" mb={{ xs: 6, md: 8 }}>
                Your AI-powered career coach
              </MKTypography>
              {featureRows.map((feature) => (
                <FeatureRow key={feature.title} feature={feature} />
              ))}
            </Container>
          </MKBox>

          <MKBox component="section" py={{ xs: 6, md: 8 }}>
            <Container sx={{ maxWidth: "980px !important" }}>
              <MKTypography variant="h3" color="dark" textAlign="center" mb={{ xs: 5, md: 7 }}>
                How people use c2
              </MKTypography>
              <Grid container spacing={{ xs: 4, md: 6 }}>
                {useCases.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Grid item xs={12} md={4} key={item.title}>
                      <Icon sx={{ color: "#6d7cff", fontSize: 30, mb: 2 }} />
                      <MKTypography variant="h6" color="dark" mb={1}>
                        {item.title}
                      </MKTypography>
                      <MKTypography variant="body2" sx={{ color: muted, lineHeight: 1.72 }} mb={2}>
                        {item.body}
                      </MKTypography>
                      <MKTypography
                        variant="caption"
                        sx={{ color: "#475467", fontStyle: "italic" }}
                      >
                        {item.note}
                      </MKTypography>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </MKBox>

          <MKBox component="section" sx={privacySectionSx}>
            <Container sx={{ maxWidth: "760px !important" }}>
              <MKTypography variant="h3" color="dark" textAlign="center" mb={2}>
                Your career data should stay yours.
              </MKTypography>
              <MKTypography
                variant="body2"
                textAlign="center"
                sx={{ color: muted, lineHeight: 1.75 }}
              >
                Resumes, target roles, notes, and interview answers can be deeply personal. c2 is
                designed around useful guidance, clear user control, and practical privacy defaults.
              </MKTypography>
              <MKBox sx={privacyOrbitSx} aria-hidden="true">
                <MKBox sx={orbitRingSx} />
                <MKBox sx={orbitRingSmallSx} />
                <MKBox sx={privacyCenterSx}>
                  <LockOutlinedIcon sx={{ color: "#667085", fontSize: 32 }} />
                </MKBox>
                <ShieldOutlinedIcon sx={privacyIconOneSx} />
                <CheckCircleOutlineOutlinedIcon sx={privacyIconTwoSx} />
                <ArticleOutlinedIcon sx={privacyIconThreeSx} />
              </MKBox>
            </Container>
          </MKBox>

          <MKBox component="section" id="faq" py={{ xs: 7, md: 9 }}>
            <Container sx={{ maxWidth: "920px !important" }}>
              <MKTypography variant="h3" color="dark" mb={1}>
                Want to learn more?
              </MKTypography>
              <MKTypography variant="body2" sx={{ color: muted }} mb={4}>
                Here are some answers to common questions.
              </MKTypography>
              {faqs.map((item) => (
                <Accordion key={item.question} disableGutters elevation={0} square sx={faqItemSx}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#4763ff" }} />}>
                    <MKTypography variant="button" color="text" fontWeight="regular">
                      {item.question}
                    </MKTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <MKTypography variant="body2" sx={{ color: muted, lineHeight: 1.75 }}>
                      {item.answer}
                    </MKTypography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Container>
          </MKBox>
        </MKBox>
      )}
    </C2Layout>
  );
}

const heroSx = {
  pt: { xs: 7, md: 10 },
  pb: { xs: 8, md: 10 },
};

const heroTitleSx = {
  fontSize: { xs: "3rem", sm: "4.25rem", md: "5.5rem" },
  lineHeight: 0.96,
  fontWeight: 700,
  letterSpacing: 0,
  maxWidth: 960,
  mx: "auto",
};

const gradientTextSx = {
  background: `linear-gradient(90deg, ${productGreen}, ${productBlue})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const heroCopySx = {
  color: muted,
  maxWidth: 620,
  mx: "auto",
  mt: 3,
  lineHeight: 1.7,
};

const heroButtonSx = {
  borderRadius: "8px",
  boxShadow: "none",
  minWidth: 134,
  py: 1.25,
  textTransform: "none",
  "&:hover": {
    boxShadow: "0 10px 26px rgba(17, 24, 39, 0.18)",
  },
};

const previewShellSx = {
  position: "relative",
  overflow: "hidden",
  minHeight: { xs: 230, sm: 280, md: 320 },
  borderRadius: "10px",
  background:
    "radial-gradient(circle at 18% 35%, rgba(85,217,139,0.22), transparent 28%), radial-gradient(circle at 82% 32%, rgba(249,115,22,0.18), transparent 27%), #050506",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
};

const softGlowSx = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(120deg, rgba(39,195,243,0.08), transparent 38%, rgba(85,217,139,0.08))",
};

const profileCardSx = {
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "14px",
  p: 3,
  backgroundColor: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(16px)",
};

const pillSx = {
  color: "white",
  fontSize: 12,
  lineHeight: 1,
  px: 1.25,
  py: 0.8,
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.16)",
  backgroundColor: "rgba(255,255,255,0.08)",
};

const toolbarSx = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
  gap: 1,
  mb: 2,
};

const outlinePillSx = {
  color: "white",
  fontSize: 12,
  textAlign: "center",
  py: 1,
  px: 1.25,
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.18)",
};

const messageSx = {
  display: "flex",
  alignItems: "center",
  p: 2,
  borderRadius: "10px",
  backgroundColor: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const scoreCardSx = {
  position: "relative",
  width: 220,
  p: 3,
  borderRadius: "14px",
  backgroundColor: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.14)",
  transform: "rotate(-4deg)",
};

const progressTrackSx = {
  width: "100%",
  height: 8,
  my: 2,
  borderRadius: "999px",
  backgroundColor: "rgba(255,255,255,0.14)",
  overflow: "hidden",
};

const progressFillSx = {
  width: "82%",
  height: "100%",
  borderRadius: "999px",
  background: `linear-gradient(90deg, ${productGreen}, ${productBlue})`,
};

const interviewCardSx = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: 2,
  width: "78%",
  maxWidth: 390,
  p: 2.5,
  borderRadius: "999px",
  backgroundColor: "rgba(10, 16, 26, 0.78)",
  border: "1px solid rgba(255,255,255,0.16)",
};

const privacySectionSx = {
  py: { xs: 8, md: 11 },
  mt: { xs: 3, md: 6 },
  backgroundColor: "#f7f8fb",
};

const privacyOrbitSx = {
  position: "relative",
  width: 230,
  height: 230,
  mx: "auto",
  mt: 6,
};

const orbitRingSx = {
  position: "absolute",
  inset: 10,
  borderRadius: "50%",
  border: "1px solid rgba(85,217,139,0.32)",
};

const orbitRingSmallSx = {
  position: "absolute",
  inset: 46,
  borderRadius: "50%",
  border: "1px solid rgba(39,195,243,0.2)",
};

const privacyCenterSx = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 76,
  height: 76,
  borderRadius: "50%",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 16px 34px rgba(15,23,42,0.12)",
};

const privacyIconOneSx = {
  position: "absolute",
  left: 18,
  bottom: 48,
  color: "#98a2b3",
};

const privacyIconTwoSx = {
  position: "absolute",
  right: 34,
  top: 28,
  color: "#98a2b3",
};

const privacyIconThreeSx = {
  position: "absolute",
  right: 20,
  bottom: 52,
  color: "#98a2b3",
};

const faqItemSx = {
  borderTop: "1px solid #e5e7eb",
  "&:last-of-type": {
    borderBottom: "1px solid #e5e7eb",
  },
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    px: 0,
    minHeight: 56,
  },
  "& .MuiAccordionDetails-root": {
    px: 0,
    pt: 0,
    pb: 2.5,
  },
};

export default Home;
