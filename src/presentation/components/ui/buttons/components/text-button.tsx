import { View, Text } from 'react-native';
import React from 'react';
import { TextButtonProps } from '../types';
import { TextButtonWrapper } from '../styles';

const TextButton = (props: TextButtonProps) => {
  return <TextButtonWrapper {...props}>{props.children}</TextButtonWrapper>;
};

export default TextButton;
