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
export default function Frame3(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Start calculating": {},
        "Bounding box": {},
        arrow_forward3546514: {},
        arrow_forward3546512: {},
        Frame3: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Start calculating": {},
        "Bounding box": {},
        arrow_forward3546514: {},
        arrow_forward3546512: {},
        Frame3: {
          width: "unset",
          height: "unset",
          backgroundColor: "rgba(35,38,64,1)",
        },
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
      width="314px"
      height="84px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="24px 36px 24px 36px"
      backgroundColor="rgba(35,81,220,1)"
      display="flex"
      {...getOverrideProps(overrides, "Frame3")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
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
        children="Start calculating"
        {...getOverrideProps(overrides, "Start calculating")}
      ></Text>
      <Flex
        padding="0px 0px 0px 0px"
        width="36px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "arrow_forward3546512")}
      >
        <View
          width="36px"
          height="36px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Bounding box")}
        ></View>
        <Icon
          width="24px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[
            {
              d: "M12 24L9.8625 21.9L18.2625 13.5L0 13.5L0 10.5L18.2625 10.5L9.8625 2.1L12 0L24 12L12 24Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16.67%"
          bottom="16.67%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "arrow_forward3546514")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
