import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import StaticContentPage from "components/StaticContentPage";

const TermPage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE;
  const [data, setData] = useState([]);

  const candidateKeys = useMemo(
    () => ["term", "terms", "terms-and-conditions"],
    []
  );

  useEffect(() => {
    let active = true;

    const fetchTerms = async () => {
      for (const key of candidateKeys) {
        try {
          const url = `${apiUrl}get_dynamictext?key=${encodeURIComponent(key)}`;
          const response = await axios.get(url);
          const list = Array.isArray(response?.data) ? response.data : [];
          const published = list.filter((item) => item?.status === 1);

          if (published.length > 0) {
            if (active) setData(published);
            return;
          }
        } catch (error) {
          // Try next key if one endpoint value is missing.
        }
      }
    };

    if (apiUrl) fetchTerms();
    return () => {
      active = false;
    };
  }, [apiUrl, candidateKeys]);

  return (
    <StaticContentPage
      title="Terms & Conditions"
      metaTitle="Terms and Conditions - Chitral Hive"
      description="Read Chitral Hive terms and conditions for website use, orders, payments, shipping, and related policies."
      keywords="terms and conditions Pakistan, Chitral Hive terms, website terms, order terms, ecommerce terms"
      canonical="https://chitralhive.com/terms-and-conditions"
      intro="By using Chitral Hive, you agree to the terms governing purchases, account use, payments, shipping, and customer responsibilities."
      publishedItems={data}
      emptyText="Terms and conditions are being updated. Please review our Privacy Policy and Return Policy for additional policy details."
    />
  );
};

export default TermPage;
