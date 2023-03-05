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
export declare type DiscountRateInfoOverridesProps = {
  DiscountRateInfo?: PrimitiveOverrideProps<FlexProps>;
  help71587?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box"?: PrimitiveOverrideProps<ViewProps>;
  help71589?: PrimitiveOverrideProps<IconProps>;
  "A higher discount rate implies that future generations are valued less than today's generation. However, since inflation has historically been positive over time, it's natural to assume that this carbon price will be cheaper for future generations. It is recommended to keep discount rates to less than 2% to meet this balance."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DiscountRateInfoProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: DiscountRateInfoOverridesProps | undefined | null;
  }
>;
export default function DiscountRateInfo(
  props: DiscountRateInfoProps
): React.ReactElement;
