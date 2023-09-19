import { themeApp } from '@/presentation/theme/theme';
import styled, { ThemeProvider } from 'styled-components/native';

const ViewWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.info.variant};
  padding: ${({ theme: { spacing } }) => spacing.md};
`;

const TextWrapper = styled.Text`
  color: ${({ theme: { colors }}) => colors.neutral.main};
  font-size: ${({ theme: { typography } }) => typography.size.xlg};
  font-weight: ${({ theme: { typography } }) => typography.weight['semi-bold']};
`;

export default function App() {
  return (
    <ThemeProvider theme={themeApp}>
      <ViewWrapper>
        <TextWrapper>Open up App.tsx to start working on your app!</TextWrapper>
      </ViewWrapper>
    </ThemeProvider>
  );
}
