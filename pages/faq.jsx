import { useMemo } from "react";
import StaticContentPage from "components/StaticContentPage";
const FAQPage = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  return (
    <StaticContentPage
      title="Frequently Asked Questions"
      metaTitle="FAQ - Chitral Hive"
      description="Find answers to common questions about products, shipping, delivery, and payments at Chitral Hive."
      keywords="Chitrali products FAQ, dry fruits questions, Chitrali honey FAQ, online shopping Pakistan FAQ, Chitral Hive help"
      canonical="https://chitralhive.com/faq"
      intro="Get quick answers about ordering, delivery timelines, payment methods, and product authenticity."
      publishedItems={publishedItems}
      emptyText="Browse common questions about ordering, shipping, delivery, and payments for authentic Chitrali products."
    />
  );
};

export default FAQPage;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("faq")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("faq getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
