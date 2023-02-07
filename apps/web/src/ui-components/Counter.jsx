/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Counter(props) {
  const { integer, decimal, overrides, ...rest } = props;
  return (
    <Flex
      gap="13px"
      direction="column"
      width="379px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="12px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Counter")}
      {...rest}
    >
      <View
        width="unset"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Top")}
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
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Your carbon price should be"
          {...getOverrideProps(overrides, "Your carbon price should be")}
        ></Text>
      </View>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(190,197,255,1)"
        padding="7px 0px 7px 0px"
        {...getOverrideProps(overrides, "Main")}
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
          children="$"
          {...getOverrideProps(overrides, "Symbol")}
        ></Text>
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
          children={integer}
          {...getOverrideProps(overrides, "Integer")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="50px"
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
          children={decimal}
          {...getOverrideProps(overrides, "Decimal")}
        ></Text>
      </Flex>
      <View
        width="unset"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Bottom")}
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
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="in USD per Ton of CO2"
          {...getOverrideProps(overrides, "in USD per Ton of CO2")}
        ></Text>
      </View>
    </Flex>
  );
}
