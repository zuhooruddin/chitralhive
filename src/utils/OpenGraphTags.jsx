import React from "react";

const OpenGraphTags = () => {
  return (
    <React.Fragment>
      <meta property="og:url" content="https://chitralhive.com" />
      {/* Thumbnail and title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Chitral Hive | Connecting Chitral Digitally" />
      <meta
        property="og:description"
        content="Discover Chitral like never before. Explore news, culture, businesses, and community stories all in one place — welcome to Chitral Hive, your digital gateway to Chitral."
      />
      <meta
        property="og:image"
        content="https://chitralhive.com/images/og-image.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Chitral Hive | Connecting Chitral Digitally" />
      <meta
        name="twitter:description"
        content="Explore news, culture, and businesses from Chitral — all in one digital hub."
      />
      <meta
        name="twitter:image"
        content="https://chitralhive.com/images/og-image.jpg"
      />
    </React.Fragment>
  );
};

export default OpenGraphTags;

