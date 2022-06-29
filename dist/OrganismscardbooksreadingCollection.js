function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import Organismscardbooksreading from "./Organismscardbooksreading";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function OrganismscardbooksreadingCollection(props) {
  const {
    items,
    overrideItems,
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Collection, _extends({
    type: "list",
    isSearchable: true,
    isPaginated: true,
    searchPlaceholder: "Search...",
    direction: "column",
    alignItems: "stretch",
    justifyContent: "left",
    items: items || []
  }, rest, getOverrideProps(overrides, "OrganismscardbooksreadingCollection")), (item, index) => /*#__PURE__*/React.createElement(Organismscardbooksreading, _extends({
    key: item.id
  }, overrideItems && overrideItems({
    item,
    index
  }))));
}