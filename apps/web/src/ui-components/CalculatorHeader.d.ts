/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalculatorHeaderOverridesProps = {
    CalculatorHeader?: PrimitiveOverrideProps<FlexProps>;
    help12734?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box12735"?: PrimitiveOverrideProps<ViewProps>;
    help12736?: PrimitiveOverrideProps<IconProps>;
    "Choose your discount rate to configure your carbon price"?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Know more"?: PrimitiveOverrideProps<TextProps>;
    arrow_forward12740?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box12741"?: PrimitiveOverrideProps<ViewProps>;
    arrow_forward12742?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CalculatorHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CalculatorHeaderOverridesProps | undefined | null;
}>;
export default function CalculatorHeader(props: CalculatorHeaderProps): React.ReactElement;
