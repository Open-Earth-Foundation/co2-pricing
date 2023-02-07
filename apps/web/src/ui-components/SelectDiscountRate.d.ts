/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CounterProps } from "./Counter";
import { Frame6934Props } from "./Frame6934";
import { DescriptionBlockCTAProps } from "./DescriptionBlockCTA";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SelectDiscountRateOverridesProps = {
    SelectDiscountRate?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6910"?: PrimitiveOverrideProps<FlexProps>;
    "How to start calculating your own price?"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6911"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6951"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."?: PrimitiveOverrideProps<TextProps>;
    "Frame 165428529"?: PrimitiveOverrideProps<FlexProps>;
    "Know more5428530"?: PrimitiveOverrideProps<TextProps>;
    arrow_forward5428533?: PrimitiveOverrideProps<IconProps>;
    PriceOverview?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    visibility?: PrimitiveOverrideProps<IconProps>;
    "Price overview"?: PrimitiveOverrideProps<TextProps>;
    Toolbar?: PrimitiveOverrideProps<FlexProps>;
    help5428448?: PrimitiveOverrideProps<IconProps>;
    "Choose your discount rate to configure your carbon price"?: PrimitiveOverrideProps<TextProps>;
    "Frame 165428450"?: PrimitiveOverrideProps<FlexProps>;
    "Know more5428451"?: PrimitiveOverrideProps<TextProps>;
    arrow_forward5428454?: PrimitiveOverrideProps<IconProps>;
    Calculator?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<ViewProps>;
    Counter?: CounterProps;
    "Frame 6950"?: PrimitiveOverrideProps<FlexProps>;
    Slider5428458?: PrimitiveOverrideProps<FlexProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    "Discount Rate5428460"?: PrimitiveOverrideProps<FlexProps>;
    "Discount Rate5428461"?: PrimitiveOverrideProps<TextProps>;
    Slider5428462?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Progress?: PrimitiveOverrideProps<ViewProps>;
    "Progress Line"?: PrimitiveOverrideProps<ViewProps>;
    "Right control5428466"?: PrimitiveOverrideProps<ViewProps>;
    "Right control5428467"?: PrimitiveOverrideProps<IconProps>;
    "1.0%"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6865"?: PrimitiveOverrideProps<FlexProps>;
    help5428472?: PrimitiveOverrideProps<IconProps>;
    "A higher discount rate implies a greater value for present generations. A lower discount rate implies a greater value for future generations"?: PrimitiveOverrideProps<TextProps>;
    Right?: PrimitiveOverrideProps<ViewProps>;
    CTA?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6934"?: Frame6934Props;
    Footer?: PrimitiveOverrideProps<FlexProps>;
    "Description Block CTA5458177"?: DescriptionBlockCTAProps;
    "Description Block CTA5458149"?: DescriptionBlockCTAProps;
} & EscapeHatchProps;
export declare type SelectDiscountRateProps = React.PropsWithChildren<Partial<FlexProps> & {
    priceText?: String;
    slider?: React.ReactNode;
    discountPercent?: String;
    chart?: React.ReactNode;
} & {
    overrides?: SelectDiscountRateOverridesProps | undefined | null;
}>;
export default function SelectDiscountRate(props: SelectDiscountRateProps): React.ReactElement;
