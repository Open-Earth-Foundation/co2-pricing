/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import {
  FlexProps,
  IconProps,
  TextProps,
  ViewProps,
} from "@aws-amplify/ui-react";
import { CalculatorHeaderProps } from "./CalculatorHeader";
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type PriceOverviewTitleOverridesProps = {
  PriceOverviewTitle?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6921"?: PrimitiveOverrideProps<FlexProps>;
  visibility12729?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box12730"?: PrimitiveOverrideProps<ViewProps>;
  visibility12731?: PrimitiveOverrideProps<IconProps>;
  "Price overview"?: PrimitiveOverrideProps<TextProps>;
  CalculatorHeader?: CalculatorHeaderProps;
  "Frame 6922"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6924"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6912"?: PrimitiveOverrideProps<FlexProps>;
  "Your carbon price should be"?: PrimitiveOverrideProps<TextProps>;
  "Frame 6916"?: PrimitiveOverrideProps<FlexProps>;
  $10000?: PrimitiveOverrideProps<TextProps>;
  "in USD per Ton of CO2 (2023)"?: PrimitiveOverrideProps<TextProps>;
  "Frame 6949"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 2612751"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 2512752"?: PrimitiveOverrideProps<FlexProps>;
  "Discount Rate12753"?: PrimitiveOverrideProps<FlexProps>;
  "Discount Rate12754"?: PrimitiveOverrideProps<TextProps>;
  Slider?: PrimitiveOverrideProps<ViewProps>;
  Background?: PrimitiveOverrideProps<ViewProps>;
  Progress?: PrimitiveOverrideProps<ViewProps>;
  "Progress line"?: PrimitiveOverrideProps<ViewProps>;
  "Right control12759"?: PrimitiveOverrideProps<ViewProps>;
  "Right control12760"?: PrimitiveOverrideProps<IconProps>;
  "1.5%"?: PrimitiveOverrideProps<TextProps>;
  "Frame 6865"?: PrimitiveOverrideProps<FlexProps>;
  help12763?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box12764"?: PrimitiveOverrideProps<ViewProps>;
  help12765?: PrimitiveOverrideProps<IconProps>;
  "A higher discount rate implies that future generations are valued less than today's generation. A lower discount rate implies a greater value for future generations. It is recommended to keep discount rates to less than 2% to meet this balance."?: PrimitiveOverrideProps<TextProps>;
  "Frame 6951"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6950"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 2671421"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 2571422"?: PrimitiveOverrideProps<FlexProps>;
  Benchmarks?: PrimitiveOverrideProps<TextProps>;
  expand_more71437?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box71432"?: PrimitiveOverrideProps<ViewProps>;
  expand_more71436?: PrimitiveOverrideProps<IconProps>;
  Chart?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type PriceOverviewTitleProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: PriceOverviewTitleOverridesProps | undefined | null;
  }
>;
export default function PriceOverviewTitle(
  props: PriceOverviewTitleProps
): React.ReactElement;
