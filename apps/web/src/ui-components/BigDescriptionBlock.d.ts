/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BigDescriptionBlockOverridesProps = {
    BigDescriptionBlock?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6910"?: PrimitiveOverrideProps<FlexProps>;
    "How to start calculating your own price?"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6911"?: PrimitiveOverrideProps<FlexProps>;
    "Group 6"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Know more"?: PrimitiveOverrideProps<TextProps>;
    arrow_forward501689?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box"?: PrimitiveOverrideProps<ViewProps>;
    arrow_forward501691?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BigDescriptionBlockProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BigDescriptionBlockOverridesProps | undefined | null;
}>;
export default function BigDescriptionBlock(props: BigDescriptionBlockProps): React.ReactElement;
