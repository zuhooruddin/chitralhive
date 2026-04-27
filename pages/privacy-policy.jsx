import { useMemo } from "react";
import StaticContentPage from "components/StaticContentPage";
const PrivacyPolicy = ({ data = [] }) => {
  const publishedItems = useMemo(
    () => (Array.isArray(data) ? data.filter((item) => item.status === 1) : []),
    [data]
  );

  return (
    <StaticContentPage
      title="Privacy Policy"
      metaTitle="Privacy Policy - Chitral Hive"
      description="Learn how Chitral Hive collects, uses, and protects your personal information."
      keywords="privacy policy Pakistan, Chitral Hive privacy policy, data protection policy, personal information policy"
      canonical="https://chitralhive.com/privacy-policy"
      intro="Your privacy matters to us. This page describes how your information is handled across browsing, orders, and customer support."
      publishedItems={publishedItems}
      emptyText="We respect your privacy and protect your personal information according to applicable laws and best practices."
    />
  );
};


export default PrivacyPolicy;

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  if (!apiUrl) return { props: { data: [] } };

  try {
    const response = await fetch(
      `${apiUrl}get_dynamictext?key=${encodeURIComponent("privacy-policy")}`
    );
    const data = await response.json();
    return { props: { data: Array.isArray(data) ? data : [] } };
  } catch (error) {
    console.error("privacy-policy getServerSideProps:", error);
    return { props: { data: [] } };
  }
}
