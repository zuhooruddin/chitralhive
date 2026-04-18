/**
 * Trims homepage getStaticProps payload for __NEXT_DATA__ (128 kB guideline).
 * Field lists match what Section1 / ProductCard20 / HomeBlogCarousel / layout read.
 */

const MAX_PRODUCT_DESC = 400;
const MAX_MAIN_PRODUCTS = 20;
const MAX_SECTION_PRODUCTS = 20;
const MAX_FEATURED_CATALOG = 36;
const MAX_REVIEWS = 450;
const MAX_BLOG_EXCERPT = 360;
const MAX_SLIDES = 10;

const PRODUCT_CARD_KEYS = [
  "id",
  "name",
  "slug",
  "image",
  "salePrice",
  "discount",
  "mrp",
  "sku",
  "stock",
  "isNewArrival",
  "isFeatured",
  "description",
  "categoryName",
  "reviews",
];

function trimStr(s, max) {
  if (typeof s !== "string") return s;
  return s.length <= max ? s : s.slice(0, max);
}

export function slimHomepageProduct(p) {
  if (!p || typeof p !== "object") return p;
  const o = {};
  for (const k of PRODUCT_CARD_KEYS) {
    if (p[k] !== undefined && p[k] !== null) o[k] = p[k];
  }
  if (typeof o.description === "string") {
    o.description = trimStr(o.description, MAX_PRODUCT_DESC);
  }
  return o;
}

export function slimProductArray(arr, limit) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, limit).map(slimHomepageProduct);
}

/** ProductReviews: ProductCard20 only needs Reviews[].itemid_id + rating */
export function slimProductReviewsForHome(raw) {
  if (!raw || typeof raw !== "object") return { Reviews: [] };
  const Reviews = Array.isArray(raw.Reviews) ? raw.Reviews : [];
  return {
    Reviews: Reviews.slice(0, MAX_REVIEWS).map((r) => ({
      itemid_id: r.itemid_id,
      rating: r.rating,
    })),
  };
}

export function slimBlogPostsForHome(posts, maxPosts) {
  if (!Array.isArray(posts)) return [];
  return posts.slice(0, maxPosts).map((post) => {
    if (!post || !post.slug) return null;
    const rawDesc = post.description || post.excerpt || "";
    const description =
      typeof rawDesc === "string" ? trimStr(rawDesc, MAX_BLOG_EXCERPT) : rawDesc;
    return {
      slug: post.slug,
      title: post.title,
      description,
      imgUrl: post.imgUrl || post.featured_image_url || "",
      publishedTime: post.publishedTime,
      createdAt: post.createdAt,
      section: post.section || post.category,
      author_name: post.author_name,
      author: post.author,
      author_image: post.author_image,
      author_avatar_url: post.author_avatar_url,
      author_image_url: post.author_image_url,
      views: post.views,
      view_count: post.view_count,
      page_views: post.page_views,
      read_count: post.read_count,
    };
  }).filter(Boolean);
}

const GENERAL_ROW_KEYS = [
  "site_name",
  "site_description",
  "site_metatitle",
  "site_logo",
  "whatsapp",
  "currency",
  "top_bar_left_phone",
  "top_bar_left_email",
];

export function slimGeneralSettings(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map((row) => {
    if (!row || typeof row !== "object") return row;
    const o = {};
    for (const k of GENERAL_ROW_KEYS) {
      if (row[k] !== undefined) o[k] = row[k];
    }
    return o;
  });
}

const FOOTER_KEYS = [
  "footer_fourth_column_content",
  "footer_logo",
  "footer_description",
  "column_two_heading",
  "column_two_links",
  "column_three_heading",
  "column_three_links",
  "footer_fourth_column_heading",
  "facebook",
  "instagram",
  "youtube",
  "twitter",
];

export function slimFooterData(fd) {
  if (!fd || typeof fd !== "object") return fd;
  const o = {};
  for (const k of FOOTER_KEYS) {
    if (fd[k] !== undefined) o[k] = fd[k];
  }
  return o;
}

const SECTION_CFG_KEYS = [
  "id",
  "sequenceNo",
  "type",
  "parent",
  "category_name",
  "category_slug",
  "category_id_id",
  "title",
  "name",
  "image",
  "description",
  "link",
  "url",
  "slug",
];

export function slimSectionConfig(obj) {
  if (!obj || typeof obj !== "object") return obj;
  const o = {};
  for (const k of SECTION_CFG_KEYS) {
    if (obj[k] !== undefined) o[k] = obj[k];
  }
  if (typeof o.description === "string") {
    o.description = trimStr(o.description, MAX_PRODUCT_DESC);
  }
  return o;
}

export function slimSectionConfigNullable(obj) {
  return obj ? slimSectionConfig(obj) : null;
}

export function slimSubcategoryList(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map((r) => slimSectionConfig(r));
}

/** Section10: CategoryCard1 only needs id, name, slug, image */
export function slimProductBundles(pb) {
  const raw = Array.isArray(pb?.data)
    ? pb.data
    : Array.isArray(pb)
      ? pb
      : [];
  return {
    data: raw.slice(0, 24).map((item) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.image,
    })),
  };
}

export function slimSliderList(list) {
  if (!Array.isArray(list)) return [];
  return list.slice(0, MAX_SLIDES).map((s) => ({
    id: s.id,
    slug: s.slug,
    image: s.image,
  }));
}
