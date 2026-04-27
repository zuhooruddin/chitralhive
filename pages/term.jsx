import { Container, Grid } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { H2, Paragraph } from "components/Typography";
import Link from "next/link";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

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
    <ShopLayout1>
      <SEO
        title="Terms and Conditions"
        metaTitle="Terms and Conditions - Chitral Hive"
        description="Read Chitral Hive Terms and Conditions for orders, deliveries, and website usage policies."
        keywords="terms and conditions Pakistan, Chitral Hive terms, website terms, order terms, ecommerce terms"
      />

      <Container sx={{ mb: "70px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <H2 mb={2}>Terms and Conditions</H2>

            {data.length > 0 ? (
              data.map((item) => (
                <div
                  key={item.id}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                />
              ))
            ) : (
              <Paragraph>
                Terms and conditions are being updated. For policy details, please
                review our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                <Link href="/return-policy">Return Policy</Link>.
              </Paragraph>
            )}
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export default TermPage;
