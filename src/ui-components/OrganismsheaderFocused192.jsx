/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon from "./Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon";
import Atomslogonew from "./Atomslogonew";
import Moleculessearchnew1closeicon from "./Moleculessearchnew1closeicon";
import Atomsiconsnotification from "./Atomsiconsnotification";
import Atomsavatar from "./Atomsavatar";
export default function OrganismsheaderFocused192(props) {
  const { abc, overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="68px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(140,82,198,1), rgba(104,55,153,1))"
      {...rest}
      {...getOverrideProps(overrides, "OrganismsheaderFocused192")}
    >
      <Flex
        gap="12px"
        position="absolute"
        top="19.1px"
        left="300px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 29")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="30px"
          position="relative"
          padding="4px 8px 4px 8px"
          {...getOverrideProps(overrides, "molecules/headernav/wo icon")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "Home")}
          ></Text>
        </Flex>
        <Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon
          display="flex"
          gap="4px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="30px"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 8px"
          {...getOverrideProps(
            overrides,
            "molecules/button/primary/molecules/headernav/wo icon/molecules/headernav/w icon7952844"
          )}
        ></Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon>
        <Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon
          display="flex"
          gap="4px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="30px"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 8px"
          {...getOverrideProps(
            overrides,
            "molecules/button/primary/molecules/headernav/wo icon/molecules/headernav/w icon7952845"
          )}
        ></Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon>
      </Flex>
      <Atomslogonew
        display="flex"
        gap="10px"
        position="absolute"
        top="19px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/logonew")}
      ></Atomslogonew>
      <Moleculessearchnew1closeicon
        display="flex"
        gap="730px"
        position="absolute"
        top="15px"
        left="607px"
        direction="row"
        width="1068px"
        alignItems="center"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="8px"
        padding="3px 15px 3px 15px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "molecules/searchnew1 close icon")}
      ></Moleculessearchnew1closeicon>
      <Flex
        gap="24px"
        position="absolute"
        top="14px"
        left="1732px"
        direction="row"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 30")}
      >
        <Atomsiconsnotification
          width="24px"
          height="22.24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/notification")}
        ></Atomsiconsnotification>
        <Atomsavatar
          display="flex"
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="40px"
          position="relative"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "atoms/avatar")}
        ></Atomsavatar>
      </Flex>
    </View>
  );
}
