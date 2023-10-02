import { ButtonSizes } from '../types';

const getIconSize = (size: ButtonSizes) => {
  switch (size) {
    case 'lg':
      return 22;

    case 'sm':
      return 14;

    default:
      return 18;
  }
};

export default getIconSize;
