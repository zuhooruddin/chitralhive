import Head from 'next/head';

/**
 * StructuredData Component
 * Renders JSON-LD structured data for SEO and search engines
 * 
 * @param {Object} props
 * @param {Object|null} props.data - The structured data object (schema.org format)
 * @param {string} [props.id] - Optional stable id for Next/Head key
 * @returns {JSX.Element|null} Returns null if data is invalid
 */
export default function StructuredData({ data, id }) {
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

  // next/head dedupes by `key`. If multiple schemas share the same key,
  // only one script remains in the final <head>.
  const schemaType = Array.isArray(data?.['@type'])
    ? data['@type'].join(',')
    : (data?.['@type'] || 'Thing');
  const schemaId =
    id ||
    data?.['@id'] ||
    data?.url ||
    data?.name ||
    (schemaType === 'BreadcrumbList' ? `items-${data?.itemListElement?.length || 0}` : undefined) ||
    'default';
  const headKey = `structured-data:${schemaType}:${String(schemaId)}`;

  return (
    <Head>
      <script
        key={headKey}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}