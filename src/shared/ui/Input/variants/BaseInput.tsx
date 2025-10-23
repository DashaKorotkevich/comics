import { Colors } from '@constants/theme';
import React from 'react';
import { StyleProp, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { styles as baseStyles } from '../styled';

interface BaseInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  isSuccess?: boolean;
  subText?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  error,
  containerStyle,
  style,
  isSuccess,
  subText,
  ...props
}) => {
  return (
    <View style={[baseStyles.container, containerStyle]}>
      {label && <Text style={baseStyles.label}>{label}</Text>/*если лэйбл тру, то выполнится */}
      <TextInput
        style={[
          baseStyles.input,
          error && baseStyles.inputError, //если ошибка есть, то стиль будет
          style,
        ]}
        placeholderTextColor={Colors.text.tertiary}
        {...props}
      />
      {error && <Text style={baseStyles.errorText}>{error}</Text>}
      {subText && <Text style={baseStyles.subText}>{subText}</Text>}
    </View>
  );
};

export default BaseInput;
