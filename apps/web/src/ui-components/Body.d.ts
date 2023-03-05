/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BigDescriptionBlockProps } from "./BigDescriptionBlock";
import {
  FlexProps,
  IconProps,
  TextProps,
  ViewProps,
} from "@aws-amplify/ui-react";
import { CounterProps } from "./Counter";
import { Frame6934Props } from "./Frame6934";
import { DescriptionBlockProps } from "./DescriptionBlock";
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type BodyOverridesProps = {
  Body?: PrimitiveOverrideProps<FlexProps>;
  Header?: BigDescriptionBlockProps;
  PriceOverview?: PrimitiveOverrideProps<FlexProps>;
  Title?: PrimitiveOverrideProps<FlexProps>;
  visibility4728412?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4728413"?: PrimitiveOverrideProps<ViewProps>;
  visibility4728414?: PrimitiveOverrideProps<IconProps>;
  "Price overview"?: PrimitiveOverrideProps<TextProps>;
  Toolbar?: PrimitiveOverrideProps<FlexProps>;
  help4728417?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4728418"?: PrimitiveOverrideProps<ViewProps>;
  help4728419?: PrimitiveOverrideProps<IconProps>;
  "Choose your discount rate to configure your carbon price"?: PrimitiveOverrideProps<TextProps>;
  "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
  "Know more"?: PrimitiveOverrideProps<TextProps>;
  arrow_forward4728423?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4728424"?: PrimitiveOverrideProps<ViewProps>;
  arrow_forward4728425?: PrimitiveOverrideProps<IconProps>;
  Calculator?: PrimitiveOverrideProps<FlexProps>;
  Counter?: CounterProps;
  "Frame 6950"?: PrimitiveOverrideProps<FlexProps>;
  Slider5428218?: PrimitiveOverrideProps<FlexProps>;
  "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
  "Discount Rate5428220"?: PrimitiveOverrideProps<FlexProps>;
  "Discount Rate5428221"?: PrimitiveOverrideProps<TextProps>;
  Slider5428222?: PrimitiveOverrideProps<ViewProps>;
  Background?: PrimitiveOverrideProps<ViewProps>;
  Progress?: PrimitiveOverrideProps<ViewProps>;
  "Progress Line"?: PrimitiveOverrideProps<ViewProps>;
  "Right control5428226"?: PrimitiveOverrideProps<ViewProps>;
  "Right control5428227"?: PrimitiveOverrideProps<IconProps>;
  "1.0%"?: PrimitiveOverrideProps<TextProps>;
  "Frame 6865"?: PrimitiveOverrideProps<FlexProps>;
  help4728446?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4728447"?: PrimitiveOverrideProps<ViewProps>;
  help4728448?: PrimitiveOverrideProps<IconProps>;
  "A higher discount rate implies that future generations are valued less than today's generation. However, since inflation has historically been positive over time, it's natural to assume that this carbon price will be cheaper for future generations. It is recommended to keep discount rates to less than 2% to meet this balance."?: PrimitiveOverrideProps<TextProps>;
  CTA?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6934"?: Frame6934Props;
  Footer?: PrimitiveOverrideProps<FlexProps>;
  "Description Block4728693"?: DescriptionBlockProps;
  "Description Block4728735"?: DescriptionBlockProps;
} & EscapeHatchProps;
export declare type BodyProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: BodyOverridesProps | undefined | null;
  }
>;
export default function Body(props: BodyProps): React.ReactElement;
