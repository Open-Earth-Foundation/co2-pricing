/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TabsOverridesProps = {
    Tabs?: PrimitiveOverrideProps<FlexProps>;
    Companies?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TabsProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Frame 6926" | "Frame 6927";
} & {
    overrides?: TabsOverridesProps | undefined | null;
}>;
export default function Tabs(props: TabsProps): React.ReactElement;
