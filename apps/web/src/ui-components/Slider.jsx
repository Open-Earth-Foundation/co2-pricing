/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Slider(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="436px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
      borderRadius="8px"
      padding="24px 36px 24px 36px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Slider")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 25")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Discount Rate4728751")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(0,30,167,1)"
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
            children="Discount Rate"
            {...getOverrideProps(overrides, "Discount Rate4728752")}
          ></Text>
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
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Slider4728753")}
          >
            <View
              width="364px"
              height="8px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8px"
              left="0px"
              right="0px"
              borderRadius="4px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(215,216,250,1)"
              {...getOverrideProps(overrides, "Background")}
            ></View>
            <View
              width="111px"
              height="8px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7.5px"
              left="0%"
              right="69.51%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Progress")}
            >
              <View
                width="111px"
                height="8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0.5px"
                left="0px"
                right="0px"
                borderRadius="4px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(113,130,255,1)"
                {...getOverrideProps(overrides, "Progress Line")}
              ></View>
            </View>
            <View
              width="18px"
              height="18px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3px"
              right="409px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Right control4728757")}
            ></View>
            <Icon
              width="18px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
              paths={[
                {
                  d: "M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3px"
              left="93px"
              {...getOverrideProps(overrides, "Right control4728758")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="700"
            color="rgba(35,81,220,1)"
            lineHeight="43.568180084228516px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1.0%"
            {...getOverrideProps(overrides, "1.0%")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
