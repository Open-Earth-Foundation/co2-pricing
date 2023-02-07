/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DescriptionBlockCTAOverridesProps = {
    DescriptionBlockCTA?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    help?: PrimitiveOverrideProps<IconProps>;
    TitleText?: PrimitiveOverrideProps<FlexProps>;
    "What does \u201Cdiscount rate\u201D means?"?: PrimitiveOverrideProps<TextProps>;
    Main?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."?: PrimitiveOverrideProps<TextProps>;
    Footer?: PrimitiveOverrideProps<FlexProps>;
    "Know more"?: PrimitiveOverrideProps<TextProps>;
    arrow_forward?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DescriptionBlockCTAProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DescriptionBlockCTAOverridesProps | undefined | null;
}>;
export default function DescriptionBlockCTA(props: DescriptionBlockCTAProps): React.ReactElement;
