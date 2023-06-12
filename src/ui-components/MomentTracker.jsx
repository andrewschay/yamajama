/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Heading,
  Rating,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function MomentTracker(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="611px"
      height="518px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MomentTracker")}
    >
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="21px"
        left="40px"
        level="1"
        {...getOverrideProps(overrides, "Moment Header")}
      ></Heading>
      <Rating
        width="unset"
        height="unset"
        position="absolute"
        top="104px"
        left="40px"
        size="default"
        {...getOverrideProps(overrides, "MomentValue")}
      ></Rating>
      <TextAreaField
        width="300px"
        height="unset"
        label="Notes"
        position="absolute"
        top="151px"
        left="42px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "MomentNotes")}
      ></TextAreaField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="311px"
        left="39px"
        size="default"
        isDisabled={false}
        variation="default"
        {...getOverrideProps(overrides, "Submit")}
      ></Button>
      <View
        width="100px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="281px"
        left="55px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      ></View>
    </View>
  );
}
