import Container from "@mui/material/Container";

import C2Layout from "components/C2Layout";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Plans() {
  return (
    <C2Layout>
      <MKBox component="main">
        <Container sx={{ py: { xs: 10, md: 16 }, textAlign: "center" }}>
          <MKTypography variant="h1" color="dark" sx={titleSx}>
            c2 Plans
          </MKTypography>
          <MKTypography variant="body1" sx={copySx}>
            c2 plans are coming soon. This route is ready for the pricing and access page.
          </MKTypography>
        </Container>
      </MKBox>
    </C2Layout>
  );
}

const titleSx = {
  fontSize: { xs: "3.5rem", md: "5.5rem" },
  lineHeight: 1,
  letterSpacing: 0,
};

const copySx = {
  color: "#667085",
  maxWidth: 560,
  mx: "auto",
  mt: 3,
  lineHeight: 1.75,
};

export default Plans;
