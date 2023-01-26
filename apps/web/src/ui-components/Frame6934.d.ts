/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame6934OverridesProps = {
    Frame6934?: PrimitiveOverrideProps<FlexProps>;
    Next?: PrimitiveOverrideProps<TextProps>;
    arrow_forward502199?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box"?: PrimitiveOverrideProps<ViewProps>;
    arrow_forward502201?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Frame6934Props = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "variant2";
} & {
    overrides?: Frame6934OverridesProps | undefined | null;
}>;
export default function Frame6934(props: Frame6934Props): React.ReactElement;
