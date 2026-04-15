const fallbackApiBase = "https://api.chitralhive.com/";

export const getBackendApiBase = () => {
  const apiBase = process.env.NEXT_PUBLIC_BACKEND_API_BASE || fallbackApiBase;
  return apiBase.endsWith("/") ? apiBase : `${apiBase}/`;
};

export const normalizeBlogPost = (post) => {
  if (!post) return null;

  const tags =
    Array.isArray(post.tags_list) && post.tags_list.length > 0
      ? post.tags_list
      : String(post.tags || "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);

  return {
    ...post,
    description: post.excerpt || "",
    metaTitle: post.meta_title || post.title,
    metaDescription: post.meta_description || post.excerpt || "",
    imgUrl: post.featured_image_url || "",
    publishedTime: post.published_at || post.created_at || null,
    modifiedTime: post.updated_at || post.published_at || post.created_at || null,
    section: post.category || "Blog",
    tags,
    createdAt: post.created_at || post.published_at || null,
  };
};

export const fetchPublishedBlogs = async () => {
  const response = await fetch(`${getBackendApiBase()}getPublishedBlogs`);

  if (!response.ok) {
    throw new Error(`Unable to load blogs: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data.map(normalizeBlogPost).filter(Boolean) : [];
};

const DEFAULT_BLOG_PAGE_SIZE = 12;

export const fetchPublishedBlogsPaged = async (page = 1, pageSize = DEFAULT_BLOG_PAGE_SIZE) => {
  const params = new URLSearchParams({
    page: String(Math.max(1, page)),
    page_size: String(pageSize),
  });
  const response = await fetch(`${getBackendApiBase()}getPublishedBlogs?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Unable to load blogs: ${response.status}`);
  }

  const data = await response.json();
  const results = Array.isArray(data.results)
    ? data.results.map(normalizeBlogPost).filter(Boolean)
    : [];
  return {
    count: typeof data.count === "number" ? data.count : 0,
    results,
    page: typeof data.page === "number" ? data.page : page,
    pageSize: typeof data.page_size === "number" ? data.page_size : pageSize,
  };
};

export const fetchPublishedBlog = async (slug) => {
  const response = await fetch(`${getBackendApiBase()}getPublishedBlog?slug=${encodeURIComponent(slug)}`);

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`Unable to load blog: ${response.status}`);
  }

  const data = await response.json();
  return normalizeBlogPost(data);
};
