/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopnavOverridesProps = {
    Topnav?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6953"?: PrimitiveOverrideProps<FlexProps>;
    "Group 3"?: PrimitiveOverrideProps<FlexProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "Carbon Pricing Tool"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6952"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Calculator?: PrimitiveOverrideProps<TextProps>;
    FAQ?: PrimitiveOverrideProps<TextProps>;
    "About CPT"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopnavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TopnavOverridesProps | undefined | null;
}>;
export default function Topnav(props: TopnavProps): React.ReactElement;
