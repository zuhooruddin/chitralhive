# Google Merchant Center Product Feed Generator

This script generates a Google Merchant Center product feed XML file from your Chitral Hive product database.

## Prerequisites

- Node.js installed
- Access to your backend API
- Environment variables configured (or update the script with your API URLs)

## Usage

### Option 1: Using npm script (Recommended)

```bash
npm run generate:merchant-feed
```

### Option 2: Direct execution

```bash
node generate-google-merchant-feed.js
```

## Configuration

The script uses the following environment variables (or defaults):

- `NEXT_PUBLIC_BACKEND_API_BASE` - Your backend API base URL (default: `https://api.chitralhive.com/`)
- `NEXT_PUBLIC_URL` - Your website base URL (default: `https://chitralhive.com`)
- `NEXT_PUBLIC_IMAGE_BASE_API_URL` - Base URL for product images

You can also edit the script directly to change these values.

## Output

The script generates a file named `google-merchant-feed.xml` in the `chitralhive` directory.

## Product Feed Format

The generated XML feed includes:

- **Required fields:**
  - `id` - Unique product identifier
  - `title` - Product name
  - `description` - Product description
  - `link` - Product URL
  - `image_link` - Product image URL
  - `price` - Product price in PKR
  - `availability` - Stock status (in stock/out of stock)
  - `brand` - Manufacturer/brand name
  - `condition` - Product condition (new)

- **Optional fields:**
  - `mpn` - Manufacturer Part Number (SKU)
  - `product_type` - Product category
  - `gtin` - Global Trade Item Number (if available)
  - `color` - Product color (if available)
  - `size` - Product size (if available)
  - `shipping` - Shipping information

## Uploading to Google Merchant Center

1. **Manual Upload:**
   - Go to Google Merchant Center
   - Navigate to Products > Feeds
   - Click "Add product source"
   - Select "Upload a file from your computer"
   - Upload the generated `google-merchant-feed.xml` file

2. **Automatic Updates (Recommended):**
   - Host the XML file on your server
   - In Google Merchant Center, select "Enter a link to your file"
   - Provide the URL where the file is hosted
   - Google will automatically fetch updates

3. **SFTP/Google Cloud Storage:**
   - Upload the file to your SFTP server or Google Cloud Storage
   - Configure Google Merchant Center to fetch from that location

## File Size Limits

- Maximum file size: 4 GB
- For large catalogs, consider splitting into multiple feeds or using the API method

## Troubleshooting

### No products found
- Check that your API endpoint is accessible
- Verify the `NEXT_PUBLIC_BACKEND_API_BASE` environment variable
- Check API response format matches expected structure

### Missing required fields
- The script filters out products missing required fields (name, slug, price, image)
- Check your product data to ensure all products have these fields

### Price format issues
- Prices are formatted as "XX.XX PKR" for Google Merchant Center
- Ensure your product prices are numeric values

## Updating the Feed

Run the script regularly (daily/weekly) to keep your product feed up to date. You can:

1. Set up a cron job to run the script automatically
2. Integrate it into your deployment process
3. Use Google Merchant Center's scheduled fetch feature

## Notes

- The feed includes only products with valid required fields
- Products with stock > 0 are marked as "in stock", others as "out of stock"
- All products are marked as "new" condition
- Shipping is set to free (0.00 PKR) for Pakistan
- Product descriptions are truncated to 5000 characters (Google's limit)

