import { Box, Rating } from "@mui/material";
import BazaarImage from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import NavLink from "components/nav-link/NavLink";
import { Paragraph } from "components/Typography";
import currency from "currency.js";
import Link from "next/link";

// ===========================================
const ProductCard19 = ({ image, title, price, id }) => {
  return (
    <FlexBox
      mb={2}
      gap={2}
      alignItems="center"
      sx={{
        " & a": {
          flexShrink: 0,
        },
        ":last-of-type": {
          mb: 0,
        },
        "& img": {
          transition: "0.3s",
        },
        ":hover": {
          img: {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      <Link href={`/product/${id}`}>

        <Box
          maxWidth={100}
          bgcolor="grey.300"
          sx={{ position: "relative", width: 100, height: 100, overflow: "hidden" }}
        >
          <BazaarImage
            fill
            alt={title ? `Product: ${title}` : "Product thumbnail"}
            src={image}
            style={{ objectFit: "contain" }}
            sizes="100px"
          />
        </Box>

      </Link>
      <Box>
        <NavLink href="#">
          <Paragraph fontSize={16}>{title}</Paragraph>
        </NavLink>
        <Paragraph fontWeight={700}>{currency(price).format()}</Paragraph>
        <Rating
          value={4}
          sx={{
            fontSize: 14,
          }}
        />
      </Box>
    </FlexBox>
  );
};

export default ProductCard19;
