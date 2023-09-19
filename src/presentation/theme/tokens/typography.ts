type FontSize = BaseToken & {
  xlg: string;
  xxlg: string;
};

type FontWeight = {
  bold: string;
  'semi-bold': string;
  medium: string;
  regular: string;
}

export type Typography = {
  size: FontSize;
  weight: FontWeight
}

export const typography: Typography = {
  size: {
    sm: '12px',
    md: '16px',
    lg: '20px',
    xlg: '28px',
    xxlg: '43px',
  },
  weight: {
    bold: '600',
    "semi-bold": '500',
    medium: '400',
    regular: '300',
  }
}