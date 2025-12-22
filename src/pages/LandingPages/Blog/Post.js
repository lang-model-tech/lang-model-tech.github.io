// react-router components
import { useParams, Link } from "react-router-dom";

// react
import { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";

// Material Kit components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Data
import { getPost, getSuggestions } from "./postData";
import { marked } from "marked";

function PostSuggestion({ post }) {
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
      <CardMedia image={post.image} title={post.title} sx={{ height: 160 }} />
      <CardContent>
        <MKBox display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Chip label={post.category} size="small" color="info" />
          <MKTypography variant="caption" color="text">
            {post.date}
          </MKTypography>
        </MKBox>
        <MKTypography variant="h6" color="dark" gutterBottom>
          {post.title}
        </MKTypography>
        <MKTypography variant="body2" color="text">
          {post.tagline}
        </MKTypography>
      </CardContent>
    </Card>
  );
}

function Post() {
  const { category, slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState("");
  const [toc, setToc] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function loadMarkdown() {
      try {
        setLoading(true);
        const result = await getPost(category, slug);
        if (!result) {
          if (isActive) {
            setError("We couldn't find this post.");
            setPost(null);
            setContent("");
            setToc([]);
          }
          return;
        }

        const table = [];
        const renderer = new marked.Renderer();
        const createSlugger = () => {
          const Candidate = marked.Slugger;
          if (typeof Candidate === "function") return new Candidate();
          return {
            slug: (text) =>
              (text || "")
                .toString()
                .trim()
                .toLowerCase()
                .replace(/[^\w]+/g, "-")
                .replace(/^-+|-+$/g, ""),
          };
        };
        const slugger = createSlugger();
        renderer.heading = (text, level, raw, sluggerInstance = slugger) => {
          const id = sluggerInstance.slug(raw);
          if (level === 2) {
            table.push({ id, text: raw });
          }
          return `<h${level} id="${id}">${text}</h${level}>`;
        };

        let html = "";
        try {
          html = marked.parse(result.content || "", {
            renderer,
            headerIds: true,
            mangle: false,
            slugger,
          });
        } catch (parseErr) {
          if (isActive) {
            setError("We couldn't render this post right now.");
            setPost(null);
            setContent("");
            setToc([]);
            setSuggestions([]);
          }
          return;
        }

        const suggested = await getSuggestions(category, slug);

        if (isActive) {
          setPost(result.meta);
          setContent(html);
          setToc(table);
          setSuggestions(suggested);
          setError(null);
        }
      } catch (err) {
        console.log(err)
        if (isActive) {
          setError("We couldn't load this post right now.");
          setPost(null);
          setContent("");
          setToc([]);
          setSuggestions([]);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadMarkdown();
    return () => {
      isActive = false;
    };
  }, [category, slug]);

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

      <MKBox pt={{ xs: 12, md: 14 }} pb={6} px={1} bgColor="white">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <MKBox
                position="sticky"
                top="110px"
                component="nav"
                aria-label="Table of contents"
                sx={{ borderLeft: 1, borderColor: "grey.200", pl: 2 }}
              >
                <MKTypography variant="button" color="dark" mb={2} display="block">
                  Table of contents
                </MKTypography>
                {toc.length === 0 ? (
                  <MKTypography variant="body2" color="text">
                    No sections yet.
                  </MKTypography>
                ) : (
                  toc.map((section) => (
                    <MKTypography
                      key={section.id}
                      component="a"
                      href={`#${section.id}`}
                      variant="body2"
                      color="text"
                      display="block"
                      mb={1}
                      sx={{ textDecoration: "none", "&:hover": { color: "info.main" } }}
                    >
                      {section.text}
                    </MKTypography>
                  ))
                )}
              </MKBox>
            </Grid>

            <Grid item xs={12} md={9}>
              <MKBox maxWidth={880} mx="auto">
                {loading && !post && (
                  <MKBox display="flex" justifyContent="center" py={4}>
                    <CircularProgress color="secondary" />
                  </MKBox>
                )}
                {!loading && !post && error && (
                  <MKTypography variant="body1" color="error">
                    {error}
                  </MKTypography>
                )}
                {post && (
                  <>
                    <MKTypography variant="h2" color="dark" mb={1}>
                      {post.title}
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={1}>
                      {post.date} - {post.tagline}
                    </MKTypography>
                    <MKTypography variant="button" color="dark" mb={3} display="block">
                      By {post.author}
                    </MKTypography>

                    <Card sx={{ mb: 4, boxShadow: ({ boxShadows: { lg } }) => lg }}>
                      <CardMedia component="img" src={post.image} alt={post.title} />
                    </Card>

                    {loading ? (
                      <MKBox display="flex" justifyContent="center" py={4}>
                        <CircularProgress color="secondary" />
                      </MKBox>
                    ) : error ? (
                      <MKTypography variant="body1" color="error">
                        {error}
                      </MKTypography>
                    ) : (
                      <MKBox
                        sx={{
                          "& h2": { marginTop: "32px", marginBottom: "12px" },
                          "& p": { marginBottom: "16px" },
                        }}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    )}
                  </>
                )}
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <MKBox bgColor="grey.50" py={6} px={1}>
        <Container>
          <MKTypography variant="h4" color="dark" mb={3}>
            You might also like
          </MKTypography>
          <Grid container spacing={3}>
            {suggestions.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <PostSuggestion post={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>

      <MKBox pt={6} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Post;
