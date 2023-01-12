/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CounterOverridesProps = {
    Counter?: PrimitiveOverrideProps<FlexProps>;
    "Your carbon price should be"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6916"?: PrimitiveOverrideProps<FlexProps>;
    $12645?: PrimitiveOverrideProps<TextProps>;
    "in USD per Ton of CO2"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CounterProps = React.PropsWithChildren<Partial<FlexProps> & {
    price?: String;
} & {
    overrides?: CounterOverridesProps | undefined | null;
}>;
export default function Counter(props: CounterProps): React.ReactElement;
