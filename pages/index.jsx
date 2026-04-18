import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import StructuredData from "components/schema/StructuredData";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import apiNav from "utils/api/market-2";
import api from "utils/api/fashion-shop-2";
import LazySection from "components/LazySection";
import { fetchPublishedBlogsPaged } from "utils/api/blog";
import {
  slimBlogPostsForHome,
  slimFooterData,
  slimGeneralSettings,
  slimNavCategories,
  slimProductArray,
  slimProductBundles,
  slimProductReviewsForHome,
  slimSectionConfigNullable,
  slimSliderList,
  slimSubcategoryList,
} from "@/utils/homePagePropsSerializer";

const HOME_BLOG_PREVIEW_COUNT = 8;

const HomeBlogCarousel = dynamic(() => import("components/HomeBlogCarousel"), {
  ssr: false,
  loading: () => null,
});

const AdBanner = dynamic(() => import("@/components/AdBanner"), {
  ssr: false,
  loading: () => null,
});
import {
  DEFAULT_META_DESCRIPTION,
  SHILAJIT_KEYWORD_PHRASES,
} from "utils/seoConstants";

// Lazy load heavy components for better code splitting
// Only Section1 needs SSR (above the fold), others can load client-side
// Grouped imports to reduce chunk fragmentation
const Section1 = dynamic(() => import("pages-sections/market-2/Section1"), { 
  ssr: true,
  loading: () => null, // No loading indicator for above-the-fold content
});

// Group frequently used sections together to reduce chunks
const Section2 = dynamic(() => import("pages-sections/market-2/Section2"), { 
  ssr: false,
  loading: () => null,
});
const Section3 = dynamic(() => import("pages-sections/market-2/Section3"), { 
  ssr: false,
  loading: () => null,
});
const Section4 = dynamic(() => import("pages-sections/market-2/Section4"), { 
  ssr: false,
  loading: () => null,
});
const Section5 = dynamic(() => import("pages-sections/market-2/Section5"), { 
  ssr: false,
  loading: () => null,
});
const Section6 = dynamic(() => import("pages-sections/market-2/Section6"), { 
  ssr: false,
  loading: () => null,
});
const Section7 = dynamic(() => import("pages-sections/market-2/Section7"), { 
  ssr: false,
  loading: () => null,
});
const Section9 = dynamic(() => import("pages-sections/market-2/Section9"), { 
  ssr: false,
  loading: () => null,
});
const Section10 = dynamic(() => import("pages-sections/market-2/Section10"), { 
  ssr: false,
  loading: () => null,
});
const Section12 = dynamic(() => import("pages-sections/market-2/Section12"), { 
  ssr: false,
  loading: () => null,
});

