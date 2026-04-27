import { useMemo } from "react";
import StaticContentPage from "components/StaticContentPage";
const ReturnPolicy = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  return (
    <StaticContentPage
      title="Return & Refund Policy"
      metaTitle="Return Policy - Chitral Hive"
      description="Review Chitral Hive return and refund policy, including eligibility, timelines, and claim process."
      keywords="return policy Pakistan, Chitral Hive return policy, refund policy, exchange policy, order returns"
      canonical="https://chitralhive.com/return-policy"
      intro="This policy explains which items can be returned, how to request a return, and when refunds are processed."
      publishedItems={publishedItems}
      emptyText="Our return policy explains eligibility, timelines, and the return/refund process for orders placed on Chitral Hive."
    />
  );
};

export default ReturnPolicy;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("return-policy")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("return-policy getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
