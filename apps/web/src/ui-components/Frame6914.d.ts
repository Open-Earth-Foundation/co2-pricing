/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BigDescriptionBlockProps } from "./BigDescriptionBlock";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CounterProps } from "./Counter";
import { SliderProps } from "./Slider";
import { Frame6934Props } from "./Frame6934";
import { DescriptionBlockProps } from "./DescriptionBlock";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame6914OverridesProps = {
    Frame6914?: PrimitiveOverrideProps<FlexProps>;
    Header?: BigDescriptionBlockProps;
    "Frame 6951"?: PrimitiveOverrideProps<ViewProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    PriceOverview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6921"?: PrimitiveOverrideProps<FlexProps>;
    visibility4728412?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box4728413"?: PrimitiveOverrideProps<ViewProps>;
    visibility4728414?: PrimitiveOverrideProps<IconProps>;
    "Price overview"?: PrimitiveOverrideProps<TextProps>;
    "Frame 68654728416"?: PrimitiveOverrideProps<FlexProps>;
    help4728417?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box4728418"?: PrimitiveOverrideProps<ViewProps>;
    help4728419?: PrimitiveOverrideProps<IconProps>;
    "Choose your discount rate to configure your carbon price"?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Know more"?: PrimitiveOverrideProps<TextProps>;
    arrow_forward4728423?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box4728424"?: PrimitiveOverrideProps<ViewProps>;
    arrow_forward4728425?: PrimitiveOverrideProps<IconProps>;
    "Frame 6922"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6924"?: PrimitiveOverrideProps<FlexProps>;
    Counter?: CounterProps;
    "Frame 6950"?: PrimitiveOverrideProps<FlexProps>;
    Slider?: SliderProps;
    "Frame 68654728445"?: PrimitiveOverrideProps<FlexProps>;
    help4728446?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box4728447"?: PrimitiveOverrideProps<ViewProps>;
    help4728448?: PrimitiveOverrideProps<IconProps>;
    "A higher discount rate implies a greater value for present generations. A lower discount rate implies a greater value for future generations"?: PrimitiveOverrideProps<TextProps>;
    BodyBottom?: PrimitiveOverrideProps<ViewProps>;
    "Frame 6934"?: Frame6934Props;
    Footer?: PrimitiveOverrideProps<FlexProps>;
    "Description Block4728693"?: DescriptionBlockProps;
    "Description Block4728735"?: DescriptionBlockProps;
} & EscapeHatchProps;
export declare type Frame6914Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Frame6914OverridesProps | undefined | null;
}>;
export default function Frame6914(props: Frame6914Props): React.ReactElement;