const IndexPage = (props) => {
  

  const { navCategories } = props;

  const theme = useTheme();
  
  // Memoize expensive computations
  const GeneralSettingMemo = useMemo(() => props.GeneralSetting, [props.GeneralSetting]);

  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const fluidSlot = process.env.NEXT_PUBLIC_ADSENSE_FLUID_LAYOUTKEY_SLOT;
  const showFluidAd = Boolean(adsenseClient && fluidSlot);

  return (
    <ShopLayout1
      topbarBgColor={theme.palette.grey[900]}
      navCategories={navCategories}
      generalSetting={GeneralSettingMemo}
      footerData={props.footerData || null}
    >
      <SEO
        title={GeneralSettingMemo&&GeneralSettingMemo.length>0?GeneralSettingMemo[0].site_name:'Discover Authentic Chitrali Products - Chitral Hive'}
        description={GeneralSettingMemo&&GeneralSettingMemo.length>0?GeneralSettingMemo[0].site_description:DEFAULT_META_DESCRIPTION}
        metaTitle={GeneralSettingMemo&&GeneralSettingMemo.length>0?GeneralSettingMemo[0].site_metatitle:'Chitral Hive - Authentic Chitrali Dry Fruits, Honey & Traditional Products Online Pakistan'}
        keywords={`buy Chitrali dry fruits online, Chitrali almonds Pakistan, Chitrali apricots online, Chitrali honey price, Chitrali walnuts, buy dry fruits online Pakistan, Chitrali products online, authentic Chitrali honey, Chitrali dry fruits delivery, Chitrali nuts online, Chitrali recipes, Chitrali culture, Chitrali traditional food, Chitrali herbs, Chitrali spices, Chitrali handicrafts, KPK dry fruits, online dry fruits Pakistan, premium dry fruits Pakistan, organic Chitrali products, ${SHILAJIT_KEYWORD_PHRASES}`}
        canonical="https://chitralhive.com"
      />
      <StructuredData data={props.homeStructuredData} />
      <Box bgcolor="#F6F6F6">
        {/* Main H1 heading for SEO - visually hidden but accessible */}
        <Box
          component="h1"
          sx={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          {GeneralSettingMemo&&GeneralSettingMemo.length>0 
            ? `${GeneralSettingMemo[0].site_name} - Discover Authentic Chitrali Products Online`
            : 'Chitral Hive - Discover Authentic Chitrali Products Online in Pakistan'}
        </Box>
        <Section1
          data1={props.Section1SequenceData}
          data2={props.Section1SequenceData2 || []}
          slidersListLocal={props.slidersListLocal}
        />

        {showFluidAd && (
          <LazySection
            fallback={null}
            rootMargin="400px 0px"
          >
            <AdBanner
              slot={fluidSlot}
              format="fluid"
              sx={{ maxWidth: 900, mx: "auto", mt: { xs: 2, sm: 3 } }}
            />
          </LazySection>
        )}

        <LazySection
          fallback={
            <Box
              sx={{
                px: { xs: 1, sm: 2 },
                // Smaller reserve than before: large blank bands under the hero looked like a broken ad.
                minHeight: { xs: 220, sm: 260, md: 300 },
              }}
              aria-hidden="true"
            />
          }
          rootMargin="500px 0px"
        >
          <Section9
            data={props.ProductReviews}
            products={props.featuredCatalog || []}
          />
        </LazySection>
        {(props.Section2SequenceData || props.Section2SequenceData2 || props.Section2SequenceData3 || 
          props.Section2SequenceData4 || props.Section2SequenceData5 || props.Section2SequenceData6) && (
          <LazySection minHeight={380}>
            <Box sx={{ my: { xs: -2, sm: -4, md: -7 } }}>
              <Section3
                data1={props.Section2SequenceData || []}
                data2={props.Section2SequenceData2 || []}
                data3={props.Section2SequenceData3 || []}
                data4={props.Section2SequenceData4 || []}
                data5={props.Section2SequenceData5 || []}
                data6={props.Section2SequenceData6 || []}
              />
            </Box>
          </LazySection>
        )}
        {/* <LazySection>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
            <Section2 data={props.brandbundles || []} />
          </Box>
        </LazySection> */}
                <LazySection minHeight={520}>
          <Box sx={{ mt: { xs: 2, sm: 3, md: 5 } }}>
            <Section5
              products={props.products || []}
              data={props.SectionSequenceOrdera || []}
              SectionName={props.Section1Name || ""}
              slug={props.slug || ""}
              productreviews={props.ProductReviews} 

            />
          </Box>
        </LazySection>
        <LazySection minHeight={420}>
          <Box sx={{ my: 0 }}>
            <Section4
              data1={props.Section3SequenceData || []}
              data2={props.Section3SequenceData2 || []}
              data3={props.Section3SequenceData3 || []}
              userWishlist={[]}
            />
          </Box>
        </LazySection>
        <LazySection minHeight={520}>
          <Section12
            products={props.product || []}
            data={props.SectionSequenceOrdera2 || []}
            Section2Name={props.Section2Name || ""}
            slug={props.slug2 || ""}
            productreviews={props.ProductReviews} 

          />
        </LazySection>
        <LazySection minHeight={320}>
          <Box sx={{ my: { xs: -2, sm: -4, md: -7 } }}>
            <Section6
              data1={props.Section4SequenceData || []}
              data2={props.Section4SequenceData2 || []}
            />
          </Box>
        </LazySection>
     
        {props.productbundles.length > 0 && (
          <LazySection minHeight={260}>
            <Box sx={{ mt: { xs: 2, sm: 2.5, md: 3 }, display: "flex", justifyContent: "center" }}>
              <Section10 data={props.productbundles} />
            </Box>
          </LazySection>
        )}

        <LazySection minHeight={320}>
          <Box sx={{ my: { xs: -2, sm: -3, md: -4 } }}>
            <Section7 data1={props.Section5SequenceData || []} />
          </Box>
        </LazySection>
        {/* <Section13 products={props.sect13products || []} /> */}
        {/* <Section8 /> */}
      </Box>

      <HomeBlogCarousel posts={props.homeBlogPosts || []} />

      {/* <Setting /> */}
    </ShopLayout1>
  );
};

// Memoize component to prevent unnecessary re-renders
const MemoizedIndexPage = React.memo(IndexPage);
MemoizedIndexPage.displayName = 'IndexPage';

// Use getStaticProps with ISR for better performance - pages are cached and regenerated periodically
export async function getStaticProps(context) {
  const { getHomePageStructuredData } = await import("@/utils/homePageStructuredData");
  try {
    // Parallelize all independent API calls for better performance
    const [
      navCategories,
      productbundles,
      featuredCatalog,
      individulorder,
      slidersListLocal,
      ProductReviews,
      GeneralSetting,
      footerData,
      blogHomePreview,
    ] = await Promise.all([
      apiNav.getNavCategories(),
      api.getProductBundles(),
      api.getLatestProducts(),
      api.getindvidualorderbox(),
      api.getSlidersFromLocal(),
      apiNav.getReviews(),
      api.getGeneralSetting(),
      api.getFooterItem(),
      fetchPublishedBlogsPaged(1, HOME_BLOG_PREVIEW_COUNT, "").catch(() => ({
        results: [],
        count: 0,
      })),
    ]);

  ////////////////////////Section 1/////////////////////////
  const Section1SequenceData = individulorder.find(
    (obj) => obj.sequenceNo == 1 && obj.type == "box"
  );


  const Section1SequenceData2 = individulorder.find(
    (obj) => obj.sequenceNo == 2 && obj.type == "box"
  );

  ////////////////////////Section 2/////////////////////////
  const Section2SequenceData = individulorder.find(
    (obj) => obj.sequenceNo == 3 && obj.type == "box"
  );

  const Section2SequenceData2 = individulorder.find(
    (obj) => obj.sequenceNo == 4 && obj.type == "box"
  );
  const Section2SequenceData3 = individulorder.find(
    (obj) => obj.sequenceNo == 5 && obj.type == "box"
  );
  const Section2SequenceData4 = individulorder.find(
    (obj) => obj.sequenceNo == 6 && obj.type == "box"
  );
  const Section2SequenceData5 = individulorder.find(
    (obj) => obj.sequenceNo == 7 && obj.type == "box"
  );
  const Section2SequenceData6 = individulorder.find(
    (obj) => obj.sequenceNo == 8 && obj.type == "box"
  );

  ////////////////////////Section 3/////////////////////////
  const Section3SequenceData = individulorder.find(
    (obj) => obj.sequenceNo == 9 && obj.type == "box"
  );
  const Section3SequenceData2 = individulorder.find(
    (obj) => obj.sequenceNo == 10 && obj.type == "box"
  );
  const Section3SequenceData3 = individulorder.find(
    (obj) => obj.sequenceNo == 11 && obj.type == "box"
  );
  ////////////////////////Section 4/////////////////////////
  const Section4SequenceData = individulorder.find(
    (obj) => obj.sequenceNo == 12 && obj.type == "box"
  );
  const Section4SequenceData2 = individulorder.find(
    (obj) => obj.sequenceNo == 13 && obj.type == "box"
  );
  ////////////////////////Section 5/////////////////////////
  const Section5SequenceData = individulorder.find(
    (obj) => obj.sequenceNo == 14 && obj.type == "box"
  );

  ////////////////////////Section Sequence Order 1/////////////////////////
  const SectionSequenceOrder = individulorder.find(
    (obj) => obj.type == "section" && obj.sequenceNo == 1
  );
  // const Section1Name=SectionSequenceOrder.category_name;
  const Section1Name = SectionSequenceOrder?.category_name || "";

  const SectionSequenceOrdera = SectionSequenceOrder
    ? individulorder.filter(
        (obj) =>
          obj.type == "section_subcategory" &&
          obj.parent == SectionSequenceOrder.category_id_id
      )
    : [];

  ////////////////////////Section Sequence Order 2/////////////////////////

  const SectionSequence = individulorder.find(
    (ob) => ob.type == "section" && ob.sequenceNo == 2
  );
  // const Section2Name=SectionSequence.category_name || "";

  const Section2Name = SectionSequence?.category_name || "";

  const Section2id = SectionSequence?.category_id_id || "";

  const SectionSequenceOrdera2 = individulorder.filter(
    (os) => os.type == "section_subcategory" && os.parent == Section2id
  );

  // const SectionSequenceOrder=sectionsequenceorder.find(obj => obj.sequenceNo==1);

  const slug = SectionSequenceOrder?.category_slug || "";
  const slug2 = SectionSequence?.category_slug || "";

  // Parallelize product fetches if both slugs exist
  const [products, product] = await Promise.all([
    slug ? api.getProducts(slug) : Promise.resolve(null),
    slug2 ? api.getSectionProduct(slug2) : Promise.resolve(null)
  ]);

  // Ensure products and product are arrays, not objects or null
  const normalizedProducts = Array.isArray(products) ? products : (products ? [products] : []);
  const normalizedProduct = Array.isArray(product) ? product : (product ? [product] : []);

  ////////////////////////Section Sequence Order 2/////////////////////////

  const productReviewsSlim = slimProductReviewsForHome(ProductReviews);
  const homeStructuredData = getHomePageStructuredData(GeneralSetting);

  return {
    props: {
      navCategories: slimNavCategories(navCategories),
      products: slimProductArray(normalizedProducts, 20),
      product: slimProductArray(normalizedProduct, 20),
      featuredCatalog: slimProductArray(
        Array.isArray(featuredCatalog) ? featuredCatalog : [],
        36
      ),
      SectionSequenceOrdera: slimSubcategoryList(SectionSequenceOrdera),
      Section1Name,
      Section2Name,
      SectionSequenceOrdera2: slimSubcategoryList(SectionSequenceOrdera2),
      slug,
      slug2,
      Section1SequenceData: slimSectionConfigNullable(Section1SequenceData),
      Section1SequenceData2: slimSectionConfigNullable(Section1SequenceData2),
      Section2SequenceData: slimSectionConfigNullable(Section2SequenceData),
      Section2SequenceData2: slimSectionConfigNullable(Section2SequenceData2),
      Section2SequenceData3: slimSectionConfigNullable(Section2SequenceData3),
      Section2SequenceData4: slimSectionConfigNullable(Section2SequenceData4),
      Section2SequenceData5: slimSectionConfigNullable(Section2SequenceData5),
      Section2SequenceData6: slimSectionConfigNullable(Section2SequenceData6),
      Section3SequenceData: slimSectionConfigNullable(Section3SequenceData),
      Section3SequenceData2: slimSectionConfigNullable(Section3SequenceData2),
      Section3SequenceData3: slimSectionConfigNullable(Section3SequenceData3),
      Section4SequenceData: slimSectionConfigNullable(Section4SequenceData),
      Section4SequenceData2: slimSectionConfigNullable(Section4SequenceData2),
      Section5SequenceData: slimSectionConfigNullable(Section5SequenceData),
      productbundles: slimProductBundles(productbundles),
      footerData: slimFooterData(footerData),
      slidersListLocal: slimSliderList(
        Array.isArray(slidersListLocal) ? slidersListLocal : []
      ),
      ProductReviews: productReviewsSlim,
      GeneralSetting: slimGeneralSettings(GeneralSetting),
      homeStructuredData,
      homeBlogPosts: slimBlogPostsForHome(
        Array.isArray(blogHomePreview?.results) ? blogHomePreview.results : [],
        HOME_BLOG_PREVIEW_COUNT
      ),
    },
    // Revalidate every 300 seconds (5 minutes) - ISR (Incremental Static Regeneration)
    // This means pages are cached and only regenerated every 5 minutes
    // Reduced from 60 seconds to improve performance and reduce server load
    revalidate: 300,
  };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return empty props on error to prevent build failure
    return {
      props: {
        navCategories: [],
        products: [],
        product: [],
        featuredCatalog: [],
        SectionSequenceOrdera: [],
        Section1Name: "",
        Section2Name: "",
        SectionSequenceOrdera2: [],
        slug: "",
        slug2: "",
        Section1SequenceData: null,
        Section1SequenceData2: null,
        Section2SequenceData: null,
        Section2SequenceData2: null,
        Section2SequenceData3: null,
        Section2SequenceData4: null,
        Section2SequenceData5: null,
        Section2SequenceData6: null,
        Section3SequenceData: null,
        Section3SequenceData2: null,
        Section3SequenceData3: null,
        Section4SequenceData: null,
        Section4SequenceData2: null,
        Section5SequenceData: null,
        productbundles: { data: [] },
        footerData: null,
        slidersListLocal: [],
        ProductReviews: { Reviews: [] },
        GeneralSetting: [],
        homeStructuredData: null,
        homeBlogPosts: [],
      },
      revalidate: 300,
    };
  }
}

export default MemoizedIndexPage;
