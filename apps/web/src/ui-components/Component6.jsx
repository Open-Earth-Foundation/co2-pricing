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
import { Icon, View } from "@aws-amplify/ui-react";
export default function Component6(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Bounding box": {}, hourglass_top: {}, Component6: {} },
      variantValues: { property1: "hourglass_top" },
    },
    {
      overrides: {
        "Bounding box": {},
        hourglass_top: { transform: "rotate(180deg)" },
        Component6: {},
      },
      variantValues: { property1: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="72px"
      height="72px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component6")}
      {...rest}
    >
      <View
        width="72px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Bounding box")}
      ></View>
      <Icon
        width="48px"
        height="60px"
        viewBox={{ minX: 0, minY: 0, width: 48, height: 60 }}
        paths={[
          {
            d: "M12 54L36 54L36 45C36 41.7 34.825 38.875 32.475 36.525C30.125 34.175 27.3 33 24 33C20.7 33 17.875 34.175 15.525 36.525C13.175 38.875 12 41.7 12 45L12 54ZM0 60L0 54L6 54L6 45C6 41.95 6.713 39.087 8.139 36.411C9.563 33.737 11.55 31.6 14.1 30C11.55 28.4 9.563 26.262 8.139 23.586C6.713 20.912 6 18.05 6 15L6 6L0 6L0 0L48 0L48 6L42 6L42 15C42 18.05 41.288 20.912 39.864 23.586C38.438 26.262 36.45 28.4 33.9 30C36.45 31.6 38.438 33.737 39.864 36.411C41.288 39.087 42 41.95 42 45L42 54L48 54L48 60L0 60Z",
            fill: "rgba(115,136,232,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="91.67%"
        bottom="-75%"
        left="83.33%"
        right="-50%"
        transformOrigin="top left"
        transform="rotate(-180deg)"
        {...getOverrideProps(overrides, "hourglass_top")}
      ></Icon>
    </View>
  );
}
