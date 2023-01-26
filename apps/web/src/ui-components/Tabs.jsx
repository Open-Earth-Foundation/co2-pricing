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
export default function Tabs(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Companies: {}, Tabs: {} },
      variantValues: { property1: "Frame 6926" },
    },
    {
      overrides: {
        Companies: { fontWeight: "500", color: "rgba(139,152,255,1)" },
        Tabs: { border: "1px SOLID rgba(139,152,255,1)" },
      },
      variantValues: { property1: "Frame 6927" },
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
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(35,81,220,1)"
      padding="9px 9px 9px 9px"
      display="flex"
      {...getOverrideProps(overrides, "Tabs")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(35,81,220,1)"
        lineHeight="29.045454025268555px"
        textAlign="justify"
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
        children="Companies"
        {...getOverrideProps(overrides, "Companies")}
      ></Text>
    </Flex>
  );
}
