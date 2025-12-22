const postPaths = [
  "/posts/research/e2-volve.md",
  "/posts/research/adaptive-vs-static.md",
  "/posts/research/feedback-loops-motivation.md",
  "/posts/news/pilot-cohort-kickoff.md",
  "/posts/news/analytics-surface-friction.md",
];

const imageMap = {
  blog2: require("assets/images/examples/blog2.jpg"),
  "testimonial-6-3": require("assets/images/examples/testimonial-6-3.jpg"),
  "blog-9-4": require("assets/images/examples/blog-9-4.jpg"),
  "testimonial-6-2": require("assets/images/examples/testimonial-6-2.jpg"),
};

const postCache = new Map();

function parseFrontmatter(markdown = "") {
  if (!markdown.startsWith("---")) {
    return { data: {}, content: markdown.trim() };
  }

  const end = markdown.indexOf("\n---");
  if (end === -1) {
    return { data: {}, content: markdown.trim() };
  }

  const raw = markdown.slice(3, end).trim();
  const content = markdown.slice(end + 4).trim();

  const data = {};
  raw.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;
    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^"(.*)"$/, "$1");
    data[key] = value;
  });

  return { data, content };
}

function deriveMeta(mdPath, frontmatter = {}) {
  const parts = mdPath.split("/");
  const slugWithExt = parts[parts.length - 1];
  const slug = slugWithExt.replace(".md", "");
  const category = parts[parts.length - 2];

  const imageKey = frontmatter.image || slug;
  const image = imageMap[imageKey] || imageMap[slug] || frontmatter.image || "";

  return {
    title: frontmatter.title || slug,
    category: frontmatter.category || category,
    categorySlug: frontmatter.categorySlug || category,
    slug: frontmatter.slug || slug,
    tagline: frontmatter.tagline || "",
    author: frontmatter.author || "",
    date: frontmatter.date || "",
    image,
    mdPath,
  };
}

async function fetchPost(mdPath) {
  const resolvedPath = mdPath.startsWith("http")
    ? mdPath
    : `${process.env.PUBLIC_URL || ""}${mdPath}`;
  const keysToCheck = [mdPath, resolvedPath];
  const cached = keysToCheck.map((k) => postCache.get(k)).find(Boolean);
  if (cached) return cached;

  const res = await fetch(resolvedPath);
  if (!res.ok) return null;

  const markdown = await res.text();
  const { data, content } = parseFrontmatter(markdown);
  const meta = deriveMeta(mdPath, data);
  const payload = { meta, content };
  postCache.set(mdPath, payload);
  postCache.set(resolvedPath, payload);
  return payload;
}

export async function getAllPosts() {
  const results = await Promise.all(postPaths.map(fetchPost));
  return results.filter(Boolean).map(({ meta }) => meta);
}

export async function getPost(category, slug) {
  const mdPath = `/posts/${category}/${slug}.md`;
  if (!postPaths.includes(mdPath)) return null;
  return fetchPost(mdPath);
}

export async function getPostsByCategory(category) {
  const filtered = postPaths.filter((path) => path.includes(`/posts/${category}/`));
  const results = await Promise.all(filtered.map(fetchPost));
  return results.filter(Boolean).map(({ meta }) => meta);
}

export async function getSuggestions(category, slug, limit = 3) {
  const posts = await getPostsByCategory(category);
  return posts.filter((post) => post.slug !== slug).slice(0, limit);
}
