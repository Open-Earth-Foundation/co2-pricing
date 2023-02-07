/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Topnav(props) {
  const { overrides, ...rest } = props;
  const frameSixNineFiveThreeOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const calculatorOnClick = useNavigateAction({
    type: "url",
    url: "/calculator/select",
  });
  const fAQOnClick = useNavigateAction({ type: "url", url: "/faq" });
  const aboutCPTOnClick = useNavigateAction({ type: "url", url: "/about" });
  return (
    <Flex
      gap="35px"
      direction="row"
      width="1853px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.30000001192092896)"
      borderRadius="0px 0px 16px 16px"
      padding="36px 60px 36px 60px"
      backgroundColor="rgba(35,38,64,1)"
      {...getOverrideProps(overrides, "Topnav")}
      {...rest}
    >
      <Flex
        gap="13px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        color="white"
        onClick={() => {
          frameSixNineFiveThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 6953")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="58px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 3")}
        >
          <Icon
            width="27.84px"
            height="31.24px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 27.84002685546875,
              height: 31.242919921875,
            }}
            paths={[
              {
                d: "M14.9746 25.7309C22.08 25.7309 27.84 19.9709 27.84 12.8655C27.84 5.76007 22.08 0 14.9746 0C11.7963 0 8.8873 1.15243 6.6425 3.06222C6.64288 3.06087 6.64325 3.05953 6.64363 3.05819C6.62605 3.0742 6.60854 3.0902 6.59109 3.10619C5.8935 3.70599 5.26094 4.37929 4.70543 5.11409C3.2798 6.92411 2.59165 8.72641 2.28086 10.758C2.21519 11.1566 2.16783 11.5613 2.13968 11.9713C1.99522 13.7036 2.05405 15.618 2.1224 17.8422C2.16649 19.277 2.21453 20.8406 2.21453 22.5673C2.21453 25.4145 0.843637 25.3091 0 24.36C0.40677 27.7635 9.17453 32.0582 10.5454 31.1091C6.02643 29.9586 4.54469 22.6178 8.39647 23.9244C10.3213 25.0718 12.5709 25.7309 14.9746 25.7309ZM14.9746 19.4564C11.3345 19.4564 8.38364 16.5055 8.38364 12.8655C8.38364 9.2254 11.3345 6.27455 14.9746 6.27455C18.6146 6.27455 21.5655 9.2254 21.5655 12.8655C21.5655 16.5055 18.6146 19.4564 14.9746 19.4564Z",
                fill: "rgba(194,195,228,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.24px"
            left="14.13px"
            {...getOverrideProps(overrides, "Union")}
          >
            <Icon
              width="25.73px"
              height="25.73px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25.73095703125,
                height: 25.73095703125,
              }}
              paths={[
                {
                  d: "M25.7309 12.8655C25.7309 19.9709 19.9709 25.7309 12.8655 25.7309C5.76007 25.7309 0 19.9709 0 12.8655C0 5.76007 5.76007 0 12.8655 0C19.9709 0 25.7309 5.76007 25.7309 12.8655ZM6.27455 12.8655C6.27455 16.5055 9.2254 19.4564 12.8655 19.4564C16.5055 19.4564 19.4564 16.5055 19.4564 12.8655C19.4564 9.2254 16.5055 6.27455 12.8655 6.27455C9.2254 6.27455 6.27455 9.2254 6.27455 12.8655Z",
                  fill: "rgba(70,70,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="2.11px"
              {...getOverrideProps(overrides, "Ellipse 2")}
            ></Icon>
            <Icon
              width="10.55px"
              height="28.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.54547119140625,
                height: 28.1846923828125,
              }}
              paths={[
                {
                  d: "M6.64363 0C3.58549 10.9673 8.43636 20.88 8.43636 20.88C4.53454 19.5091 6.0109 26.8964 10.5454 28.0509C9.17453 29 0.40677 24.7053 0 21.3018C0.843637 22.2509 2.21453 22.3563 2.21453 19.5091C2.21453 9.93774 0.73817 5.37815 6.64363 0Z",
                  fill: "rgba(70,70,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.06px"
              left="0px"
              {...getOverrideProps(overrides, "Rectangle 1")}
            ></Icon>
          </Icon>
          <Icon
            width="58px"
            height="58px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 58.00006103515625,
              height: 58.00006103515625,
            }}
            paths={[
              {
                d: "M33.9666 52.4039C34.5485 55.1457 32.7901 57.8877 29.9889 57.9832C25.0412 58.152 20.1024 57.0518 15.657 54.7481C9.70003 51.6611 4.99773 46.6042 2.35129 40.4388C-0.295138 34.2735 -0.721954 27.3813 1.14357 20.9366C3.00909 14.4918 7.05153 8.89332 12.5821 5.09494C18.1127 1.29657 24.7892 -0.466651 31.474 0.105721C38.1589 0.678092 44.4385 3.55064 49.2428 8.23391C54.0472 12.9172 57.079 19.1214 57.8218 25.7895C58.3761 30.7655 57.63 35.7701 55.6963 40.3275C54.6016 42.9077 51.4111 43.5644 49.0609 42.0371L49.0609 42.0371C46.7108 40.5098 46.1213 37.3692 46.9684 34.6974C47.7596 32.2022 48.0281 29.5515 47.7342 26.9132C47.2514 22.5789 45.2807 18.5462 42.1578 15.5021C39.035 12.4579 34.9533 10.5908 30.6081 10.2187C26.263 9.84669 21.9232 10.9928 18.3284 13.4617C14.7335 15.9307 12.1059 19.5697 10.8933 23.7588C9.68074 27.9479 9.95817 32.4278 11.6784 36.4353C13.3985 40.4427 16.455 43.7298 20.3271 45.7363C22.684 46.9577 25.2545 47.6587 27.8673 47.816C30.6651 47.9845 33.3848 49.6621 33.9666 52.4039L33.9666 52.4039Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Ellipse 1")}
          ></Icon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="21.251909255981445px"
          fontWeight="700"
          color="white"
          lineHeight="21.25674057006836px"
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
          children="Carbon&#xA;Pricing&#xA;Tool"
          {...getOverrideProps(overrides, "Carbon Pricing Tool")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6952")}
      >
        <Text
          fontFamily="Inter"
          fontSize="21.251909255981445px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="21.25674057006836px"
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
          children="Home"
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="21.251909255981445px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="21.25674057006836px"
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
          children="Calculator"
          onClick={() => {
            calculatorOnClick();
          }}
          {...getOverrideProps(overrides, "Calculator")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="21.251909255981445px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="21.25674057006836px"
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
          children="FAQ"
          onClick={() => {
            fAQOnClick();
          }}
          {...getOverrideProps(overrides, "FAQ")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="21.251909255981445px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="21.25674057006836px"
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
          children="About CPT"
          onClick={() => {
            aboutCPTOnClick();
          }}
          {...getOverrideProps(overrides, "About CPT")}
        ></Text>
      </Flex>
    </Flex>
  );
}
