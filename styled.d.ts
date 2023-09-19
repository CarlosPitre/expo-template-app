import 'styled-components/native';
import { ThemeApp } from './src/presentation/theme/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeApp {}
}
