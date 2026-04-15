import { Box, Divider } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import { Paragraph, Span } from "components/Typography";
import React, { useState, useEffect, useMemo } from "react";
import { useAppContext } from "contexts/AppContext";

const CheckoutSummary2 = ({ DeliveryFee, couponData, setTotalPrice }) => {
  const { state } = useAppContext();
  const cartList = state.cart;
  const subtotal = useMemo(() => {
    return cartList.reduce(
      (accum, item) => accum + item.salePrice * item.qty,
      0
    );
  }, [cartList]);

  const [currency, setCurrency] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCurrency = localStorage.getItem("currency");
      setCurrency(storedCurrency);
    }
  }, []);




  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountedSubtotal, setDiscountedSubtotal] = useState(0);

  useEffect(() => {
    if (couponData === null || !couponData) {
      const discountPercentage = 0;
      const calculatedDiscountAmount =
        (subtotal.toFixed(2) * discountPercentage) / 100;
      const calculatedDiscountedSubtotal =
        subtotal.toFixed(2) - calculatedDiscountAmount;
      setDiscountAmount(calculatedDiscountAmount);
      setDiscountedSubtotal(calculatedDiscountedSubtotal);
    } else {
      const discountPercentage = parseFloat(couponData.discount);
      const calculatedDiscountAmount =
        (subtotal.toFixed(2) * discountPercentage) / 100;
      const calculatedDiscountedSubtotal =
        subtotal.toFixed(2) - calculatedDiscountAmount;
      setDiscountAmount(calculatedDiscountAmount);
      setDiscountedSubtotal(calculatedDiscountedSubtotal);
    }
  }, [couponData, subtotal]);

  useEffect(() => {
    setTotalPrice(Number(discountedSubtotal) + Number(DeliveryFee));
  }, [discountedSubtotal, DeliveryFee, setTotalPrice]);
  

  return (
    <Box>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        Your order
      </Paragraph>

      {cartList.map((item) => (
        <FlexBetween mb={1.5} key={item.name}>
          <Paragraph>
            <Span fontWeight="700" fontSize="14px">
              {item.qty}
            </Span>{" "}
            x {item.name}
          </Paragraph>
          <Paragraph>{currency}. {item.salePrice.toFixed(2)}</Paragraph>
        </FlexBetween>
      ))}

      <Divider
        sx={{
          borderColor: "grey.300",
          my: 3,
        }}
      />

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Subtotal:</Paragraph>
        <Paragraph fontWeight="700">{currency}. {subtotal.toFixed(2)}</Paragraph>
      </FlexBetween>

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Delivery Fee:</Paragraph>
        <Paragraph fontWeight="700">{currency}. {DeliveryFee}</Paragraph>
      </FlexBetween>

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Tax:</Paragraph>
        <Paragraph fontWeight="700">-</Paragraph>
      </FlexBetween>
      <FlexBetween mb={3}>
        <Paragraph color="grey.600">Discount:</Paragraph>
        <Paragraph fontWeight="700">{currency}. {discountAmount.toFixed(2)}</Paragraph>
      </FlexBetween>

      <Divider
        sx={{
          borderColor: "grey.300",
          mb: 1,
        }}
      />

      <FlexBetween fontWeight="700" mb={1}>
        <Paragraph>Total:</Paragraph>
        <Paragraph fontWeight="700">
          {currency}. {subtotal + parseFloat(DeliveryFee) - parseFloat(discountAmount)}
        </Paragraph>
      </FlexBetween>
    </Box>
  );
};

export default CheckoutSummary2;
