/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Counter(props) {
  const { priceText, overrides, ...rest } = props;
  return (
    <Flex
      gap="13px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="12px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Counter")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(122,123,154,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your carbon price should be"
        {...getOverrideProps(overrides, "Your carbon price should be")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(190,197,255,1)"
        padding="7px 0px 7px 0px"
        {...getOverrideProps(overrides, "Frame 6916")}
      >
        <Text
          fontFamily="Inter"
          fontSize="96px"
          fontWeight="700"
          color="rgba(35,81,220,1)"
          lineHeight="116.18181610107422px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={priceText}
          {...getOverrideProps(overrides, "$12645")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(122,123,154,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="in USD per Ton of CO2"
        {...getOverrideProps(overrides, "in USD per Ton of CO2")}
      ></Text>
    </Flex>
  );
}
