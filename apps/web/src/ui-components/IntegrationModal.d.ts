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
export declare type IntegrationModalOverridesProps = {
  IntegrationModal?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6947"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6946"?: PrimitiveOverrideProps<FlexProps>;
  close4197700?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4197695"?: PrimitiveOverrideProps<ViewProps>;
  close4197699?: PrimitiveOverrideProps<IconProps>;
  "Frame 6945"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6944"?: PrimitiveOverrideProps<FlexProps>;
  hub4197216?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4197217"?: PrimitiveOverrideProps<ViewProps>;
  hub4197218?: PrimitiveOverrideProps<IconProps>;
  "Frame 6926"?: PrimitiveOverrideProps<FlexProps>;
  Connect?: PrimitiveOverrideProps<TextProps>;
  "Frame 6905"?: PrimitiveOverrideProps<FlexProps>;
  "to your Smart Contract"?: PrimitiveOverrideProps<TextProps>;
  "Description Block"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 6910"?: PrimitiveOverrideProps<FlexProps>;
  "How to interact with your Smart Contract?"?: PrimitiveOverrideProps<TextProps>;
  "Frame 6911"?: PrimitiveOverrideProps<FlexProps>;
  "Group 6"?: PrimitiveOverrideProps<FlexProps>;
  "10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna elit enim fames fames sem at blandit. Pellentesque varius volutpat lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus sed sed imperdiet varius."?: PrimitiveOverrideProps<TextProps>;
  "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
  "Learn more"?: PrimitiveOverrideProps<TextProps>;
  arrow_forward4197294?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4197295"?: PrimitiveOverrideProps<ViewProps>;
  arrow_forward4197296?: PrimitiveOverrideProps<IconProps>;
  "Frame 69424197255"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 69214197236"?: PrimitiveOverrideProps<FlexProps>;
  hub4197303?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4197298"?: PrimitiveOverrideProps<ViewProps>;
  hub4197302?: PrimitiveOverrideProps<IconProps>;
  "API link to your results"?: PrimitiveOverrideProps<TextProps>;
  "Frame 69414197250"?: PrimitiveOverrideProps<FlexProps>;
  "https://csw1gzreze.execute-api.us-east-1.amazonaws.com/prod/v1/query?table=mimifund..."?: PrimitiveOverrideProps<TextProps>;
  content_copy4197252?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4197253"?: PrimitiveOverrideProps<ViewProps>;
  content_copy4197254?: PrimitiveOverrideProps<IconProps>;
  "It should return these values4197274"?: PrimitiveOverrideProps<TextProps>;
  "Frame 69424197268"?: PrimitiveOverrideProps<FlexProps>;
  '{"records": [ {"scc": 8.374783688258463, "year": 2058.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.151440843385387, "year": 2056.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.26353476892645, "year": 2057.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.485153500045207, "year": 2059.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.594613832441464, "year": 2060.0, "snapshot_time": "202212221304", "prtp": 0.035} ] }4197269'?: PrimitiveOverrideProps<TextProps>;
  "Frame 6943"?: PrimitiveOverrideProps<FlexProps>;
  "Frame 69214197258"?: PrimitiveOverrideProps<FlexProps>;
  hub4197309?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4197304"?: PrimitiveOverrideProps<ViewProps>;
  hub4197308?: PrimitiveOverrideProps<IconProps>;
  "API link to the Carbon Budget Oracle"?: PrimitiveOverrideProps<TextProps>;
  "Frame 69414197263"?: PrimitiveOverrideProps<FlexProps>;
  "https://api.pro.co2oracle.net/products/v1/carbonbudgetoracle"?: PrimitiveOverrideProps<TextProps>;
  content_copy4197265?: PrimitiveOverrideProps<FlexProps>;
  "Bounding box4197266"?: PrimitiveOverrideProps<ViewProps>;
  content_copy4197267?: PrimitiveOverrideProps<IconProps>;
  "It should return these values4197973"?: PrimitiveOverrideProps<TextProps>;
  "Frame 69424197974"?: PrimitiveOverrideProps<FlexProps>;
  '{"records": [ {"scc": 8.374783688258463, "year": 2058.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.151440843385387, "year": 2056.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.26353476892645, "year": 2057.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.485153500045207, "year": 2059.0, "snapshot_time": "202212221304", "prtp": 0.035} {"scc": 8.594613832441464, "year": 2060.0, "snapshot_time": "202212221304", "prtp": 0.035} ] }4197975'?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IntegrationModalProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: IntegrationModalOverridesProps | undefined | null;
  }
>;
export default function IntegrationModal(
  props: IntegrationModalProps
): React.ReactElement;
