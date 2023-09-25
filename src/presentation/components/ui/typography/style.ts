import { Color } from '@/presentation/theme/tokens/color';
import styled, { css } from 'styled-components/native';
import { TypographyVariants } from './types';
import { RuleSet } from 'styled-components';
import { TextProps } from 'react-native';
import { TypographyProps } from '.';

type Variant = {
  [item in TypographyVariants]: RuleSet<TypographyProps>;
};

const lineHeight = {
  heading: 10,
  body: 140,
};

const letterSpacing = {
  heading: 0,
  body: 0,
};

const Heading = css<TypographyProps>`
  color: ${({ theme: { colors }, color }) => colors[color]};
  font-size: ${({ theme: { typography } }) => typography.size.xxlg};
  font-weight: ${({ theme: { typography } }) => typography.weight.bold};
`;

const Title = css<TypographyProps>`
  color: ${({ theme: { colors }, color }) => colors[color]};
  font-size: ${({ theme: { typography } }) => typography.size.xlg};
  font-weight: ${({ theme: { typography } }) => typography.weight.bold};
`;

const Subtitle = css<TypographyProps>`
  color: ${({ theme: { colors }, color }) => colors[color]};
  font-size: ${({ theme: { typography } }) => typography.size.lg};
  font-weight: ${({ theme: { typography } }) => typography.weight.bold};
`;

const Body = css<TypographyProps>`
  color: ${({ theme: { colors }, color }) => colors[color]};
  font-size: ${({ theme: { typography } }) => typography.size.md};
  font-weight: ${({ theme: { typography } }) => typography.weight.regular};
`;

const Small = css<TypographyProps>`
  color: ${({ theme: { colors }, color }) => colors[color]};
  font-size: ${({ theme: { typography } }) => typography.size.sm};
  font-weight: ${({ theme: { typography } }) => typography.weight.regular};
`;

const variants: Variant = {
  heading: Heading,
  title: Title,
  subtitle: Subtitle,
  body: Body,
  small: Small,
};

export const TypographyWrapper = styled.Text<TypographyProps>`
  ${(props) => variants[props.variant]}
`;
