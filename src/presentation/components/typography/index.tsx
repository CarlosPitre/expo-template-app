import { TextProps } from 'react-native';
import React from 'react';
import { TypographyVariants } from './types';
import { Color } from '@/presentation/theme/tokens/color';
import { TypographyWrapper } from './style';

export interface TypographyProps extends TextProps {
  variant: TypographyVariants;
  children: React.ReactNode;
  color: keyof Color;
}

const Typography = (props: TypographyProps) => {
  return <TypographyWrapper {...props}>{props.children}</TypographyWrapper>;
};

export default Typography;
