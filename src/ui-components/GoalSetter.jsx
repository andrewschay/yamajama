/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, TextAreaField, TextField, View } from "@aws-amplify/ui-react";
export default function GoalSetter(props) {
  const { goalName, overrides, ...rest } = props;
  return (
    <View
      width="523px"
      height="424px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GoalSetter")}
    >
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="39px"
        left="42px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "GoalName")}
      ></TextField>
      <TextAreaField
        width="300px"
        height="unset"
        position="absolute"
        top="135px"
        left="42px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "GoalNotes")}
      ></TextAreaField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="316px"
        left="41px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Save"
        {...getOverrideProps(overrides, "GoalButton")}
      ></Button>
    </View>
  );
}
