import { Color, colors } from './tokens/color';
import { Radius, radius } from './tokens/radius';
import { Spacing, spacing } from './tokens/spacing';
import { Typography, typography } from './tokens/typography';

export type ThemeApp = {
  radius: Radius;
  spacing: Spacing;
  typography: Typography;
  colors: Color;
};

export const themeApp: ThemeApp = {
  radius,
  spacing,
  typography,
  colors,
};
