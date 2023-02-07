/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame6900OverridesProps = {
    Frame6900?: PrimitiveOverrideProps<FlexProps>;
    add2272629?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box2272624"?: PrimitiveOverrideProps<ViewProps>;
    add2272628?: PrimitiveOverrideProps<IconProps>;
    "Line 18"?: PrimitiveOverrideProps<IconProps>;
    remove2272635?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box2272630"?: PrimitiveOverrideProps<ViewProps>;
    remove2272634?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Frame6900Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Frame6900OverridesProps | undefined | null;
}>;
export default function Frame6900(props: Frame6900Props): React.ReactElement;
