import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import {
  OTPInputContainer,
  SplitBoxes,
  SplitBoxesFocused,
  SplitBoxText,
  SplitOTPBoxesContainer,
  TextInputHidden
} from './styles';

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }: any) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<TextInput>();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);
  const boxDigit = (_: any, index: number) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const StyledSplitBoxes = isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    );
  };

  return (
    <OTPInputContainer>
      <SplitOTPBoxesContainer onPress={handleOnPress}>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
      <TextInputHidden
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </OTPInputContainer>
  );
};

export default OTPInput;
