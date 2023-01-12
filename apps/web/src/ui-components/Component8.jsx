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
import Component6 from "./Component6";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component8(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Component 7": {}, "Loading app...": {}, Component8: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Component 7": {
          top: "46.75%",
          bottom: "14.29%",
          left: "59.21%",
          right: "22.66%",
          transformOrigin: "top left",
          transform: "rotate(-180deg)",
        },
        "Loading app...": {},
        Component8: {},
      },
      variantValues: { property1: "Variant2" },
    },
    {
      overrides: {
        "Component 7": {
          top: "46.75%",
          bottom: "14.29%",
          left: "59.21%",
          right: "22.66%",
          transformOrigin: "top left",
          transform: "rotate(-180deg)",
        },
        "Loading app...": {},
        Component8: {},
      },
      variantValues: { property1: "Variant3" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="331px"
      height="154px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component8")}
      {...rest}
    >
      <Component6
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="61.04%"
        left="41.09%"
        right="40.79%"
        padding="0px 0px 0px 0px"
        property1="hourglass_top"
        {...getOverrideProps(overrides, "Component 7")}
      ></Component6>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="700"
        color="rgba(35,81,220,1)"
        lineHeight="58.09090805053711px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="62.34%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Loading app..."
        {...getOverrideProps(overrides, "Loading app...")}
      ></Text>
    </View>
  );
}
