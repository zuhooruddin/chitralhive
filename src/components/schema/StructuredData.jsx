import Head from 'next/head';

/**
 * StructuredData Component
 * Renders JSON-LD structured data for SEO and search engines
 * 
 * @param {Object} props
 * @param {Object|null} props.data - The structured data object (schema.org format)
 * @returns {JSX.Element|null} Returns null if data is invalid
 */
export default function StructuredData({ data }) {
  // Validate data before rendering
  if (!data || typeof data !== 'object') {
    return null;
  }

  try {
    // Validate JSON can be stringified
    JSON.stringify(data);
  } catch (error) {
    console.warn('StructuredData: Invalid data object, cannot stringify:', error);
    return null;
  }

  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}