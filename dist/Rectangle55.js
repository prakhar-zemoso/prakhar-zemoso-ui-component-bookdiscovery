function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps, getOverridesFromVariants, mergeVariantsAndOverrides } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Rectangle55(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [{
    overrides: {
      "Rectangle 55": {},
      Rectangle55: {}
    },
    variantValues: {
      state: "Default"
    }
  }, {
    overrides: {
      "Rectangle 55": {
        backgroundColor: "rgba(117,115,115,1)"
      },
      Rectangle55: {}
    },
    variantValues: {
      state: "Variant2"
    }
  }];
  const overrides = mergeVariantsAndOverrides(getOverridesFromVariants(variants, props), overridesProp || {});
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "375px",
    height: "226px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "Rectangle55")), /*#__PURE__*/React.createElement(View, _extends({
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(217,217,217,1)"
  }, getOverrideProps(overrides, "Rectangle 55"))));
}