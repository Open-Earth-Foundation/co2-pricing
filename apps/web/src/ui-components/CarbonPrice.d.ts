/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarbonPriceOverridesProps = {
    CarbonPrice?: PrimitiveOverrideProps<FlexProps>;
    "Your carbon price should be"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6916"?: PrimitiveOverrideProps<FlexProps>;
    $10000?: PrimitiveOverrideProps<TextProps>;
    "in USD per Ton of CO2 (2023)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CarbonPriceProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CarbonPriceOverridesProps | undefined | null;
}>;
export default function CarbonPrice(props: CarbonPriceProps): React.ReactElement;
