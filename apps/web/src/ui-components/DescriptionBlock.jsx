/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function DescriptionBlock(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      direction="column"
      width="648px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
      borderRadius="8px"
      padding="24px 24px 24px 24px"
      backgroundImage="linear-gradient(-41deg, rgba(115,136,232,1), rgba(157,170,238,1))"
      {...getOverrideProps(overrides, "DescriptionBlock")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6910")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "help4728533")}
        >
          <View
            width="30px"
            height="30px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Bounding box4728534")}
          ></View>
          <Icon
            width="25px"
            height="25px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 25,
              height: 24.999996185302734,
            }}
            paths={[
              {
                d: "M12.4375 20C12.875 20 13.245 19.8487 13.5475 19.5462C13.8492 19.2446 14 18.875 14 18.4375C14 18 13.8492 17.6304 13.5475 17.3287C13.245 17.0262 12.875 16.875 12.4375 16.875C12 16.875 11.63 17.0262 11.3275 17.3287C11.0258 17.6304 10.875 18 10.875 18.4375C10.875 18.875 11.0258 19.2446 11.3275 19.5462C11.63 19.8487 12 20 12.4375 20ZM11.3125 15.1875L13.625 15.1875C13.625 14.5 13.7033 13.9583 13.86 13.5625C14.0158 13.1667 14.4583 12.625 15.1875 11.9375C15.7292 11.3958 16.1562 10.88 16.4687 10.39C16.7812 9.90083 16.9375 9.3125 16.9375 8.625C16.9375 7.45833 16.5104 6.5625 15.6562 5.9375C14.8021 5.3125 13.7917 5 12.625 5C11.4375 5 10.4742 5.3125 9.735 5.9375C8.995 6.5625 8.47917 7.3125 8.1875 8.1875L10.25 9C10.3542 8.625 10.5887 8.21875 10.9537 7.78125C11.3179 7.34375 11.875 7.125 12.625 7.125C13.2917 7.125 13.7917 7.30708 14.125 7.67125C14.4583 8.03625 14.625 8.4375 14.625 8.875C14.625 9.29167 14.5 9.68208 14.25 10.0462C14 10.4112 13.6875 10.75 13.3125 11.0625C12.3958 11.875 11.8333 12.4896 11.625 12.9062C11.4167 13.3229 11.3125 14.0833 11.3125 15.1875ZM12.5 25C10.7708 25 9.14583 24.6717 7.625 24.015C6.10417 23.3592 4.78125 22.4687 3.65625 21.3437C2.53125 20.2187 1.64083 18.8958 0.985 17.375C0.328333 15.8542 0 14.2292 0 12.5C0 10.7708 0.328333 9.14583 0.985 7.625C1.64083 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64042 7.625 0.98375C9.14583 0.327917 10.7708 0 12.5 0C14.2292 0 15.8542 0.327917 17.375 0.98375C18.8958 1.64042 20.2187 2.53125 21.3437 3.65625C22.4687 4.78125 23.3592 6.10417 24.015 7.625C24.6717 9.14583 25 10.7708 25 12.5C25 14.2292 24.6717 15.8542 24.015 17.375C23.3592 18.8958 22.4687 20.2187 21.3437 21.3437C20.2187 22.4687 18.8958 23.3592 17.375 24.015C15.8542 24.6717 14.2292 25 12.5 25ZM12.5 22.5C15.2917 22.5 17.6562 21.5312 19.5937 19.5937C21.5312 17.6562 22.5 15.2917 22.5 12.5C22.5 9.70833 21.5312 7.34375 19.5937 5.40625C17.6562 3.46875 15.2917 2.5 12.5 2.5C9.70833 2.5 7.34375 3.46875 5.40625 5.40625C3.46875 7.34375 2.5 9.70833 2.5 12.5C2.5 15.2917 3.46875 17.6562 5.40625 19.5937C7.34375 21.5312 9.70833 22.5 12.5 22.5Z",
                fill: "rgba(95,229,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "help4728535")}
          ></Icon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="29.045454025268555px"
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
          children="What does “discount rate” means?"
          {...getOverrideProps(
            overrides,
            "What does \u201Cdiscount rate\u201D means?"
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
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6911")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="unset"
          height="76px"
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
            fontSize="16px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="19.363636016845703px"
            textAlign="justify"
            display="block"
            direction="column"
            justifyContent="unset"
            width="600px"
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
            {...getOverrideProps(overrides, "arrow_forward4728542")}
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
              {...getOverrideProps(overrides, "Bounding box4728543")}
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
              {...getOverrideProps(overrides, "arrow_forward4728544")}
            ></Icon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
