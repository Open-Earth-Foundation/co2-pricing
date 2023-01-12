/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import DescriptionBlock from "./DescriptionBlock";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function BottomDescriptions(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      itemsPerPage={2}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "BottomDescriptions")}
      {...rest}
    >
      {(item, index) => (
        <DescriptionBlock
          height="auto"
          width="648px"
          margin="0 0 0 2rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DescriptionBlock>
      )}
    </Collection>
  );
}
