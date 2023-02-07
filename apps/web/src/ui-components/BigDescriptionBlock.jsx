/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function BigDescriptionBlock(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      direction="row"
      width="1320px"
      height="216px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
      borderRadius="8px"
      padding="36px 36px 36px 36px"
      backgroundImage="linear-gradient(-41deg, rgba(115,136,232,1), rgba(35,81,220,1))"
      {...getOverrideProps(overrides, "BigDescriptionBlock")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6910")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="48.409088134765625px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="336px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="How to start calculating your own price?"
          {...getOverrideProps(
            overrides,
            "How to start calculating your own price?"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="11px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6911")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="unset"
          height="96px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24.204544067382812px"
            textAlign="justify"
            display="block"
            direction="column"
            justifyContent="unset"
            width="901px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 16")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24.204544067382812px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Know more"
            {...getOverrideProps(overrides, "Know more")}
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
            {...getOverrideProps(overrides, "arrow_forward4728775")}
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
              backgroundColor="rgba(217,217,217,1)"
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
              top="16.67%"
              bottom="16.67%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "arrow_forward4728777")}
            ></Icon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
