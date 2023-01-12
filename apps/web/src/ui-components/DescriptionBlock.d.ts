/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DescriptionBlockOverridesProps = {
    DescriptionBlock?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6910"?: PrimitiveOverrideProps<FlexProps>;
    help4728533?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box4728534"?: PrimitiveOverrideProps<ViewProps>;
    help4728535?: PrimitiveOverrideProps<IconProps>;
    "What does \u201Cdiscount rate\u201D means?"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6911"?: PrimitiveOverrideProps<FlexProps>;
    "Group 6"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Know more"?: PrimitiveOverrideProps<TextProps>;
    arrow_forward4728542?: PrimitiveOverrideProps<FlexProps>;
    "Bounding box4728543"?: PrimitiveOverrideProps<ViewProps>;
    arrow_forward4728544?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DescriptionBlockProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DescriptionBlockOverridesProps | undefined | null;
}>;
export default function DescriptionBlock(props: DescriptionBlockProps): React.ReactElement;
