/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DescriptionBlockProps } from "./DescriptionBlock";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BottomDescriptionsOverridesProps = {
    BottomDescriptions?: PrimitiveOverrideProps<CollectionProps>;
    DescriptionBlock?: DescriptionBlockProps;
} & EscapeHatchProps;
export declare type BottomDescriptionsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => DescriptionBlockProps;
} & {
    overrides?: BottomDescriptionsOverridesProps | undefined | null;
}>;
export default function BottomDescriptions(props: BottomDescriptionsProps): React.ReactElement;
