function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Frame41(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "632px",
    height: "791px",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "Frame41")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "41px",
    left: "55px",
    direction: "column",
    width: "300px",
    justifyContent: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "TextField10793164"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "157px",
    left: "55px",
    direction: "column",
    width: "300px",
    justifyContent: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "TextField10793172"))));
}