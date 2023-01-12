/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Component6Props } from "./Component6";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component8OverridesProps = {
    Component8?: PrimitiveOverrideProps<ViewProps>;
    "Component 7"?: Component6Props;
    "Loading app..."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component8Props = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default" | "Variant2" | "Variant3";
} & {
    overrides?: Component8OverridesProps | undefined | null;
}>;
export default function Component8(props: Component8Props): React.ReactElement;
