import { Color } from '@/presentation/theme/tokens/color';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { ActivityIndicator, PressableProps } from 'react-native';
import TextButton from './components/text-button';
import { ButtonWrapper } from './styles';
import getIconColor from './styles/get-icon-color';
import getIconSize from './styles/get-icon-size';
import {
  ButtonIconPosition,
  ButtonSizes,
  ButtonVariants,
  ButtonWrapperProps,
  TextButtonProps,
} from './types';

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

  const ButtonContent = () => (
    <>
      {icon && positionIcon === 'left' && (
        <FontAwesome
          name={icon}
          size={getIconSize(size)}
          color={getIconColor({ variant, disabled, color })}
        />
      )}

      <TextButton {...propsText}>{text}</TextButton>

      {icon && positionIcon === 'right' && (
        <FontAwesome
          name={icon}
          size={getIconSize(size)}
          color={getIconColor({ variant, disabled, color })}
        />
      )}
    </>
  );

  return (
    <ButtonWrapper {...props}>
      {isLoading ? (
        <ActivityIndicator
          color={getIconColor({ variant, disabled, color })}
          size={getIconSize(size)}
        />
      ) : (
        <ButtonContent />
      )}
    </ButtonWrapper>
  );
};

export default Button;
