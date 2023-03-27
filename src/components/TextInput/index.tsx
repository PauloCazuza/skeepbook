import { Box, FormControl, Input, WarningOutlineIcon } from "native-base";
import { IInputComponentType } from "native-base/lib/typescript/components/primitives/Input/types";
import { KeyboardTypeOptions } from "react-native";

interface TextInputParams {
  value?: string | number;
  label?: string;
  keyboardType?: KeyboardTypeOptions
  onChangeText: (value: string) => void;
}

function TextInputCustom({
  value,
  label,
  onChangeText,
  keyboardType,
  ...rest }: TextInputParams) {
  return (
    <Box alignItems="center" width="100%">
      <FormControl isInvalid={false} w="75%" maxW="300px">
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          value={value?.toString()}
          keyboardType={keyboardType}
          {...rest}
          onChangeText={onChangeText}
          placeholder={label}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
}

export default TextInputCustom;