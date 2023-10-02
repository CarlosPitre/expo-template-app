import { Color, colors } from '@/presentation/theme/tokens/color';
import { ButtonVariants } from '../types';

interface Props {
  variant: ButtonVariants;
  disabled: boolean;
  color: keyof Color;
}

const getIconColor = ({ variant, disabled, color }: Props) => {
  switch (variant) {
    case 'outline':
      return disabled ? colors.neutral : colors[color];

    case 'ghost':
      return disabled ? colors.neutral : colors[color];

    default:
      return disabled ? colors.neutral : 'white';
  }
};

export default getIconColor;
