/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestartaltOverridesProps = {
    Restartalt?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6867"?: PrimitiveOverrideProps<ViewProps>;
    restart_alt?: PrimitiveOverrideProps<IconProps>;
    "Start over"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RestartaltProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "Variant2";
} & {
    overrides?: RestartaltOverridesProps | undefined | null;
}>;
export default function Restartalt(props: RestartaltProps): React.ReactElement;
