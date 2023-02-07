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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Frame6934(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Next: {},
        "Bounding box": {},
        arrow_forward3644863: {},
        arrow_forward3644861: {},
        Frame6934: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        Next: {},
        "Bounding box": {},
        arrow_forward3644863: {
          top: "16.67%",
          bottom: "16.67%",
          left: "16.67%",
        },
        arrow_forward3644861: {},
        Frame6934: { backgroundColor: "rgba(35,38,64,1)" },
      },
      variantValues: { property1: "variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="11px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="16px 36px 16px 36px"
      backgroundColor="rgba(35,81,220,1)"
      display="flex"
      {...getOverrideProps(overrides, "Frame6934")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
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
        children="Next"
        {...getOverrideProps(overrides, "Next")}
      ></Text>
      <Flex
        padding="0px 0px 0px 0px"
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "arrow_forward3644861")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="transparent"
          {...getOverrideProps(overrides, "Bounding box")}
        ></View>
        <Icon
          width="16px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
          paths={[
            {
              d: "M8 16L6.575 14.6L12.175 9L0 9L0 7L12.175 7L6.575 1.4L8 0L16 8L8 16Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16.65%"
          bottom="16.68%"
          left="16.66%"
          right="16.67%"
          backgroundColor="transparent"
          {...getOverrideProps(overrides, "arrow_forward3644863")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
