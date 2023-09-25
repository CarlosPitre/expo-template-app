import { Color } from '@/presentation/theme/tokens/color';
import { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { ButtonSizes, ButtonVariants, ButtonWrapperProps } from '../types';

const ButtonBase = css<ButtonWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.sm};
  border-radius: ${({ radius, theme: { radius: border } }) =>
    radius && border.md};
`;

const ButtonSm = css<ButtonWrapperProps>`
  padding: ${({ theme: { spacing } }) => spacing.sm};
  font-size: ${({ theme: { typography } }) => typography.size.sm};
  font-weight: ${({ theme: { typography } }) => typography.weight.medium};
  border-radius: ${({ radius, theme: { radius: border } }) =>
    radius && border.sm};
`;

const ButtonMd = css<ButtonWrapperProps>`
  padding: ${({ theme: { spacing } }) => spacing.md};
  font-size: ${({ theme: { typography } }) => typography.size.md};
  font-weight: ${({ theme: { typography } }) => typography.weight.bold};
`;

const ButtonLg = css<ButtonWrapperProps>`
  padding: ${({ theme: { spacing } }) => spacing.lg};
  font-size: ${({ theme: { typography } }) => typography.size.lg};
  font-weight: ${({ theme: { typography } }) => typography.weight.bold};
`;

const ButtonFill = css<ButtonWrapperProps>`
  background-color: ${({ theme: { colors }, color, disabled }) =>
    disabled ? colors['neutral-low'] : colors[color]};
  border-width: 1px;
  border-color: ${({ theme: { colors }, color, disabled }) =>
    disabled ? colors['neutral-low'] : colors[color]};
`;

const ButtonOutline = css<ButtonWrapperProps>`
  background-color: transparent;
  border-width: 1px;
  border-color: ${({ theme: { colors }, color, disabled }) =>
    disabled ? colors['neutral'] : colors[color]};
`;

const ButtonGhost = css<ButtonWrapperProps>`
  background-color: none;
  border: none;
`;

const ButtonSize: Record<ButtonSizes, RuleSet<ButtonWrapperProps>> = {
  sm: ButtonSm,
  md: ButtonMd,
  lg: ButtonLg,
};

const ButtonVariant: Record<ButtonVariants, RuleSet<ButtonWrapperProps>> = {
  fill: ButtonFill,
  outline: ButtonOutline,
  ghost: ButtonGhost,
};

export const ButtonWrapper = styled.Pressable<ButtonWrapperProps>`
  ${ButtonBase};
  ${(props) => ButtonSize[props.size]}
  ${(props) => ButtonVariant[props.variant]}
`;
