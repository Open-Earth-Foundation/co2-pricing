/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import {
  FlexProps,
  IconProps,
  TextProps,
  ViewProps,
} from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type MethodDescriptionOverridesProps = {
  MethodDescription?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6909"?: PrimitiveOverrideProps<FlexProps>;
  "Description Block"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6910"?: PrimitiveOverrideProps<FlexProps>;
  help12819?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box12820"?: PrimitiveOverrideProps<ViewProps>;
  help12821?: PrimitiveOverrideProps<IconProps>;
  "Method description"?: PrimitiveOverrideProps<TextProps>;
  "Frame 6911"?: PrimitiveOverrideProps<FlexProps>;
  "Group 6"?: PrimitiveOverrideProps<FlexProps>;
  "13 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."?: PrimitiveOverrideProps<TextProps>;
  "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
  "Know more"?: PrimitiveOverrideProps<TextProps>;
  arrow_forward12828?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box12829"?: PrimitiveOverrideProps<ViewProps>;
  arrow_forward12830?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MethodDescriptionProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    title?: String;
    body?: String;
  } & {
    overrides?: MethodDescriptionOverridesProps | undefined | null;
  }
>;
export default function MethodDescription(
  props: MethodDescriptionProps
): React.ReactElement;
