/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SliderOverridesProps = {
    Slider?: PrimitiveOverrideProps<FlexProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    "Discount Rate4728751"?: PrimitiveOverrideProps<FlexProps>;
    "Discount Rate4728752"?: PrimitiveOverrideProps<TextProps>;
    Slider4728753?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Progress?: PrimitiveOverrideProps<ViewProps>;
    "Progress Line"?: PrimitiveOverrideProps<ViewProps>;
    "Right control4728757"?: PrimitiveOverrideProps<ViewProps>;
    "Right control4728758"?: PrimitiveOverrideProps<IconProps>;
    "1.0%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SliderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SliderOverridesProps | undefined | null;
}>;
export default function Slider(props: SliderProps): React.ReactElement;
