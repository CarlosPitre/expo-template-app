import { Color, colors } from '@/presentation/theme/tokens/color';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { ActivityIndicator, PressableProps, Text } from 'react-native';
import { ButtonWrapper } from './styles';
import {
  ButtonIconPosition,
  ButtonSizes,
  ButtonVariants,
  ButtonWrapperProps,
  TextButtonProps,
} from './types';
import TextButton from './components/text-button';

export interface ButtonProps extends PressableProps {
  variant?: ButtonVariants;
  positionIcon?: ButtonIconPosition;
  icon?: keyof typeof FontAwesome.glyphMap;
  size?: ButtonSizes;
  color?: keyof Color;
  radius?: boolean;
  text: string;
  isLoading?: boolean;
}

const Button = ({
  icon,
  color = 'brand',
  size = 'md',
  variant = 'fill',
  positionIcon = 'left',
  radius = true,
  text,
  disabled,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  const props: ButtonWrapperProps = {
    color,
    size,
    variant,
    radius,
    disabled,
    ...rest,
  };
  const propsText: TextButtonProps = { color, size, variant, disabled };

  const getColorIcon = () => {
    switch (variant) {
      case 'outline':
        return disabled ? colors.neutral : colors[color];

      case 'ghost':
        return disabled ? colors.neutral : colors[color];

      default:
        return disabled ? colors.neutral : 'white';
    }
  };

  const getSizeIcon = () => {
    switch (size) {
      case 'lg':
        return 22;

      case 'sm':
        return 14;

      default:
        return 18;
    }
  };

  const ButtonContent = () => (
    <>
      {icon && positionIcon === 'left' && (
        <FontAwesome name={icon} size={getSizeIcon()} color={getColorIcon()} />
      )}

      <TextButton {...propsText}>{text}</TextButton>

      {icon && positionIcon === 'right' && (
        <FontAwesome name={icon} size={getSizeIcon()} color={getColorIcon()} />
      )}
    </>
  );

  return (
    <ButtonWrapper {...props}>
      {isLoading ? (
        <ActivityIndicator color={getColorIcon()} size={getSizeIcon()} />
      ) : (
        <ButtonContent />
      )}
    </ButtonWrapper>
  );
};

export default Button;
