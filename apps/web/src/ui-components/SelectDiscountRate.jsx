/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Counter from "./Counter";
import Frame6934 from "./Frame6934";
import DescriptionBlockCTA from "./DescriptionBlockCTA";
export default function SelectDiscountRate(props) {
  const {
    slider,
    discountPercent,
    displayColor,
    chart,
    integer,
    decimal,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="1853px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="5px 5px 5px 5px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SelectDiscountRate")}
      {...rest}
    >
      <Flex
        gap="11px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
        borderRadius="8px"
        padding="36px 36px 36px 36px"
        backgroundImage="linear-gradient(-41deg, rgba(115,136,232,1), rgba(35,81,220,1))"
        {...getOverrideProps(overrides, "Header")}
      >
        <Flex
          gap="12px"
          direction="row"
          width="336px"
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
          justifyContent="center"
          alignItems="flex-end"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 6911")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 6951")}
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`Use this tool to calculate a suggested carbon price for your organization, based on the Social Cost of Carbon (SCC), which is estimate of the damages from emitting a ton of carbon dioxide. To do so, define a discount rate which represents how much weight is assigned today to impacts of emissions felt in the future. \n \nA higher discount rate results in a lower carbon price, as future damages are considered less valuable. The decision we make about the discount rate determines how the undiscounted marginal damages are converted into a present value of damages, which is the social cost of carbon. \n \nThis tool is is powered by the open source RFF-Berkeley Greenhouse Gas Impact Value Estimator (GIVE) model developed by UC Berkeley and Resources for the Future.`}
              {...getOverrideProps(
                overrides,
                "17 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."
              )}
            ></Text>
          </Flex>
          <Flex
            gap="11px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 165428529")}
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
              {...getOverrideProps(overrides, "Know more5428530")}
            ></Text>
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
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "arrow_forward5428533")}
            ></Icon>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="40px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PriceOverview")}
      >
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
        >
          <Icon
            width="33px"
            height="22.5px"
            viewBox={{ minX: 0, minY: 0, width: 33, height: 22.5 }}
            paths={[
              {
                d: "M16.5 18C18.375 18 19.969 17.344 21.282 16.032C22.594 14.719 23.25 13.125 23.25 11.25C23.25 9.375 22.594 7.781 21.282 6.468C19.969 5.156 18.375 4.5 16.5 4.5C14.625 4.5 13.031 5.156 11.718 6.468C10.406 7.781 9.75 9.375 9.75 11.25C9.75 13.125 10.406 14.719 11.718 16.032C13.031 17.344 14.625 18 16.5 18ZM16.5 15.3C15.375 15.3 14.419 14.906 13.632 14.118C12.844 13.331 12.45 12.375 12.45 11.25C12.45 10.125 12.844 9.1685 13.632 8.3805C14.419 7.5935 15.375 7.2 16.5 7.2C17.625 7.2 18.5815 7.5935 19.3695 8.3805C20.1565 9.1685 20.55 10.125 20.55 11.25C20.55 12.375 20.1565 13.331 19.3695 14.118C18.5815 14.906 17.625 15.3 16.5 15.3ZM16.5 22.5C12.85 22.5 9.525 21.481 6.525 19.443C3.525 17.406 1.35 14.675 0 11.25C1.35 7.825 3.525 5.0935 6.525 3.0555C9.525 1.0185 12.85 0 16.5 0C20.15 0 23.475 1.0185 26.475 3.0555C29.475 5.0935 31.65 7.825 33 11.25C31.65 14.675 29.475 17.406 26.475 19.443C23.475 21.481 20.15 22.5 16.5 22.5ZM16.5 19.5C19.325 19.5 21.919 18.756 24.282 17.268C26.644 15.781 28.45 13.775 29.7 11.25C28.45 8.725 26.644 6.7185 24.282 5.2305C21.919 3.7435 19.325 3 16.5 3C13.675 3 11.081 3.7435 8.718 5.2305C6.356 6.7185 4.55 8.725 3.3 11.25C4.55 13.775 6.356 15.781 8.718 17.268C11.081 18.756 13.675 19.5 16.5 19.5Z",
                fill: "rgba(35,81,220,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "visibility")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="28px"
            fontWeight="500"
            color="rgba(35,81,220,1)"
            lineHeight="33.8863639831543px"
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
            children="Price overview"
            {...getOverrideProps(overrides, "Price overview")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
          borderRadius="8px"
          padding="16px 24px 16px 24px"
          backgroundColor="rgba(251,251,255,1)"
          {...getOverrideProps(overrides, "Frame 6865")}
        >
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
            {...getOverrideProps(overrides, "help4728446")}
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
              backgroundColor="rgba(251,251,255,1)"
              {...getOverrideProps(overrides, "Bounding box4728447")}
            ></View>
            <Icon
              width="20px"
              height="20px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.99999237060547,
                height: 20,
              }}
              paths={[
                {
                  d: "M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.0793 15.3957 11.2 15.1 11.2 14.75C11.2 14.4 11.0793 14.1043 10.838 13.863C10.596 13.621 10.3 13.5 9.95 13.5C9.6 13.5 9.304 13.621 9.062 13.863C8.82066 14.1043 8.7 14.4 8.7 14.75C8.7 15.1 8.82066 15.3957 9.062 15.637C9.304 15.879 9.6 16 9.95 16ZM9.05 12.15L10.9 12.15C10.9 11.6 10.9627 11.1667 11.088 10.85C11.2127 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11666 12.925 8.704 13.175 8.312C13.425 7.92066 13.55 7.45 13.55 6.9C13.55 5.96666 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37933 4.25 7.788 4.75C7.196 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.471 6.575 8.763 6.225C9.05433 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84566 11.3 6.137C11.5667 6.429 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74566 11.4 8.037C11.2 8.329 10.95 8.6 10.65 8.85C9.91666 9.5 9.46666 9.99166 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61666 20 7.31666 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61666 0.262667 7.31666 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31666 0.262333 8.61666 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31666 20 8.61666 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76666 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76666 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76666 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76666 18 10 18Z",
                  fill: "rgba(35,81,220,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.32%"
              bottom="8.35%"
              left="8.33%"
              right="8.34%"
              {...getOverrideProps(overrides, "visibility")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(35,81,220,1)"
            lineHeight="16.94318199157715px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="The chart shows how the suggested carbon price varies in time based on how future climate damages are discounted. Play with different discount rates to see how the suggested carbon price varies over time."
            {...getOverrideProps(
              overrides,
              "The chart shows how the suggested carbon price varies in time based on how future climate damages are discounted. Play with different discount rates to see how the suggested carbon price varies over time."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="8px"
          padding="16px 24px 16px 24px"
          backgroundColor="rgba(115,136,232,1)"
          {...getOverrideProps(overrides, "Toolbar")}
        >
          <Icon
            width="26.67px"
            height="26.67px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 26.66668701171875,
              height: 26.66668701171875,
            }}
            paths={[
              {
                d: "M13.2667 21.3333C13.7333 21.3333 14.128 21.172 14.4507 20.8493C14.7724 20.5276 14.9333 20.1333 14.9333 19.6667C14.9333 19.2 14.7724 18.8058 14.4507 18.484C14.128 18.1613 13.7333 18 13.2667 18C12.8 18 12.4053 18.1613 12.0827 18.484C11.7609 18.8058 11.6 19.2 11.6 19.6667C11.6 20.1333 11.7609 20.5276 12.0827 20.8493C12.4053 21.172 12.8 21.3333 13.2667 21.3333ZM12.0667 16.2L14.5333 16.2C14.5333 15.4667 14.6169 14.8889 14.784 14.4667C14.9502 14.0444 15.4222 13.4667 16.2 12.7333C16.7778 12.1556 17.2333 11.6053 17.5667 11.0827C17.9 10.5609 18.0667 9.93333 18.0667 9.2C18.0667 7.95555 17.6111 7 16.7 6.33333C15.7889 5.66667 14.7111 5.33333 13.4667 5.33333C12.2 5.33333 11.1724 5.66667 10.384 6.33333C9.59467 7 9.04444 7.8 8.73333 8.73333L10.9333 9.6C11.0444 9.2 11.2947 8.76667 11.684 8.3C12.0724 7.83333 12.6667 7.6 13.4667 7.6C14.1778 7.6 14.7111 7.79422 15.0667 8.18267C15.4222 8.572 15.6 9 15.6 9.46667C15.6 9.91111 15.4667 10.3276 15.2 10.716C14.9333 11.1053 14.6 11.4667 14.2 11.8C13.2222 12.6667 12.6222 13.3222 12.4 13.7667C12.1778 14.2111 12.0667 15.0222 12.0667 16.2ZM13.3333 26.6667C11.4889 26.6667 9.75555 26.3164 8.13333 25.616C6.51111 24.9164 5.1 23.9667 3.9 22.7667C2.7 21.5667 1.75022 20.1556 1.05067 18.5333C0.350222 16.9111 0 15.1778 0 13.3333C0 11.4889 0.350222 9.75555 1.05067 8.13333C1.75022 6.51111 2.7 5.1 3.9 3.9C5.1 2.7 6.51111 1.74978 8.13333 1.04933C9.75555 0.349778 11.4889 0 13.3333 0C15.1778 0 16.9111 0.349778 18.5333 1.04933C20.1556 1.74978 21.5667 2.7 22.7667 3.9C23.9667 5.1 24.9164 6.51111 25.616 8.13333C26.3164 9.75555 26.6667 11.4889 26.6667 13.3333C26.6667 15.1778 26.3164 16.9111 25.616 18.5333C24.9164 20.1556 23.9667 21.5667 22.7667 22.7667C21.5667 23.9667 20.1556 24.9164 18.5333 25.616C16.9111 26.3164 15.1778 26.6667 13.3333 26.6667ZM13.3333 24C16.3111 24 18.8333 22.9667 20.9 20.9C22.9667 18.8333 24 16.3111 24 13.3333C24 10.3556 22.9667 7.83333 20.9 5.76667C18.8333 3.7 16.3111 2.66667 13.3333 2.66667C10.3556 2.66667 7.83333 3.7 5.76667 5.76667C3.7 7.83333 2.66667 10.3556 2.66667 13.3333C2.66667 16.3111 3.7 18.8333 5.76667 20.9C7.83333 22.9667 10.3556 24 13.3333 24Z",
                fill: "rgba(249,203,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "help5428448")}
          ></Icon>
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Choose your discount rate to configure your carbon price"
            {...getOverrideProps(
              overrides,
              "Choose your discount rate to configure your carbon price"
            )}
          ></Text>
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
            {...getOverrideProps(overrides, "Frame 165428450")}
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
              {...getOverrideProps(overrides, "Know more5428451")}
            ></Text>
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
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "arrow_forward5428454")}
            ></Icon>
          </Flex>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 10px 0px 10px"
          {...getOverrideProps(overrides, "Calculator")}
        >
          <Flex
            gap="53px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 25px 0px 25px"
            minWidth="510px"
            {...getOverrideProps(overrides, "Left")}
          >
            <Counter
              display="flex"
              gap="13px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="12px"
              padding="0px 0px 0px 0px"
              integer={integer}
              decimal={decimal}
              {...getOverrideProps(overrides, "Counter")}
            ></Counter>
            <Flex
              gap="6px"
              direction="column"
              width="436px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 6950")}
            >
              <Flex
                gap="24px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
                borderRadius="8px"
                padding="24px 36px 24px 36px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Slider5428458")}
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
                    {...getOverrideProps(overrides, "Discount Rate5428460")}
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
                      {...getOverrideProps(overrides, "Discount Rate5428461")}
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
                      children={slider}
                      {...getOverrideProps(overrides, "Slider5428462")}
                    ></View>
                    <Text
                      fontFamily="Inter"
                      fontSize="32px"
                      fontWeight="700"
                      color={displayColor}
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
                      children={discountPercent[0]}
                      {...getOverrideProps(overrides, "1.0%")}
                    ></Text>
                    <Text
                      fontFamily="Inter"
                      fontSize="20px"
                      fontWeight="600"
                      color={displayColor}
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
                      children={discountPercent[1]}
                      {...getOverrideProps(overrides, "Discount Rate5428461")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
                borderRadius="8px"
                padding="16px 24px 16px 24px"
                backgroundColor="rgba(251,251,255,1)"
                {...getOverrideProps(overrides, "Frame 6865")}
              >
                <Icon
                  width="20px"
                  height="20px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 20,
                    height: 19.9999942779541,
                  }}
                  paths={[
                    {
                      d: "M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.0793 15.3957 11.2 15.1 11.2 14.75C11.2 14.4 11.0793 14.1043 10.838 13.863C10.596 13.621 10.3 13.5 9.95 13.5C9.6 13.5 9.304 13.621 9.062 13.863C8.82066 14.1043 8.7 14.4 8.7 14.75C8.7 15.1 8.82066 15.3957 9.062 15.637C9.304 15.879 9.6 16 9.95 16ZM9.05 12.15L10.9 12.15C10.9 11.6 10.9627 11.1667 11.088 10.85C11.2127 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11666 12.925 8.704 13.175 8.312C13.425 7.92066 13.55 7.45 13.55 6.9C13.55 5.96666 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37933 4.25 7.788 4.75C7.196 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.471 6.575 8.763 6.225C9.05433 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84566 11.3 6.137C11.5667 6.429 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74566 11.4 8.037C11.2 8.329 10.95 8.6 10.65 8.85C9.91666 9.5 9.46666 9.99166 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61666 20 7.31666 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61666 0.262667 7.31666 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31666 0.262333 8.61666 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31666 20 8.61666 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76666 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76666 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76666 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76666 18 10 18Z",
                      fill: "rgba(35,81,220,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "help5428472")}
                ></Icon>
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(35,81,220,1)"
                  lineHeight="16.94318199157715px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="A higher discount rate implies that future generations are valued less than today's generation. However, since inflation has historically been positive over time, it's natural to assume that this carbon price will be cheaper for future generations. It is recommended to keep discount rates to less than 2% to meet this balance."
                  {...getOverrideProps(
                    overrides,
                    "A higher discount rate implies that future generations are valued less than today's generation. However, since inflation has historically been positive over time, it's natural to assume that this carbon price will be cheaper for future generations. It is recommended to keep discount rates to less than 2% to meet this balance."
                  )}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
          <View
            width="unset"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children={chart}
            {...getOverrideProps(overrides, "Right")}
          ></View>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-end"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CTA")}
      >
        <Frame6934
          display="flex"
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="16px 36px 16px 36px"
          backgroundColor="rgba(35,81,220,1)"
          property1="Default"
          {...getOverrideProps(overrides, "Frame 6934")}
        ></Frame6934>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Footer")}
      >
        <DescriptionBlockCTA
          display="flex"
          gap="11px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
          borderRadius="8px"
          padding="24px 24px 24px 24px"
          backgroundImage="linear-gradient(-41deg, rgba(115,136,232,1), rgba(157,170,238,1))"
          {...getOverrideProps(overrides, "Description Block CTA5458177")}
        ></DescriptionBlockCTA>
        {/* <DescriptionBlockCTA
          display="flex"
          gap="11px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
          borderRadius="8px"
          padding="24px 24px 24px 24px"
          backgroundImage="linear-gradient(-41deg, rgba(115,136,232,1), rgba(157,170,238,1))"
          {...getOverrideProps(overrides, "Description Block CTA5458149")}
        ></DescriptionBlockCTA> */}
      </Flex>
    </Flex>
  );
}
