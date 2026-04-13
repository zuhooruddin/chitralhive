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

export const fetchPublishedBlog = async (slug) => {
  const response = await fetch(`${getBackendApiBase()}getPublishedBlog?slug=${encodeURIComponent(slug)}`);

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`Unable to load blog: ${response.status}`);
  }

  const data = await response.json();
  return normalizeBlogPost(data);
};
