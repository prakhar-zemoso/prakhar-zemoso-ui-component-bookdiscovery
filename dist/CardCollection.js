function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card, View } from "@aws-amplify/ui-react";
export default function CardCollection(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "2778px",
    height: "1277px",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(191,191,191,1)"
  }, rest, getOverrideProps(overrides, "CardCollection")), /*#__PURE__*/React.createElement(Card, _extends({
    width: "210px",
    height: "263px",
    position: "absolute",
    top: "158px",
    left: "205px",
    overflow: "hidden",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)",
    property1: "Default"
  }, getOverrideProps(overrides, "Card115"))), /*#__PURE__*/React.createElement(Card, _extends({
    width: "210px",
    height: "263px",
    position: "absolute",
    top: "158px",
    left: "485px",
    overflow: "hidden",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)",
    property1: "Default"
  }, getOverrideProps(overrides, "Card116"))), /*#__PURE__*/React.createElement(Card, _extends({
    width: "210px",
    height: "263px",
    position: "absolute",
    top: "158px",
    left: "765px",
    overflow: "hidden",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)",
    property1: "Default"
  }, getOverrideProps(overrides, "Card117"))));
}