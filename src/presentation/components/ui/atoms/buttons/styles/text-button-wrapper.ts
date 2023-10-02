import { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { ButtonSizes, ButtonVariants, TextButtonProps } from '../types';

const ButtonSm = css<TextButtonProps>`
  font-size: ${({ theme: { typography } }) => typography.size.sm};
  font-weight: ${({ theme: { typography } }) => typography.weight.medium};
`;

const ButtonMd = css<TextButtonProps>`
  font-size: ${({ theme: { typography } }) => typography.size.md};
  font-weight: ${({ theme: { typography } }) => typography.weight.bold};
`;

const ButtonLg = css<TextButtonProps>`
  font-size: ${({ theme: { typography } }) => typography.size.lg};
  font-weight: ${({ theme: { typography } }) => typography.weight.bold};
`;

const ButtonFill = css<TextButtonProps>`
  color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors['neutral'] : colors.white};
`;

const ButtonOutline = css<TextButtonProps>`
  color: ${({ theme: { colors }, color, disabled }) =>
    disabled ? colors['neutral'] : colors[color]};
`;

const ButtonGhost = css<TextButtonProps>`
  color: ${({ theme: { colors }, color, disabled }) =>
    disabled ? colors['neutral'] : colors[color]};
`;

const ButtonSize: Record<ButtonSizes, RuleSet<TextButtonProps>> = {
  sm: ButtonSm,
  md: ButtonMd,
  lg: ButtonLg,
};

const ButtonVariant: Record<ButtonVariants, RuleSet<TextButtonProps>> = {
  fill: ButtonFill,
  outline: ButtonOutline,
  ghost: ButtonGhost,
};

export const TextButtonWrapper = styled.Text<TextButtonProps>`
  ${(props) => ButtonSize[props.size]}
  ${(props) => ButtonVariant[props.variant]}
`;
