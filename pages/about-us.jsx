import { useMemo } from "react";
import StaticContentPage from "components/StaticContentPage";
const AboutUs = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  return (
    <StaticContentPage
      title="About Us"
      metaTitle="About Us - Chitral Hive"
      description="Learn about Chitral Hive, a trusted online marketplace for authentic Chitrali products."
      canonical="https://chitralhive.com/about-us"
      intro="Chitral Hive connects local producers with customers across Pakistan by offering authentic regional products with transparent information and reliable service."
      publishedItems={publishedItems}
      emptyText="Chitral Hive brings authentic Chitrali products to customers across Pakistan while supporting local artisans and traditional craftsmanship."
    />
  );
};


export default AboutUs;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("about-us")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("about-us getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
