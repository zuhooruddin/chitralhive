import Head from "next/head";
import React from "react";


const SEO = ({ title, description,metaTitle, sitename  }) => {
  const metaDescription = "Get in touch with Chitral Hive for authentic Chitrali products. We're here to help with your orders and inquiries. Contact us via phone, email, or visit our store in Chitral.Get in touch with Chitral Hive for authentic Chitrali products. We're here to help with your orders and inquiries. Contact us via phone, email, or visit our store in Chitral."
  sitename=process.env.NEXT_PUBLIC_COMPANY_NAME
  return (
    <Head>
    
      <title>
        {title} | {sitename}
      </title>
      <meta name="title" content={metaTitle?metaTitle+" - "+title:"Buy Products Online - Ecommerce"} />
      <meta name="description" content={description?description:metaDescription} />
      
    </Head>
  );
};

export default SEO;
