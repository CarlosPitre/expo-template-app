import { Color } from '@/presentation/theme/tokens/color';
import { PressableProps, TextProps } from 'react-native';

type ButtonVariants = 'fill' | 'outline' | 'ghost';

type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonIconPosition = 'right' | 'left';

interface ButtonWrapperProps extends PressableProps {
  variant: ButtonVariants;
  size: ButtonSizes;
  color: keyof Color;
  radius: boolean;
}

interface TextButtonProps extends Partial<TextProps> {
  variant: ButtonVariants;
  size: ButtonSizes;
  color: keyof Color;
}

export type {
  ButtonVariants,
  ButtonSizes,
  ButtonIconPosition,
  ButtonWrapperProps,
  TextButtonProps,
};
