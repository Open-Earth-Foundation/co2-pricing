/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscountRateInfoOverridesProps = {
    DiscountRateInfo?: PrimitiveOverrideProps<FlexProps>;
    help71587?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box"?: PrimitiveOverrideProps<ViewProps>;
    help71589?: PrimitiveOverrideProps<IconProps>;
    "A higher discount rate implies a greater value for present generations. A lower discount rate implies a greater value for future generations"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DiscountRateInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DiscountRateInfoOverridesProps | undefined | null;
}>;
export default function DiscountRateInfo(props: DiscountRateInfoProps): React.ReactElement;