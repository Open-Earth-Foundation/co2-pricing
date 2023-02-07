/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Pricepicker(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Price: {}, Pricepicker: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        Price: {},
        Pricepicker: { backgroundColor: "rgba(122,123,154,1)" },
      },
      variantValues: { property1: "Hover" },
    },
    {
      overrides: {
        Price: {},
        Pricepicker: { backgroundColor: "rgba(35,81,220,1)" },
      },
      variantValues: { property1: "Intersected" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="97px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="16px 24px 16px 24px"
      backgroundColor="rgba(156,157,189,1)"
      display="flex"
      {...getOverrideProps(overrides, "Pricepicker")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
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
        children="Price"
        {...getOverrideProps(overrides, "Price")}
      ></Text>
    </Flex>
  );
}
