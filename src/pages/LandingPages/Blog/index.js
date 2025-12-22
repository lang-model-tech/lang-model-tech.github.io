/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

// react-router components
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import heroImage from "assets/images/bg3.jpg";
import { getPostsByCategory } from "./postData";
import PropTypes from "prop-types";

function BlogCard({ post }) {
  return (
    <Card
      component={Link}
      to={`/blog/${post.categorySlug}/${post.slug}`}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        boxShadow: ({ boxShadows: { md } }) => md,
        transition: "transform 200ms ease, box-shadow 200ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        },
      }}
    >
      <CardMedia image={post.image} title={post.title} sx={{ height: 220 }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <MKBox display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Chip label={post.category} color="info" size="small" />
          <MKTypography variant="caption" color="text">
            {post.date}
          </MKTypography>
        </MKBox>
        <MKTypography variant="h5" color="dark" gutterBottom>
          {post.title}
        </MKTypography>
        <MKTypography variant="body2" color="text" mb={2}>
          {post.tagline}
        </MKTypography>
        <MKBox display="flex" alignItems="center" gap={1}>
          <Avatar alt={post.author} sx={{ width: 32, height: 32 }}>
            {post.author.charAt(0)}
          </Avatar>
          <MKTypography variant="button" color="dark">
            {post.author}
          </MKTypography>
        </MKBox>
      </CardContent>
    </Card>
  );
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    categorySlug: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number])
      .isRequired,

    category: PropTypes.string.isRequired,
    tagline: PropTypes.string,
  }).isRequired,
};

function Section({ title, posts }) {
  return (
    <MKBox component="section" py={4}>
      <MKTypography variant="h4" color="dark" mb={3}>
        {title}
      </MKTypography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.title}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
    </MKBox>
  );
}

Section.propTypes = {
  posts: PropTypes.shape([
    {
      author: PropTypes.string.isRequired,
      categorySlug: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number])
        .isRequired,

      category: PropTypes.string.isRequired,
      tagline: PropTypes.string,
    },
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

function Blog() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [newsPosts, setNewsPosts] = useState([]);
  const [researchPosts, setResearchPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      try {
        setLoading(true);
        const [research, news] = await Promise.all([
          getPostsByCategory("research"),
          getPostsByCategory("news"),
        ]);

        if (!active) return;

        const featured = research.find((p) => p.slug === "e2-volve") || research[0] || null;

        setFeaturedPost(featured);
        setNewsPosts(news);
        setResearchPosts(research.filter((post) => post.slug !== "e2-volve"));
        setError(null);
      } catch (err) {
        if (active) {
          console.log(err);
          setError("We couldn't load the blog right now.");
          setFeaturedPost(null);
          setNewsPosts([]);
          setResearchPosts([]);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadPosts();
    return () => {
      active = false;
    };
  }, []);

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
      <MKBox bgColor="white">
        <MKBox
          minHeight="26rem"
          width="100%"
          display="flex"
          alignItems="center"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.7)
              )}, url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <MKTypography variant="h1" color="white" mb={1}>
              E2-volve
            </MKTypography>
            <MKTypography variant="h4" color="white" opacity={0.8} maxWidth={620}>
              The technology powering adaptive, human-in-the-loop learning - with faster resources,
              great analytics, and real-time feedback between tutors and students.
            </MKTypography>
          </Container>
        </MKBox>

        <Container sx={{ py: { xs: 6, md: 8 } }}>
          {error && (
            <MKTypography variant="body1" color="error" mb={5}>
              {error}
            </MKTypography>
          )}
          {!error && featuredPost && !loading && (
            <MKBox component="section" mb={5}>
              <MKTypography variant="h4" color="dark" mb={3}>
                Featured
              </MKTypography>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                  <BlogCard post={featuredPost} />
                </Grid>
              </Grid>
            </MKBox>
          )}

          {!error && !loading && (
            <>
              <Section title="News" posts={newsPosts} />
              <Section title="Research" posts={researchPosts} />
            </>
          )}
          {loading && (
            <MKTypography variant="body2" color="text" my={4}>
              Loading posts...
            </MKTypography>
          )}
        </Container>

        <MKBox pt={6} px={1} mt={3}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Blog;
