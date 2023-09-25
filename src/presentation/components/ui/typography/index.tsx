import { Color } from '@/presentation/theme/tokens/color';
import React from 'react';
import { TextProps } from 'react-native';
import { TypographyWrapper } from './style';
import { TypographyVariants } from './types';

export interface TypographyProps extends TextProps {
  variant: TypographyVariants;
  children: React.ReactNode;
  color: keyof Color;
}

const Typography = ({ color = 'neutral', children, ...rest }: TypographyProps) => {
  const props = { color, ...rest };
  return <TypographyWrapper {...props}>{children}</TypographyWrapper>;
};

export default Typography;
